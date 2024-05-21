import React, { useEffect, useState } from 'react'
import ButtonComponent from '../ButtonComponent'
import "../css/Products.css"
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Products() {

  let [products, setproducts] = useState([]);
  let navigateToProductDetails = useNavigate()

  let getProducts = async () => {
    try {
      let { data } = await axios.get("http://localhost:3000/products")
      setproducts(data)
    }
    catch (err) {

    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  let viewProduct = (pid) => {

    navigateToProductDetails(`/productdetails/${pid}`)
  }
  return (
    <section className='products'>
      {products.map(({ id, pname, price, imgurl }, slno) => {
        return <div className='product' key={id}>
          <h3>{slno + 1}</h3>
          <img src={imgurl} alt="" />
          <h2>{pname}</h2>
          <h4>{price}</h4>
          <ButtonComponent classname="view" onclick={() => { viewProduct(id) }}>
            <FaEye />
          </ButtonComponent>
          <ButtonComponent classname="update">
            <MdEdit />
          </ButtonComponent>
          <ButtonComponent classname="delete">
            <MdDelete />
          </ButtonComponent>
        </div>

      })}
    </section>
  )
}

export default Products
