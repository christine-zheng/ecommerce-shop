import React from 'react';
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import './List.scss';

// Display [filtered] products
const List = ({ catId, maxPrice, sort, subCats }) => {
  // fetch data:
  // filter by category ID
  // then filter by the selected sub-categories
  // sort by asc or desc
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${catId}${subCats.map(
      (item) => `&filters[sub_categories][id][$eq]=${item}`
    )}&filters[price][$lte]=${maxPrice}${sort ? `&sort=price:${sort}` : ''}`
  );

  // if data exists, map each item to the Card component
  return (
    <div className="list">
      {error
        ? 'Something went wrong!'
        : loading
        ? 'loading...'
        : data?.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
};

export default List;
