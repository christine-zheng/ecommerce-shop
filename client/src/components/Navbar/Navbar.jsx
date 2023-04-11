import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Navbar.scss';

// Material-UI icons
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // if checkout was successful, reset cart item count to 0
  const [searchParams] = useSearchParams();
  const resetCartCount = searchParams.get('success') === 'true';

  // access the cart state (redux store)
  const products = useSelector((state) => state.cart.products);

  const getTotalCartItems = () => {
    let count = 0;
    products.forEach((item) => (count += item.quantity));
    return count;
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="brand">
            <Link className="link" to="/">
              URBAN APPAREL
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/5">
              Accessories
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/6">
              Shoes
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/4">
              New Arrivals
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/3">
              Sale
            </Link>
          </div>
        </div>

        <div className="right">
          <div className="icons">
            <SearchIcon />
            <FavoriteBorderOutlinedIcon />
            <PersonOutlineOutlinedIcon />

            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{resetCartCount ? 0 : getTotalCartItems()}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
