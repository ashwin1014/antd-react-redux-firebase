import React, {Component} from 'react';
import { Card, Row, Col } from 'antd';
import axios from 'axios';

const { Meta } = Card;


class Products extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        axios.get('http://temp.dash.zeta.in/food.php')
             .then(res=>{
                this.setState({
                    items: res.data.recipes
                })
             })
    }

    generateKey = () => {
        return ((new Date().getTime())*Math.random()).toString(36).substr(0,8)
    }

  
    render() {
        console.log(this.props.toFilter)
        const foodItems = this.state.items.map(item=>{
            return (
                <Col lg={{ span: 8}} sm={{ span: 12}} style={{ marginBottom: 30 }} key={this.generateKey()}>
                    <Card
                     style={{ width: 300 }}
                     cover={<img alt="food-item" src={item.image} />}
                    >
                    <Meta
                     title={item.name}
                     description={item.details}
                    />
                    </Card>
                </Col>            
            )
        })
        return(
           <>
            <h1>All Items</h1>
            <Row type="flex" justify="start">
               {foodItems}
            </Row>
           </>
        )
    }
}


export default Products;