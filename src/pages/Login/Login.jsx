import React from 'react'

import './login.css'

function Login() {
    return (
        <div className='login' id='login'>
            <div className="bubble login-container">
                {/* <section id="reservation"> */}
                <div className="titles">
                    <h1 class="big">Login</h1>
                    <h2 class="title">Fill this form to get connected to application</h2>
                </div>
                <form action="">
                    <label> Your Name</label>
                    <input type="text" />
                    <label> Your Email</label>
                    <input type="email" />
                    <label> Your Password</label>
                    <input type="text" />
                    <input type="date" />
                    <input type="submit" value="Make The Reservation" />
                </form>
                {/* </section> */}
            </div>
        </div>
    )
}

export default Login