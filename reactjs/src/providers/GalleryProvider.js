import { createContext } from "react"

export const GalleryContext = createContext(null)

export const GalleryProvider = ({children}) => {
    const user = {
        name: "Stefani",
        lastname: "Nelkovska",
        age: 21
    }

    return (
        <GalleryContext.Provider  value={user}>
            {children}
        </GalleryContext.Provider>
    )
}
 //SE OVA E SEKOGAS ISTO, OSVEN CONST USER = TOA SE MENUVA VO ZAVISNOST STO SAKAME DA IMAME I STO NI TREBA