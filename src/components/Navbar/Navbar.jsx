import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Navbar.scss';

// Material-UI icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
          <div className="item">
            <img src="/img/en.png" alt="" />
            <span>USD</span>
            <KeyboardArrowDownIcon />
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

          {/* <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div> */}
        </div>

        <div className="center">
          <Link className="link" to="/">
            URBAN APPAREL
          </Link>
        </div>

        <div className="right">
          {/* <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div> */}

          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />

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
