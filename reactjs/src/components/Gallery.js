import { useContext } from "react";
import { GalleryContext } from "../providers/GalleryProvider";
import { Popup } from "./Popup";

export const Gallery = () => {
    const {photos, deleteImage, selectedImage, setSelectedImage} = useContext(GalleryContext)

// VEZBA - DA SE IZBRISE SLIKA NA KLIK

    return(
        <div>
            {/* <pre>{JSON.stringify(providerValue, null, 2)}</pre> */}

            {photos.map( photo => (
                <div key={photo.id} 
                style={{display: "inline-block"}} 
                onContextMenu={(e) => {
                    e.preventDefault()
                    setSelectedImage(photo.id) 
                }}
                >
                    <button onClick={() => deleteImage(photo.id)}
                    style={{border: "2px solid black", margin: "5px", padding: "5px"}}>
                     <img src={photo.thumbnailUrl} alt={photo.title} /> </button>
                </div>
            ))}

            {selectedImage && <Popup/>}
        </div>
    )
}