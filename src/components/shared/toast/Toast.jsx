import React, { createContext, useRef } from 'react'
import { Toast as Toaster } from 'primereact/toast';

const ToastContext = createContext()

function Toast({ children }) {
    const toast = useRef()
    return (
        <ToastContext.Provider value={toast}>
            {children}
            <Toaster ref={toast} />
        </ToastContext.Provider>
    )
}

export default Toast
export { ToastContext }