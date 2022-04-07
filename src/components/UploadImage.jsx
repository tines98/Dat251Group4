import React from 'react'

import "./UploadImage.css"
import { storage, ref } from "../firebase"
import { uploadBytesResumable } from 'firebase/storage';


const onImageChange = (event) => {
    
    const image = event.target.files[0];
    const imageName = image.name;
    const storageRef = ref(storage, `/images/${imageName}`);
    // const uploadTask = uploadBytesResumable(storageRef, image);
    uploadBytesResumable(storageRef, image);

}

const UploadImage = () => {
    return (
        <div className="form">

            <div className="input-container">
                    <label>Upload Image </label>
                    <input type="file" multiple accept="image/*" onChange={onImageChange} />
            </div>
        </div>
    )
}

export default UploadImage;