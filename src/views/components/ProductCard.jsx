import React, { Component } from 'react'
import '../../bootstrap.css';
import '../../App.css';

// export default class ProductCard extends Component {
//     render() {
//         return (
//             <div style={{ width: "240px", padding: "16px", border: "1px solid black", borderRadius: "7px" }}>
//                 <h3>Nama: Nama Product</h3>
//                 <h4>Price: Rp. Sekian</h4>
//                 <p>
//                     Description : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sequi odit minima dolorum ipsam cumque dicta harum eos possimus temporibus. Iure quod harum fugiat quam accusamus deserunt cum corrupti cumque.

//                 </p>
//             </div>
//         )
//     }
// }
const ProductCard = (props) => {
    const { productData } = props
    const { author, title, review, desc, price, discount, image, stock } = productData
    let discHarga = (price - (price * (discount / 100)))
    discHarga = discHarga.toFixed(2)
    const renderItem = () => {
        if (stock) {
            return (
                <>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <img className="image" src={image} alt="" />
                            </div>
                            <div className="col-sm">
                                <p style={{ color: "gray",textAlign:"left" }}>{author}</p>
                                <h4 style={{textAlign:"left"}}>{title}</h4>
                                <p style={{ color: "gray",textAlign:"left" ,fontSize:"14px" }}>{review}/5 Review</p>
                                <p style={{textAlign: "justify" , fontSize:"11pt"}}>{desc}</p>
                            {
                                discount > 0 ? (
                                    <p style={{ fontSize: "14px", fontWeight: "bold" , textAlign:"left" }}>${discHarga} <span style={{ fontSize: "14px", color: "grey", textDecoration: "line-through" }}>${price}</span></p>


                                ) : <p style={{ fontSize: "14px", fontWeight: "bold", textAlign:"left" }}>${price}</p>
                            }
                            <input type="button" className="btn-1 " value="BUY NOW" />
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <img className="image" src={image} alt="" />
                        </div>
                        <div className="col-sm">
                            <p style={{ color: "gray",textAlign:"left" }}>{author}</p>
                            <h4 style={{textAlign:"left"}}>{title}</h4>
                            <p style={{ color: "gray",textAlign:"left" }}>{review}/5 Review</p>
                            <p style={{textAlign: "justify" , fontSize:"11pt"}}>{desc}</p>
                            <p style={{ fontSize: "14px", fontWeight: "bold", textAlign:"left" }}>${discHarga} <span style={{ fontSize: "14px", color: "grey", textDecoration: "line-through" }}>${price}</span></p>
                            <input disabled type="button" className="btn-2 " value="BUY NOW" />
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div style={{ width: "550px", padding: "16px", borderRadius: "7px" }}>
           
            {renderItem()}
          
        </div>
    )
}
// if (diskon>0) {
//     return <h4>Diskon  Diskon% menjadi harga setelah diskon</h4>
// }else{
//     return null
// }
export default ProductCard