import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
    persistStore, persistReducer,
    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { userReducer } from './users/reducers'

const persistConfig = {
    key: 'fast_food',
    storage,
}

const rootReducer = combineReducers({
    user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

const persistor = persistStore(store)

export { store, persistor }