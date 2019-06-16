import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Button, Badge, Dropdown } from 'antd';
import {Link} from 'react-router-dom';
import Products from '../Products/Products';
import CartItems from '../cart/CartItems';
import styles from './Home.module.css';


const { Header, Sider, Content } = Layout;

 class Home extends Component {

    state = {
        collapsed: false,    
        width: ''
      };
    
      componentDidMount() {
         window.addEventListener("resize", this.checkDimensions);
      };
    
      componentWillUnmount() {
         window.removeEventListener("resize", this.checkDimensions);
      };

      checkDimensions = () => {
        this.setState({
          width: window.innerWidth
        });
    
        if(this.state.width < 600) {
          this.setState({
            collapsed: true,
          });
        } else {
          this.setState({
            collapsed: false,
          });
        }
      };

      signout = () => {
       // firebaseApp.auth().signOut();
       alert('Signout')
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

    
    render() {
      // console.log(this.props.cartItems)
        return (
            <Layout>
             <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>All</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>Starters</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span>Dessert</span>
                </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="upload" />
                  <span>Drinks</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                  style={{padding: 20}}
                />
                <div className={styles.btn_container}>
                    <Button onClick={this.signout}>Signout</Button>
                    <Badge count={this.props.cartItems.length}>
                     <Dropdown overlay={CartItems}>
                      <Link to='/viewcart' className="ant-dropdown-link">
                          <Button  type="primary" shape="circle" icon="shopping-cart" size="default" style={{marginLeft: 10}}/>
                      </Link> 
                     </Dropdown>                                     
                    </Badge>
                </div>                
              </Header>
              <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  background: '#fff',
                  height: 'calc(100vh - 112px)',
                  overflow: 'auto'
                }}
              >
                <Products/>
              </Content>
            </Layout>
          </Layout>
        )
    }
};

const mapStateToProps = state => {
  // console.log(state.cart.items.length)
 return {
  cartItems: state.cart.items
 }
};

export default connect(mapStateToProps)(Home)

