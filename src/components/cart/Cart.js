import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeItemFromCart } from '../../actions/cartActions';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Typography, Layout } from 'antd';
import styles from './cart.module.css';

const { Title } = Typography;
const { Header } = Layout;


const Cart = props => {
    // console.log(props.cartItems)
    return (
       <>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          </Header>
        </Layout>
          <div className="container" style={{marginTop:80}}>
          {
              props.cartItems.length>0 ? 
              <Row>
              <Col span={12} style={{boxShadow: '0 0 5px rgba(0,0,0,0.35)', top:10, paddingBottom:10}}>
                {
                    props.cartItems && props.cartItems.map(item => {
                        return (
                          <div key={item.id}>                            
                          <Col  span={16} style={{top:10}}>
                          <div className={styles.itemsContainer}>
                              <Col span={4}>
                              <img src={item.image} alt="cart-item" className="responsive-img"/>
                              </Col>
                              <Col span={12}>
                              <div className={styles.itemsContainer}>
                                  Name: {item.name} <br/>
                                  Price: &#8377;{item.price * item.count} <br/>
                                  <Button  shape="circle" icon="minus" onClick={()=>props.removeItemFromCart(props.cartItems, item)}/>
                                    &nbsp;{item.count}&nbsp;
                                  <Button  shape="circle" icon="plus" onClick={()=>props.addToCart(props.cartItems, item)}/>
                              </div>
                              </Col>
                            </div>
                          </Col>                                          
                          </div>                           
                        );
                    })
                }
                <Col span={16}>
                <Button type="primary" icon="left" className="right">
                    <Link to={'/home'} style={{color:'#FFF'}}>Continue Shopping</Link>
                </Button>
                </Col>
              </Col>
              <Col span={8} offset={2} style={{boxShadow: '0 0 5px rgba(0,0,0,0.35)', top:10, paddingBottom:10}}>
                <div className="container">
                  <Title level={4}>PRICE DETAILS</Title>
                    Items: {props.cartItems.length} Item(s) <br/>
                    Amount Payable: &#8377;{props.cartItems && props.cartItems.reduce((acc, item)=>acc + item.price*item.count,0)} <br/>
                  <Button type="primary">
                    <Link to={'/checkout'}>Place Order</Link>
                  </Button>
                </div>
              </Col>
          </Row>: 
            <div className="container center">
                <Title className="container">No Items in Cart</Title>
                <Button type="primary">
                    <Link to={'/home'}>Go To Home Page</Link>
                </Button>
            </div>
          }
      </div>
       </>
    )
};

const mapStateToProps = state => {
   return {
    cartItems: state.cart.items
   }
 };

export default connect(mapStateToProps, {addToCart, removeItemFromCart})(Cart)
