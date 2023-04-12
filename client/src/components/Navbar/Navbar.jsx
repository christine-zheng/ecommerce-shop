import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useSearchParams } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Navbar.scss';

// Material-UI icons
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

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
            <NavLink className="link" to="/products/1" activeClassName="active">
              Women
            </NavLink>
          </div>

          <div className="item">
            <NavLink className="link" to="/products/2" activeClassName="active">
              Men
            </NavLink>
          </div>

          <div className="item">
            <NavLink className="link" to="/products/5" activeClassName="active">
              Accessories
            </NavLink>
          </div>

          <div className="item">
            <NavLink className="link" to="/products/6" activeClassName="active">
              Shoes
            </NavLink>
          </div>

          <div className="item">
            <NavLink className="link" to="/products/4" activeClassName="active">
              New Arrivals
            </NavLink>
          </div>

          <div className="item">
            <NavLink className="link" to="/products/3" activeClassName="active">
              Sale
            </NavLink>
          </div>
        </div>

        <div className="right">
          <div className="icons">
            <SearchIcon />
            <FavoriteBorderOutlinedIcon />
            <PersonOutlineOutlinedIcon />

            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingBagOutlinedIcon />
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
