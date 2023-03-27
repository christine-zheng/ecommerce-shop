import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './FeaturedProducts.scss';
import axios from 'axios';

const FeaturedProducts = ({ type }) => {
  // const data = [
  //   {
  //     id: 1,
  //     img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     title: 'Long Sleeve Graphic T-Shirt',
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 2,
  //     img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     title: 'Beanie',
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 3,
  //     img: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     title: 'Coat',
  //     isNew: false,
  //     oldPrice: 215,
  //     price: 165,
  //   },
  //   {
  //     id: 4,
  //     img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     title: 'Blouse',
  //     isNew: false,
  //     oldPrice: 63,
  //     price: 45,
  //   },
  // ];

  const [data, setData] = useState([]);

  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // how data is fetched when using strapi
        // send API token in the header
        const res = await axios.get(
          process.env.REACT_APP_API_URL +
            `/products?populate=*&filters[type][$eq]=${type}`,
          {
            headers: {
              Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN,
            },
          }
        );

        console.log(res.data.data);
        setData(res.data.data);
      } catch (error) {
        console.log('Caught Error: ', error);
      }
    };

    fetchData();
  }, [type]);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>

      <div className="bottom">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
