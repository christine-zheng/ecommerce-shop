"use strict";

// Stripe
const stripe = require("stripe")(process.env.STRIPE_KEY);

// Order Controller
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;

    try {
      // using strapi service, find each of the products in the database
      const lineItems = await Promise.all(
        products.map(async (item) => {
          const product = await strapi
            .service("api::product.product")
            .findOne(item.id);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: product.title,
              },
              unit_amount: product.price * 100,
            },
            quantity: item.quantity,
          };
        })
      );

      // create Stripe session
      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?canceled=true`,
        shipping_address_collection: {
          allowed_countries: ["US", "CA"],
        },
        payment_method_types: ["card"],
      });

      // update database with the new order
      await strapi.service("api::order.order").create({
        data: {
          products,
          stripeId: session.id,
        },
      });

      // send response
      return { stripeSession: session };
    } catch (error) {
      // send response: 500 server error
      ctx.response.status = 500;
      return error;
    }
  },
}));
