import React from 'react';
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import './FeaturedProducts.scss';

const FeaturedProducts = ({ type }) => {
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
