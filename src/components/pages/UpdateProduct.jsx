import React, { useEffect, useState } from 'react'
import InputComponent from '../InputComponent'
import { inputDetails } from '../../data/inputArray'
import "../css/Home.css"
import ButtonComponent from '../ButtonComponent'
import axios from 'axios'
import { faker } from '@faker-js/faker'
import Popup from '../Popup'

function UpdateProduct() {

    let [product, setProduct] = useState({ pname: "", price: "", qty: "", color: "", desc: "" })
    let productId = localStorage.getItem("productId")
    let changeProduct = ({ target: { name, value } }) => {
        setProduct({ ...product, [name]: value })
    }

    let updateProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/products/${productId}`, product)
        }
        catch (err) {
            console.log(err)
        }
    }

    let getSingleProduct = async () => {
        try {
            let { data } = await axios.get(`http://localhost:3000/products/${productId}`)
            setProduct(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getSingleProduct()
    }, [])



    return (
        <>
            <Popup message={`${product.pname} Updated Successfully`}
                classname="update-message" />
            <form onSubmit={updateProduct}>
                {inputDetails.map(i => {
                    i.value = product[i.name];
                    return <InputComponent key={i.id} {...i}
                        onchange={changeProduct} />
                }
                )}

                <ButtonComponent classname={"btn"} >
                    Update
                </ButtonComponent>

            </form>
        </>
    )
}

export default UpdateProduct
