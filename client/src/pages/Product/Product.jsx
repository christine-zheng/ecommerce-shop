import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { addToCart } from '../../redux/cartReducer';
import Accordion from '../../components/Accordion/Accordion';
import './Product.scss';

// Material UI icon
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Product details page
const Product = () => {
  const [selectedImg, setSelectedImg] = useState('img');
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState('');

  // hook to dispatch action: addToCart
  const dispatch = useDispatch();

  // fetch product data
  const productId = useParams().id;
  const { data, loading, error } = useFetch(
    `/products/${productId}?populate=*`
  );

  // handle size selection
  const handleSelection = (event) => {
    setSelectedBtn(event.target.id);
    setSize(event.target.value);
  };

  const accordionData = [
    {
      title: 'Details',
      content: `Vendor: ${data?.attributes?.vendor}\nProduct Sku: ${data?.attributes?.sku}`,
    },
    {
      title: 'Shipping + Returns',
      content:
        'Free Shipping Over $75.\nReturns:\nReturning online orders is easy - send back your unwanted items by mail or take them to a UA store. Get refunded faster with an online return and print a return SmartLabel®. A $5 restocking fee will be deducted from your refund for most mailed returns. To return or exchange your items in person for free, return your items to your closest UA store.',
    },
  ];

  return (
    <div className="product">
      {error ? (
        'Something went wrong!'
      ) : loading ? (
        'loading...'
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg('img')}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg('img2')}
              />
            </div>

            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>

          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            {/* <p>{data?.attributes?.desc}</p> */}
            <span className="price">${data?.attributes?.price}</span>
            <p className="afterpay">
              or 4 payments of ${(data?.attributes?.price / 4).toFixed(2)} with{' '}
              <span>afterpay</span> or <span>Klarna</span>
            </p>
            <hr />

            <section className="color">
              <p>Color:</p>
              <span>{data?.attributes?.desc.split(': ')[1]}</span>
            </section>

            <section className="size">
              <p>Size*</p>
              <div className="size-options">
                <button
                  className={selectedBtn === '1' ? 'selected' : undefined}
                  id={'1'}
                  value="XS"
                  onClick={handleSelection}
                >
                  XS
                </button>

                <button
                  className={selectedBtn === '2' ? 'selected' : undefined}
                  id={'2'}
                  value="S"
                  onClick={handleSelection}
                >
                  S
                </button>

                <button
                  className={selectedBtn === '3' ? 'selected' : undefined}
                  id={'3'}
                  value="M"
                  onClick={handleSelection}
                >
                  M
                </button>

                <button
                  className={selectedBtn === '4' ? 'selected' : undefined}
                  id={'4'}
                  value="L"
                  onClick={handleSelection}
                >
                  L
                </button>

                <button
                  className={selectedBtn === '5' ? 'selected' : undefined}
                  id={'5'}
                  value="XL"
                  onClick={handleSelection}
                >
                  XL
                </button>
              </div>
            </section>

            <section className="quantity">
              <p>Qty*</p>
              <div className="quantity-input">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
            </section>

            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                    size,
                  })
                )
              }
            >
              ADD TO BAG
            </button>

            <div className="link">
              <div className="item">
                <FavoriteBorderIcon className="wishlist" /> Add to Wishlist
              </div>
            </div>

            <hr />

            <div className="info">
              {accordionData.map(({ title, content }) => (
                <div key={title}>
                  <Accordion title={title} content={content} />
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
