import React, {Component} from 'react';
import Products from '../Products/Products';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

class AppLayout extends Component {

  state = {
    collapsed: true,
    toFilter: 'All'
  };


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  filterItem = (str) => {
     this.setState({
       toFilter: str
     })
  }

  render() {
    return(
      <Layout style={{height: "100vh"}}>
      
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
           <div className="logo" />
           <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" onClick={(e)=>this.filterItem("All")}>
                <Icon type="shopping-cart" />
                <span>All Items</span>
              </Menu.Item>
              <Menu.Item key="2" onClick={(e)=>this.filterItem("Starters")}>
               <Icon type="video-camera" />
               <span >Starters</span>
              </Menu.Item>
              <Menu.Item key="3" onClick={(e)=>this.filterItem("Dessert")}>
                <Icon type="upload" />
                <span >Dessert</span>
              </Menu.Item>
              <Menu.Item key="4"  onClick={(e)=>this.filterItem("Drinks")}>
                <Icon type="upload" />
                <span>Drinks</span>
              </Menu.Item>
              <Menu.Item key="5" onClick={(e)=>this.filterItem("Ice creams")}>
                <Icon type="upload" />
                <span >Ice cream</span>
              </Menu.Item>
           </Menu>
        </Sider>
      
        <Layout>
          <Header style={{ background: '#fff',  textAlign: 'left', padding: '0 18px' }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, overflow: 'auto'}}>
              <Products toFilter={this.state.toFilter}/>
          </Content>
      </Layout>

      </Layout>
    )
  }

}

export default AppLayout;