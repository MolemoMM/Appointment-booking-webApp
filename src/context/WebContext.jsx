import { createContext } from 'react'
import { service } from '../assets/assets'

export const WebContext = createContext()

const WebContextProvider = (props) => {

    const value = {
        service
    }

    return (
        <WebContext.Provider value={value}>
            {props.children}
        </WebContext.Provider>
    )
}

export default WebContextProvider
