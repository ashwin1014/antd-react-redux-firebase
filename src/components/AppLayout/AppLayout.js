import React, {Component} from 'react';
import Products from '../Products/Products';
import { Layout, Menu, Icon, Typography} from 'antd';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

class AppLayout extends Component {

  state = {
    collapsed: true,
    toFilter: 'All Items'
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
              <Menu.Item key="1" onClick={(e)=>this.filterItem("All Items")}>
                <Icon type="shopping-cart" />
                <span>All Items</span>
              </Menu.Item>
              <Menu.Item key="2" onClick={(e)=>this.filterItem("Starters")}>
               <Icon type="filter" />
               <span>Starters</span>
              </Menu.Item>
              <Menu.Item key="3" onClick={(e)=>this.filterItem("Dessert")}>
                <Icon type="filter" />
                <span>Dessert</span>
              </Menu.Item>
              <Menu.Item key="4"  onClick={(e)=>this.filterItem("Drinks")}>
                <Icon type="filter" />
                <span>Drinks</span>
              </Menu.Item>
              <Menu.Item key="5" onClick={(e)=>this.filterItem("Main course")}>
                <Icon type="filter" />
                <span>Main course</span>
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
            <Title>{this.state.toFilter}</Title>
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