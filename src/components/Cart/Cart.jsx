import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import './Cart.scss';

// Material-UI icon
import CloseIcon from '@mui/icons-material/Close';

// Stripe for handling checkout/payment
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';

const Cart = () => {
  // access the cart state (redux store)
  const products = useSelector((state) => state.cart.products);

  // hook to dispatch actions: removeItem, resetCart
  const dispatch = useDispatch();

  // if checkout was successful, dispatch action resetCart
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const resetCartCount = searchParams.get('success') === 'true';

    if (resetCartCount) {
      dispatch(resetCart());
    }
  }, [searchParams, dispatch]);

  const getSubtotal = () => {
    let subtotal = 0;
    products.forEach((item) => (subtotal += item.quantity * item.price));
    return subtotal.toFixed(2);
  };

  // loadStripe to initialize a Stripe object
  const stripePromise = loadStripe(
    'pk_test_51Mr48pLoEKrzVQdLUEpRsiJTnhZs9evxnScr47bdGymPagTjm5NQaxZEk8yxUJmfD5f2N9fVQzutZn3LVUHKiNmx00FRHFwuEP'
  );

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post('/orders', {
        products,
      });

      // go to Stripe's Checkout page
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart">
      <h1>My Bag</h1>
      {products?.map((item) => (
        <div key={item.id} className="item">
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />

          <div className="content">
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0, 100)}</p>

              <div className="price">
                {item.quantity} x ${item.price}
              </div>
            </div>

            <CloseIcon
              className="delete"
              onClick={() => dispatch(removeItem(item.id))}
            />
          </div>
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>${getSubtotal()}</span>
      </div>

      <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
