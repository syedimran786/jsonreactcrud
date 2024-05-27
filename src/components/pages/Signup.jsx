import React, { useState } from 'react'
import ButtonComponent from '../ButtonComponent'
import { validateForm } from '../../helpers/vanidateFunc'

function Signup() {

    let [fdata, setfdata] = useState({ fullname: "", password: "", mobile: "" })
    let [formErrors, setFormErrors] = useState({})

    let changeFdata = ({ target: { value, name } }) => {
        setfdata({ ...fdata, [name]: value })
    }

    let sendFormData = (e) => {
        e.preventDefault();
        console.log(fdata)
        setFormErrors(validateForm(fdata))
    }



    console.log("rendered")

    return (
        <form onSubmit={sendFormData}>
            <div>
                <input type="text" placeholder='Fullname' name='fullname' onChange={changeFdata} />
                <small style={{ color: "red" }}>{formErrors.fullname}</small>
            </div>
            <div>
                <input type="password" placeholder='Password' name='password' onChange={changeFdata} />
                <small style={{ color: "red" }}>{formErrors.password}</small>
            </div>
            <div>
                <input type="tel" placeholder='Mobile' name='mobile' onChange={changeFdata} />
                <small style={{ color: "red" }}>{formErrors.mobile}</small>
            </div>
            <div>
                <ButtonComponent classname="added-message">Signup</ButtonComponent>
            </div>

        </form >
    )
}

export default Signup
