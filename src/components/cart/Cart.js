import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Typography } from 'antd';
import styles from './cart.module.css';

const { Title } = Typography;

const Cart = props => {
    console.log(props.cartItems)
    return (
        <div className="container">
            {
                props.cartItems.length>0 ? 
                <Row>
                <Col span={12} style={{boxShadow: '0 0 5px rgba(0,0,0,0.35)'}}>
                  {
                      props.cartItems && props.cartItems.map(item=>{
                          return (
                           <div key={item.id}>                            
                            <Col  span={16}>
                            <div className={styles.itemsContainer}>
                               <Col span={4}>
                               <img src={item.image} alt="cart-item" className="responsive-img"/>
                               </Col>
                               <Col span={10}>
                               <div className={styles.itemsContainer}>
                                   Name: {item.name} <br/>
                                   Price: &#8377;{item.price} <br/>
                                   <Button  shape="circle" icon="minus"/>&nbsp;{item.count}&nbsp;<Button  shape="circle" icon="plus"/>
                               </div>
                               </Col>
                             </div>
                            </Col>                                          
                           </div>                           
                          );
                      })
                  }
                </Col>
                <Col span={8} offset={2} style={{boxShadow: '0 0 5px rgba(0,0,0,0.35)'}}>
                  <div className="container">
                    <Title level={4}>PRICE DETAILS</Title>
                    Items: 1 Item(s) <br/>
                    Amount Payable: 100
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
    )
};

const mapStateToProps = state => {
   return {
    cartItems: state.cart.items
   }
 };

export default connect(mapStateToProps)(Cart)
