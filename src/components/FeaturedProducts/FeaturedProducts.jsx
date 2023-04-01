import React from 'react';
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import './FeaturedProducts.scss';

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

  // fetch data
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type}</h1>
        <p>
          {type === 'featured'
            ? 'Discover the must-haves for this season before they sell out'
            : 'Check out our current popular and bestsellers items'}
        </p>
      </div>

      <div className="bottom">
        {error
          ? 'Something went wrong!'
          : loading
          ? 'loading...'
          : data?.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
