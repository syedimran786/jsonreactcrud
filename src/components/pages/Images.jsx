import ButtonComponent from "../ButtonComponent"
import { useForm } from "react-hook-form"

let userErrors = {
    required: { value: true, message: "Username is Mandatory" },
    minLength: { value: 6, message: "Username Should Contain Atleast 6 Characters" },
    pattern: { value: /^[A-Za-z]+$/g, message: "Username Should Contain Only Alphabets" }
}

let passErrors = {
    required: { value: true, message: "Password is Mandatory" }
}

function Login() {

    let { register, reset, formState: { errors }, handleSubmit } = useForm();
    let sendForm = (data) => {
        console.log(data);
        reset()
    }
    console.log(errors)


    return (
        <form onSubmit={handleSubmit(sendForm)}>
            <div>
                <input type="text" placeholder='Username' {...register("username", userErrors)} />
                <small style={{ color: "red" }}>{errors.username?.message}</small>
            </div>
            <div>
                <input type="password" placeholder='Password' {...register("password", passErrors)} />
                <small style={{ color: "red" }}>{errors.password?.message}</small>
            </div>
            <ButtonComponent classname="update-message">Login</ButtonComponent>
        </form>
    )
}

export default Login
