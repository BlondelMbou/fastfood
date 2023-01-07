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
import Input from '../../components/shared/inputs/Input';

const validationSchema = yup.object({
    name: yup.string().min(4, "should have at least 4 caracters").required("This field is required"),
    email: yup.string().email("Should be a valid email").required("This field is required"),
    password: yup.string().min(4, "invalid password").required("this field is required")
})

function Login() {
    const [loading, setLoading] = useState('')
    const formik = useFormik({
        initialValues: {
            name: '',
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

    // console.log("the formik values ", formik.values)
    return (
        <div className='login' id='login'>
            <div className="bubble login-container">
                {/* <section id="reservation"> */}
                <div className="titles">
                    <h1 class="big">Login</h1>
                    <h2 class="title">Fill this form to get connected to application</h2>
                </div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <Input name='name' type='text' label="Enter name" errorText="Username is not available."
                        error={formik.touched.name && formik.errors.name}
                        change={formik.handleChange} blur={formik.handleBlur}
                    />
                    <Input name='email' type='text' label="Enter email" errorText="Email is not available." error={formik.touched.email && formik.errors.email}
                        change={formik.handleChange} blur={formik.handleBlur}
                    />
                    <Input name='password' type='password' label="Enter password" errorText="Username is not available." error={formik.touched.password && formik.errors.password}
                        change={formik.handleChange} blur={formik.handleBlur}
                    />
                    <Button label="Login" type='submit' loading={handleLoading('button')}
                        onClick={formik.handleSubmit} />
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