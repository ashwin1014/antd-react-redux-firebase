import React, {Component} from 'react';
import { Card, Row, Col, Button  } from 'antd';
import {connect} from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import './Products.css';
// import axios from 'axios';

const { Meta } = Card;


class Products extends Component {

    // state = {
    //     items: []
    // }

    // componentDidMount() {
    //     axios.get('http://temp.dash.zeta.in/food.php')
    //          .then(res=>{
    //             this.setState({
    //                 items: res.data.recipes
    //             })
    //          })
    // }

    // generateKey = () => {
    //     return ((new Date().getTime())*Math.random()).toString(36).substr(0,8)
    // }

  
    render() {
        // console.log(this.props.toFilter)
        // console.log('PROPS:',this.props.recipesItems.firestore.ordered.recipes)
         let foodItems = this.props.recipesItems.firestore.ordered.recipes;
         let foodItemsHtml;

        if(this.props.toFilter === 'All') {
            foodItemsHtml = foodItems && foodItems.map(ele=>{
                return (
                    <Col lg={{ span: 8}} sm={{ span: 12}} style={{ marginBottom: 30 }} key={ele.id}>
                        <Card
                            style={{ width: 300 }}
                            cover={<img alt="food-item" src={ele.image} />}
                            actions={[<p>&#8377; {ele.price}</p>,<Button>Add to cart</Button>]}
                        >
                        <Meta
                            title={ele.name}
                            description={ele.details}
                        />
                        </Card>
                    </Col>            
                )
            })
        } else {
            let filtered = foodItems && foodItems.filter(ele=>{
               return ele.category === this.props.toFilter
            })
           
            foodItemsHtml = filtered.map(ele=>{
                return (
                    <Col lg={{ span: 8}} sm={{ span: 12}} style={{ marginBottom: 30 }} key={ele.id}>
                        <Card
                            style={{ width: 300 }}
                            cover={<img alt="food-item" src={ele.image} />}
                            actions={[<p>&#8377; {ele.price}</p>,<Button>Add to cart</Button>]}
                        >
                        <Meta
                            title={ele.name}
                            description={ele.details}
                        />
                        </Card>
                    </Col>            
                )
            })
            
        }
    

        return(
           <>
            <h1>{this.props.toFilter}</h1>
            <Row type="flex" justify="start">
               {foodItemsHtml}
            </Row>
           </>
        )
    }
}


const mapStateToProps = (state) => {
//  console.log(state.firestore.ordered.recipes)
//  console.log(state)
//  console.log(state.project.recipes)
    return {
       recipesItems: state
    }
}


export default compose(
    firestoreConnect(()=>['recipes']),
    connect(mapStateToProps)
)(Products);