import React from 'react'

import './animations.css'
import Header from './Header/Header'
import Hero from './Hero/Hero'

function AppRoot() {
    return (
        <div className="approot">
            <Header />
            <Hero />
        </div>
    )
}

export default AppRoot