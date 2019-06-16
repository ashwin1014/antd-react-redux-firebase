// // import { db } from './firebase';

// export const getItemsFromFirebase = (refernce, db) => {
//     db.collection(refernce).onSnapshot(snapshot=>{
//         let items = [];
//         snapshot.docs.forEach(ele=>{
//             const itemDetails = ele.data();
//             const id = ele.id;
//             items.push({itemDetails, id});                
//         });
//         // console.log(items)
//         this.props.fetchItems(items);
//     })
// }