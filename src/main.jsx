import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import store from "./redux/store.js"

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>
)


// store prop mai hum reduz ko batatey hai kons astore use krna hai 