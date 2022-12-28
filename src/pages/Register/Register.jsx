import React from 'react'

import './register.css'

function Register() {
    return (
        <div className='register' id='registration'>
            <div className="bubble register-container">
                {/* <section id="reservation"> */}
                <div className="titles">
                    <h1 class="big">Register</h1>
                    <h2 class="title">Fill this form to create an account</h2>
                </div>
                <form action="">
                    <label> Your Name</label>
                    <input type="text" />
                    <label> Your Email</label>
                    <input type="email" />
                    <label> Your Phone Number</label>
                    <input type="text" />
                    <label> Your Password</label>
                    <input type="password" />
                    <label> Confirm Your Pasword</label>
                    <input type="password" />
                    <input type="date" />
                    <input type="submit" value="Make The Reservation" />
                </form>
                {/* </section> */}
            </div>
        </div>
    )
}

export default Register