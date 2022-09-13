import { createContext, useEffect, useState } from "react"
import { API_URL, PHOTOS_SIZE } from "../utils/constants";

export const GalleryContext = createContext(null)

export const GalleryProvider = ({children}) => {

    const [ photos, setPhotos ] = useState([]);
    const [ selectedImage, setSelectedImage ] = useState("");  //selectedImage e idto

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${API_URL}/photos?_limit=${PHOTOS_SIZE}`)
            const data = await response.json()
            setPhotos(data)
          }
      
          fetchData()
    }, [])

    const deleteImage = (id) => {
        const i = photos.filter(photo => id !== photo.id)
        setPhotos(i);
        setSelectedImage("")
    }

    const contextValue = {
        photos,
        deleteImage,
        selectedImage, 
        setSelectedImage,
    }

    // const user = {
    //     name: "Stefani",
    //     lastname: "Nelkovska",
    //     age: 21
    // }

    return (
        <GalleryContext.Provider  value={contextValue}>
            {children}
        </GalleryContext.Provider>
    )
}
 //SE OVA E SEKOGAS ISTO, OSVEN CONST USER = TOA SE MENUVA VO ZAVISNOST STO SAKAME DA IMAME I STO NI TREBA