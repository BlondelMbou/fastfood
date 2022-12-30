import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

import './login.css'
import https from '../../https'

const validationSchema = yup.object({
    // name: yup.string().min(4, "should have at least 4 caracters").required("This field is required"),
    email: yup.string().email("Should be a valid email").required("This field is required"),
    password: yup.string().min(4, "invalid password").required("this field is required")
})

function Login() {
    const formik = useFormik({
        initialValues: {
            // name: '',
            email: '',
            password: ''
        }, validationSchema,
        onSubmit: (user) => login(user)
    })
    let history = useHistory()

    const login = async (user) => {
        console.log("the user of the form ", user)
        https.post('/auth/login', user)
            .then(res => {
                console.log("the response of login ", res.data)
                history.push('/')
            })
            .catch(error => {
                console.error('error on login', error)
                window.alert('Login failed')
            })
    }
    return (
        <div className='login' id='login'>
            <div className="bubble login-container">
                {/* <section id="reservation"> */}
                <div className="titles">
                    <h1 class="big">Login</h1>
                    <h2 class="title">Fill this form to get connected to application</h2>
                </div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <label> Your Name</label>
                    <input type="text" name='name' onChange={formik.handleChange} />
                    <label> Your Email</label>
                    <input type="email" name='email' onChange={formik.handleChange} />
                    <label> Your Password</label>
                    <input type="password" name='password' onChange={formik.handleChange} />
                    <input type="submit" value="Make The Reservation" />
                    {/* <button>Make a reservation</button> */}
                </form>
            </div>
        </div>
    )
}

export default Login