import React, { useState } from 'react'
import InputComponent from '../InputComponent'
import { inputDetails } from '../../data/inputArray'
import "../css/Home.css"
import ButtonComponent from '../ButtonComponent'
import axios from 'axios'
import { faker } from '@faker-js/faker'

function Home() {

  let [product, setProduct] = useState({ pname: "", price: "", qty: "", color: "", desc: "" })

  let changeProduct = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value })
  }

  let addProduct = async (e) => {
    e.preventDefault();
    product.imgurl = faker.internet.avatar();
    try {
      await axios.post("http://localhost:3000/products", product)
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <form onSubmit={addProduct}>
      {inputDetails.map(i => {
        return <InputComponent key={i.id} {...i}
          onchange={changeProduct} />
      }
      )}

      <ButtonComponent classname={"btn"}>
        Add Product
      </ButtonComponent>

    </form>
  )
}

export default Home
