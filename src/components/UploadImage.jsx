import React from 'react'
import "./UploadImage.css"
import { storage, ref, db } from "../firebase"
import { uploadBytesResumable } from 'firebase/storage';
import { useState } from "react";
import { addDoc, collection } from 'firebase/firestore';

const onImageChange = (event,setImageName) => {
    
    const image = event.target.files[0];
    const imageName = image.name;
    const storageRef = ref(storage, `/images/${imageName}`);
    // const uploadTask = uploadBytesResumable(storageRef, image);
    uploadBytesResumable(storageRef, image);
    setImageName(imageName);
}

async function handleSubmit(event, imageName){
    console.log("submitting");
    const title = document.querySelector("#titleInput").value;
    const price = document.querySelector("#priceInput").value;
    const owner = "Tines";
    const city = "Bergen";

    console.log("db");
    console.log(db);

    const jason = { 
        name: title,
        image: imageName,
        owner: owner,
        price: price,
        city: city
    }

    const collectionRef = collection(db,"items");
    console.log()

    
    await addDoc(collectionRef, jason);
}

const UploadImage = () => {
    const [imageName, setImageName] = useState("");
    return (
        <div className="form">
            <form className='actualForm' onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e, imageName);
                }}>
                <label for="titleInput">Title</label>
                <input id="titleInput" type="text" required/>
                
                <label for="priceInput">Price</label>
                <input id="priceInput" type="number" required/>
                
                <label>Upload Image </label>
                <input id="imageInput" type="file" multiple accept="image/*" onChange={(e) => onImageChange(e,setImageName)} required/>
                
                <input type="submit"/>
            </form>
        </div>
    )
}

export default UploadImage;