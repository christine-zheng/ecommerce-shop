import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.scss';

// Create grid system using CSS Flexbox
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="/img/women.webp" alt="" />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>

        <div className="row">
          <img src="/img/sale.png" alt="" />
          <button>
            <Link className="link" to="/products/3">
              Sale
            </Link>
          </button>
        </div>
      </div>

      <div className="col">
        <div className="row">
          <img src="/img/new.webp" alt="" />
          <button>
            <Link to="/products/4" className="link">
              New Arrivals
            </Link>
          </button>
        </div>
      </div>

      <div className="col col-lg">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="/img/men.webp" alt="" />
              <button>
                <Link to="/products/2" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/2876033/pexels-photo-2876033.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link to="/products/5" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <img
            src="https://images.pexels.com/photos/1449844/pexels-photo-1449844.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link to="/products/6" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
