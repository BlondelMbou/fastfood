import React from 'react'

import './animations.css'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Menu from './Menu/Menu'

function AppRoot() {
    return (
        <div className="approot">
            <Header />
            <Hero />
            <Menu />
        </div>
    )
}

export default AppRoot