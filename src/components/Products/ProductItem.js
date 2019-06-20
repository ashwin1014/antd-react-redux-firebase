import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Icon, Button, Col, Tooltip, Typography, notification } from 'antd';
import styles from './products.module.css';
import { connect } from 'react-redux';
import { addToCart, removeItemFromCart } from '../../actions/cartActions';
const { Meta } = Card;
const { Paragraph } = Typography;


const ProductItem = props => {
    // console.log(props.itemDetails)

    const { category, details, discount, image, name, originalPrice, price, ratings, reviews } = props.itemDetails;

    const handleCart = (cartItems, type) => {
        
        const productDetails = {
          id: props.id,
          category,
          details,
          price,
          name,
          image,
          originalPrice,
          ratings,
          reviews,
          discount
        };

       let args;

       if(type==='add') {
           props.addToCart(cartItems, productDetails);
           args = {
            message: `${name} added to cart`,
            duration: 2,
          };          
       } else {
         props.removeItemFromCart(cartItems, productDetails);
         args = {
          message: `${name} removed from cart`,
          duration: 2,
        };       
       }
       notification.open(args);
    };
    let isFavourite = true;// TO BE CHANGED
    // console.log(props.cartItems)
    return (
        <Col style={{ marginBottom: 30 }}>
            <Card
                hoverable                
                cover={<img alt="food-item" src={image} />}                
                actions={[<p>&#8377; {price}</p>,
                  // <input type="text" value={props.cartItems[0].count ? props.cartItems[0].count:0}/>,
                  props.cartItems ? <Button onClick={()=>handleCart(props.cartItems,'add')}>Add to cart</Button>:<><Button  shape="circle" icon="minus" onClick={()=>handleCart(props.cartItems,'remove')}/>&nbsp;1&nbsp;<Button  shape="circle" icon="plus" onClick={()=>handleCart(props.cartItems,'add')}/></>
              ]}
            >
            <Tooltip placement="top" title={name}>
            <Meta
              title={name}
            />
            </Tooltip>           
            <Paragraph ellipsis={{ rows: 1, expandable: true }}>{details}</Paragraph>
            <div className={styles.other_details}>
            <p>Rating: {ratings} <Icon type="star" theme="filled" />({reviews} Reviews)</p>
            <br/>
            {isFavourite ? <Icon type="star" theme="filled" style={{color: 'yellow', fontSize: 20}}/>:<Icon type="star" style={{fontSize: 20}}/>}
            <br/>
            Category: {category}
           </div>            
          </Card>   
        </Col>
    )
}

ProductItem.defaultProps = {
  discount: 0
}

const mapStateToProps = state => {
  //  console.log(state.cart.items)
  return {
   cartItems: state.cart.items
  }
};

export default connect(mapStateToProps, {addToCart, removeItemFromCart})(ProductItem)
