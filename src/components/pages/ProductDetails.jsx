import React, { useEffect, useState } from 'react'
import "../css/SingleProduct.css"
import ButtonComponent from '../ButtonComponent'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function ProductDetails() {

    let [product, setProduct] = useState({})
    let { pid } = useParams();
    let navigateToProducts = useNavigate()

    let getSingleProduct = async () => {
        try {
            let { data } = await axios.get(`http://localhost:3000/products/${pid}`);
            setProduct(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getSingleProduct()
    }, [])

    console.log(product)

    let goBacktoProducts = () => {
        navigateToProducts("/products")
    }
    return (
        <div className='product-details'>
            <h1>{product.pname}</h1>
            <img src={product.imgurl} alt="" />
            <h5>Price: {product.price} <br /><br /> color: {product.color}</h5>
            <h5>Quantity: {product.qty}</h5>
            <p>Description: {product.desc}</p>
            <ButtonComponent classname="goto" onclick={goBacktoProducts}>
                Go To Products
            </ButtonComponent>
        </div>
    )
}

export default ProductDetails
