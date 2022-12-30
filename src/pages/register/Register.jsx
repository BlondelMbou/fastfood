import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { useDispatch } from 'react-redux'

import './register.css'
import https from '../../https'
import { setUser } from '../../store/users/actions';

const validationSchema = yup.object({
    name: yup.string().min(4, "should have at least 4 caracters").required("This field is required"),
    email: yup.string().email("Should be a valid email").required("This field is required"),
    phone: yup.string().min(4, "should have at least 4 caracters").required("This field is required"),
    // date: yup.date().max(new Date(), "Invalid Date"),
    password: yup.string().min(4, "invalid password").required("this field is required"),
    confPassword: yup.string().min(4, "invalid password").required("this field is required")
})

function Register() {
    const [loading, setLoading] = useState('')
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            // date: '',
            password: '',
            confPassword: ''
        }, validationSchema,
        onSubmit: (user) => register(user)
    })
    const toast = useRef(null)
    const dispatch = useDispatch()
    const history = useHistory()
    const register = async (user) => {
        console.log("the user of the form ", user)
        if (user.password !== user.confPassword) return formik.setFieldError('confPassword', "This should be match with password")
        setLoading('button')
        await https.post('/items/Clients?access_token=DF0hJ0LhGBEihV0Mqzo04wuE95WvxJ3U', user)
            .then(res => {
                console.log("the response of login ", res.data)
                dispatch(setUser(res.data.data))
                toast.current.show({ severity: 'success', summary: 'Login success', detail: 'Welcome to YourDish', life: 3 * 1000 })
                history.push('/')
            })
            .catch(error => {
                console.error('error on login', error)
                toast.current.show({ severity: 'error', summary: 'Login Failed', detail: 'Try again', life: 3 * 1000 })
            })
        setLoading('')
    }
    const handleLoading = (element) => loading == element


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
                    <Button label="Login" type='submit' loading={handleLoading('button')}
                        onClick={formik.handleSubmit} />
                    {/* <label> Birth Date</label>
                    <input type="date" name='date' onChange={formik.handleChange} /> */}
                    {/* <input type="submit" value="Make The Reservation" /> */}
                    <Toast ref={toast} />
                </form>
                {/* </section> */}
            </div>
        </div>
    )
}

export default Register