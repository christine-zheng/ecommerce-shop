import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';
import './Products.scss';

// display the products for the selected category (ie women, men, sale)
const Products = () => {
  const param = useParams();
  const catId = parseInt(param.id);

  // state
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState('');
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  // category name & image
  const info = [
    [
      'https://images.pexels.com/photos/1296372/pexels-photo-1296372.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'Women',
    ],
    [
      'https://images.pexels.com/photos/3588632/pexels-photo-3588632.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'Men',
    ],
    [
      'https://images.pexels.com/photos/5662862/pexels-photo-5662862.png?auto=compress&cs=tinysrgb&w=1600',
      'Sale',
    ],
    [
      'https://images.pexels.com/photos/862848/pexels-photo-862848.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'New Arrivals',
    ],
    [
      'https://images.pexels.com/photos/2344013/pexels-photo-2344013.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'Accessories',
    ],
    [
      'https://images.pexels.com/photos/7760804/pexels-photo-7760804.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'Shoes',
    ],
  ];

  // fetch all subcategories (ie t-shirt, dress) with the related category ID
  const { data, loading, error } = useFetch(
    `/sub-categories?filters[categories][id][$eq]=${catId}`
  );

  // update the sub-categories based on user selection
  const handleSubCats = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Browse By:</h2>

          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleSubCats}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>

        <div className="filterItem">
          <h2>Price Range:</h2>
          <div className="inputItem">
            <div className="filterPrice">
              <span className="spanMin">$0</span>
              <input
                type="range"
                min={0}
                max={500}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span className="spanMax">${maxPrice}</span>
            </div>
          </div>
        </div>

        <div className="filterItem">
          <h2>Sort By:</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort('asc')}
            />
            <label htmlFor="asc">Price Low to High</label>
          </div>

          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort('desc')}
            />
            <label htmlFor="desc">Price High to Low</label>
          </div>
        </div>
      </div>

      <div className="right">
        <img className="catImg" src={info[catId - 1][0]} alt="" />

        {error ? (
          'Something went wrong!'
        ) : loading ? (
          'loading...'
        ) : (
          <List
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            subCats={selectedSubCats}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
