import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";


export default function LoginForm() {
    // watch input value by passing the name of it
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    function mySubmit(obj) {
        //api call and validate username and password
        if (obj.username == "Sagar" && obj.password == "123") {
            // redirect to profile
            // window.location.href = "profile";    this is bad code.
            localStorage.setItem("isLoggedin", "true")
            navigate("/profile") // this is good code.
        } else {
            localStorage.setItem("isLoggedin", "false")
            alert("Invalid Username or Password.")
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <TextField
                error={errors?.username?.message}
                helperText={errors?.username?.message}
                label="Username"
                variant="outlined"
                type='text'
                {...register("username",
                    {
                        required: { value: true, message: "Username is required" },
                        maxLength: { value: 15, message: "Maximum 15 letter." }
                    })
                } />

            <br />
            <br />
            <TextField
                error={errors?.password?.message}
                helperText={errors?.password?.message}
                label="Password"
                variant="outlined"
                type="password"
                {...register("password", {
                    required: { value: true, message: "Password is required" }
                })} />
            <br />
            <br />
            <Button variant="contained" onClick={handleSubmit(mySubmit)}>LOGIN</Button>
            &nbsp;
            <Link to={'/signup'}>Go to Signup</Link>
        </div>
    )
}