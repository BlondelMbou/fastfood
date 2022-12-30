import React, { useState, useRef } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { useDispatch } from 'react-redux'


import './login.css'
import https from '../../https'
import { setUser } from '../../store/users/actions';

const validationSchema = yup.object({
    // name: yup.string().min(4, "should have at least 4 caracters").required("This field is required"),
    email: yup.string().email("Should be a valid email").required("This field is required"),
    password: yup.string().min(4, "invalid password").required("this field is required")
})

function Login() {
    const [loading, setLoading] = useState('')
    const formik = useFormik({
        initialValues: {
            // name: '',
            email: '',
            password: ''
        }, validationSchema,
        onSubmit: (user) => login(user)
    })
    const toast = useRef(null)
    const dispatch = useDispatch()
    const history = useHistory()

    const login = async (user) => {
        console.log("the user of the form ", user)
        setLoading('button')
        await https.get(`/items/Clients?filter[email]=${user.email}&filter[password]=${user.password}`)
            .then(res => {
                console.log("the response of login ", res.data)
                if (res.data.data.length) {
                    dispatch(setUser(res.data.data[0]))
                    toast.current.show({ severity: 'success', summary: 'Login success', detail: 'Welcome to YourDish', life: 3 * 1000 })
                    history.push('/')
                } else {
                    toast.current.show({ severity: 'error', summary: 'Login Failed', detail: 'Try again', life: 3 * 1000 })
                }
            })
            .catch(error => {
                console.error('error on login', error)
                toast.current.show({ severity: 'error', summary: 'Login Failed', detail: 'Try again', life: 3 * 1000 })
            })
        setLoading('')
    }
    const handleLoading = (element) => loading == element


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
                    <Button label="Login" type='submit' loading={handleLoading('button')}
                        onClick={formik.handleSubmit} />
                    {/* <input type="submit" value="Make The Reservation" /> */}
                    {/* <button>Make a reservation</button> */}
                    <Toast ref={toast} />
                </form>
            </div>
        </div>
    )
}

export default Login



/**
 const login = async (user) => {
        console.log("the user of the form ", user)
        setLoading('button')
        await https.post('/auth/login', user)
            .then(res => {
                console.log("the response of login ", res.data)
                dispatch(setUser(res.data.data))
                toast.current.show({severity:'success', summary: 'Login success', detail:'Welcome to YourDish', life: 3*1000})
                history.push('/')
            })
            .catch(error => {
                console.error('error on login', error)
                toast.current.show({severity:'error', summary: 'Login Failed', detail:'Try again', life: 3*1000})
            })
        setLoading('')
    }
 * 
 */