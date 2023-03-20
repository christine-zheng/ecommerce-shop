import React from 'react';
import Card from '../Card/Card';
import './List.scss';

// component for fetching [filtered] data
// if data exists, map each item to the Card component
const List = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Long Sleeve Graphic T-Shirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Beanie',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Coat',
      isNew: false,
      oldPrice: 215,
      price: 165,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Blouse',
      isNew: false,
      oldPrice: 63,
      price: 45,
    },
    {
      id: 5,
      img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Blouse',
      isNew: false,
      oldPrice: 63,
      price: 45,
    },
    {
      id: 6,
      img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Blouse',
      isNew: false,
      oldPrice: 63,
      price: 45,
    },
    {
      id: 7,
      img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Blouse',
      isNew: false,
      oldPrice: 63,
      price: 45,
    },
  ];

  return (
    <div className="list">
      {data?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
