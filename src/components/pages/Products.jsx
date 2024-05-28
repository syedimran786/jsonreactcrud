import React, { useContext, useEffect, useState } from 'react'
import ButtonComponent from '../ButtonComponent'
import "../css/Products.css"
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Popup from '../Popup';
import { useModal } from '../useModal';
import { AuthContext } from '../Authentication';


function Products() {

  let [products, setproducts] = useState([]);
  let { hidePopup, setshowmodal, showmodal } = useModal()

  let navigateToProductDetails = useNavigate()
  let navigateToupdateProducts = useNavigate()



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

  let updateProduct = (id) => {
    localStorage.setItem("productId", id)
    navigateToupdateProducts("/updateproduct")
  }
  let deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`)
      setshowmodal(true)
    }
    catch (err) {
      console.log(err)
    }
    getProducts()

    hidePopup()
  }
  return (
    <section className='products'>
      {showmodal && <Popup message={`Product Deleted Successfully`} classname="delete-message" />}
      {products.map(({ id, pname, price, imgurl }, slno) => {
        return <div className='product' key={id}>
          <h3>{slno + 1}</h3>
          <img src={imgurl} alt="" />
          <h2>{pname}</h2>
          <h4>{price}</h4>
          <ButtonComponent classname="view" onclick={() => { viewProduct(id) }}>
            <FaEye />
          </ButtonComponent>
          <ButtonComponent classname="update" onclick={() => { updateProduct(id) }}>
            <MdEdit />
          </ButtonComponent>
          <ButtonComponent classname="delete" onclick={() => { deleteProduct(id) }}>
            <MdDelete />
          </ButtonComponent>
        </div>

      })}
    </section>
  )
}

export default Products
