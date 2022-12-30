import React from 'react';
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from '../store/store';

import './animations.css'
import Navigator from '../navigation/Navigator';

function AppRoot() {
    return (
        <div className="approot">
            <ReduxProvider store={store} >
                <PersistGate persistor={persistor}>
                    <Navigator />
                </PersistGate>
            </ReduxProvider>
        </div>
    )
}

export default AppRoot
