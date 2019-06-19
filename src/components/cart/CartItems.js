import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';

const CartItems = props => {
    return (
    <Menu>
         {
             props.cartItems && props.cartItems.map((item, index) => {
                 return (
                      <Menu.Item key={index}>{item.name}</Menu.Item>
                 )
             })
         }     
    </Menu>
    )
};

const mapStateToProps = state => {
    return {
     cartItems: state.cart.items
    }
  };

  export default connect(mapStateToProps)(CartItems)
