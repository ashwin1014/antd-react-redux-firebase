import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../../config/firebase';
import { Layout, Menu, Icon, Button, Badge, Dropdown, Input } from 'antd';
import { fetchItems } from '../../actions/productActions';
import { Link } from 'react-router-dom';
import { push } from "connected-react-router";
import Products from '../Products/Products';
import CartItems from '../cart/CartItems';
import styles from './Home.module.css';
import { db } from '../../config/firebase';

const { Header, Sider, Content } = Layout;
const Search = Input.Search;

 class Home extends Component {

    state = {
        collapsed: false,    
        width: '',
        searchValue: '',
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
        firebaseApp.auth().signOut().then(()=>{
            this.props.history.push('/')
        });
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

      onItemSearch = (searchValue, coll) => {
        console.log(searchValue)
        db.collection('recipes').where(coll, '>=', `${searchValue.toString()}`)
         .onSnapshot(snapshot=>{
          let items = [];
          snapshot.docs.forEach(ele=>{
              const itemDetails = ele.data();
              const id = ele.id;
              items.push({itemDetails, id}); 
              console.log(itemDetails)               
          });
          this.props.fetchItems(items);    
        }) 
      };

      menu = <CartItems/>

          
    render() {
      // console.log(this.props.cartItems)
        return (
            <Layout>
             <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" onClick={()=>this.onItemSearch('','category')}>
                  <Icon type="user" />
                  <span>All</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={()=>this.onItemSearch('Starters', 'category')}>
                  <Icon type="video-camera" />
                  <span>Starters</span>
                </Menu.Item>
                <Menu.Item key="3" onClick={()=>this.onItemSearch('Dessert','category')}>
                  <Icon type="upload" />
                  <span>Dessert</span>
                </Menu.Item>
                <Menu.Item key="4" onClick={()=>this.onItemSearch('Drinks', 'category')}>
                  <Icon type="upload" />
                  <span>Drinks</span>
                </Menu.Item>
                <Menu.Item key="5" onClick={()=>this.onItemSearch('Main Course', 'category')}>
                  <Icon type="upload" />
                  <span>Main Course</span>
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
                   <Search
                      placeholder="Search item"
                      onSearch={value => this.onItemSearch(value,'name')}
                      style={{ width: '50%' }}
                    />
                <div className={styles.btn_container}>
                    <Button onClick={this.signout}>Signout</Button>
                    <Badge count={this.props.cartItems.length}>
                     <Dropdown overlay={this.menu}>
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
                <Products searchvalue={this.searchValue}/>
              </Content>
            </Layout>
          </Layout>
        )
    }
};

const mapStateToProps = state => {
  // console.log(state.cart.items.length)
  const { items } = state;
 return {
    cartItems: state.cart.items,
    items
 }
};

export default connect(mapStateToProps, {fetchItems, push})(Home)

