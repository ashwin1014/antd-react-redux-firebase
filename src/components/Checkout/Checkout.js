import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddressForm from './AddressForm'
// import styles from './checkout.module.css';
import { Row, Col, Button, Typography, Layout,  Collapse   } from 'antd';

// import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from 'react-google-maps';
// import Geocode from 'react-geocode';
// import Autocomplete from 'react-google-autocomplete';
// import { mapKey } from '../../config/firebase';

const { Title } = Typography;
const { Header, Content } = Layout;
const Panel = Collapse.Panel;

// Geocode.setApiKey(mapKey);
// Geocode.enableDebug();


class Checkout extends React.Component {

    state = {
        latitude: '',
        longitute: '',  
    }

    componentDidMount () {
        this.getLocation();      

    }

    getLocation = () => {
        if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            } else { 
                alert("Geolocation is not supported by this browser.");
            }
    }

    showPosition = (position) => {
            this.setState({
                latitude:  position.coords.latitude,
                longitute: position.coords.longitude
            });
    }



   render() {
    return (
        <div style={{height: 'calc(100vh)'}}>
        <Layout>
           <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
           </Header>
        </Layout>
            <div className="container"  style={{marginTop:64, height:'calc(100vh - 64px)', overflow:'auto', marginRight:0}}>
            {
                this.props.cartItems.length>0 ? 
                <Row>
                <Col span={12} style={{boxShadow: '0 0 5px rgba(0,0,0,0.35)', top:10}}>                  
                <Collapse accordion>
                <Panel header="Add Address" key="1">    
                    <AddressForm/>               
                </Panel>
                <Panel header="Select Stored Address" key="2">
                </Panel>
                <Panel header="Payment Options" key="3">
                </Panel>
              </Collapse>
                </Col>
                <Col span={8} offset={2} style={{boxShadow: '0 0 5px rgba(0,0,0,0.35)', top:10, paddingBottom:10}}>
                  <div className="container">
                    <Title level={4}>PRICE DETAILS</Title>
                      Items: {this.props.cartItems.length} Item(s) <br/>
                      Amount Payable: &#8377;{this.props.cartItems && this.props.cartItems.reduce((acc, item)=>acc + item.price*item.count,0)} <br/>
                      <Button type="primary">
                        <Link to={'/viewcart'}>Review Order</Link>
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
        </div>
    )
   }
};

const mapStateToProps = state => {
    return {
     cartItems: state.cart.items
    }
  };

// const enhance = compose(
//     Form.create({ name: 'address_form' }),
//     connect(mapStateToProps),
// )

// export default enhance(Checkout);

//   export default compose(
//     Form.create({ name: 'address_form' }),
//     connect(mapStateToProps)(Checkout)
// );
export default connect(mapStateToProps)(Checkout);

//export default Form.create({ name: 'normal_login' })(SignUp);
