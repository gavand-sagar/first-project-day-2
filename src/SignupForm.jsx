import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function SignupForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    async function mySubmit(obj) {
        // call api to create a new user
        
        try{
            await axios.post("http://localhost:8080/create-user",obj)
            alert("User added")
        }
        catch(e){
            alert("Error occured")
            console.error(e)
        }
    }
    return (
        <div>
            <h1>Signup Form</h1>

            <TextField
                error={errors?.firstname?.message}
                helperText={errors?.firstname?.message}
                label="First Name"
                variant="outlined"
                type='text'
                {...register("firstname",
                    {
                        required: { value: true, message: "Firstname is required" },
                        maxLength: { value: 15, message: "Maximum 15 letters." }
                    })
                } />
            &nbsp;
            <TextField
                error={errors?.lastname?.message}
                helperText={errors?.lastname?.message}
                label="Last Name"
                variant="outlined"
                type='text'
                {...register("lastname",
                    {
                        required: { value: true, message: "Lastname is required" },
                        maxLength: { value: 15, message: "Maximum 15 letters." }
                    })
                } />

            <br />
            <br />

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
            &nbsp;
            <TextField
                error={errors?.email?.message}
                helperText={errors?.email?.message}
                label="Email"
                variant="outlined"
                type='text'
                {...register("email",
                    {
                        required: { value: true, message: "Email is required" },
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "Email is invalid"
                        }
                    })
                } />
            <br />
            <br />
            <TextField
                error={errors?.password?.message}
                helperText={errors?.password?.message}
                label="Password"
                variant="outlined"
                type='password'
                {...register("password",
                    {
                        required: { value: true, message: "password is required" },
                        minLength: {
                            value: 8,
                            message: "Mininum 8 charecters are required"
                        }
                    })
                } />
            &nbsp;
            <TextField
                error={errors?.repassword?.message}
                helperText={errors?.repassword?.message}
                label="Re-type Password"
                variant="outlined"
                type='text'
                {...register("repassword", {
                    validate: (value, formObj) => {
                        if (formObj.password == value) {
                            return  // no errors
                        } else {
                            return "re-typed password should match"
                        }
                    }
                })
                } />
            <br />
            <br />
            <Button variant="contained" onClick={handleSubmit(mySubmit)}>SIGNUP</Button>
            &nbsp;
            <Link to={'/login'}>Go to Login</Link>
        </div>
    )
}
