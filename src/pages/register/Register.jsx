import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import './register.css'

const validationSchema = yup.object({
    name: yup.string().min(4, "should have at least 4 caracters").required("This field is required"),
    email: yup.string().email("Should be a valid email").required("This field is required"),
    phone: yup.string().min(4, "should have at least 4 caracters").required("This field is required"),
    date: yup.date().max(new Date(), "Invalid Date"),
    password: yup.string().min(4, "invalid password").required("this field is required"),
    confPassword: yup.string().min(4, "invalid password").required("this field is required")
})

function Register() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            password: '',
            confPassword: ''
        }, validationSchema,
        onSubmit: (user) => console.log("the user of the form ", user)
    })
    return (
        <div className='register' id='registration'>
            <div className="bubble register-container">
                {/* <section id="reservation"> */}
                <div className="titles">
                    <h1 class="big">Register</h1>
                    <h2 class="title">Fill this form to create an account</h2>
                </div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <label> Your Name</label>
                    <input type="text" name='name' onChange={formik.handleChange} />
                    <label> Your Email</label>
                    <input type="email" name='email' onChange={formik.handleChange} />
                    <label> Your Phone Number</label>
                    <input type="text" name='phone' onChange={formik.handleChange} />
                    <label> Your Password</label>
                    <input type="password" name='password' onChange={formik.handleChange} />
                    <label> Confirm Your Pasword</label>
                    <input type="password" name='confPassword' onChange={formik.handleChange} />
                    <label> Birth Date</label>
                    <input type="date" name='date' onChange={formik.handleChange} />
                    <input type="submit" value="Make The Reservation" />
                </form>
                {/* </section> */}
            </div>
        </div>
    )
}

export default Register