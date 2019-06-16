import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../actions/productActions';
import ProductItem from './ProductItem';
import styles from './products.module.css';
import { db } from '../../config/firebase';
// import { getItemsFromFirebase } from '../../config/firebase.utils.manager';


class Products extends Component {


    componentDidMount() {
        db.collection('recipes').onSnapshot(snapshot=>{
            let items = [];
            snapshot.docs.forEach(ele=>{
                const itemDetails = ele.data();
                const id = ele.id;
                items.push({itemDetails, id});                
            });
            // console.log(items)
            this.props.fetchItems(items);
        });
    }
    

    render() {
        return (
            <div className={styles.grid}>
               {
                   this.props.items && this.props.items.map(item=>{
                       return (
                         <ProductItem key={item.id} itemDetails={item.itemDetails} id={item.id}/>
                       )
                   })
               }
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    const { items } = state;
    // console.log(items)
    return {
        items
    }
}

export default connect(mapStateToProps, { fetchItems })(Products)