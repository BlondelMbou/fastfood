import React from 'react'
import { InputText } from 'primereact/inputtext';

import './input.css'

function Input({ name, type, label, error, change, blur }) {
    return (
        <div className="p-float-label input-container">
            <InputText id={name} name={name} type={type}
                onChange={change} onBlur={blur} className={error ? "p-invalid block": ""}
            />
            <label htmlFor={name}>{label}</label>
            {error && <small id="username2-help" className="p-error block">{error}</small>}
        </div>
    )
}

export default Input