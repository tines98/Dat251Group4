import React, { useState } from 'react'
import { storage, ref, getDownloadURL } from "../firebase"

function showImage(setImage) {
    const imageName = document.querySelector(".ImageName").value;
    const pathReference = ref(storage, `images/${imageName}`);

    getDownloadURL(pathReference).then((value) => {
        console.log(value);
        setImage(value);
    }).catch((error) => {
        console.error("Something went wrong on getDownloadURL");
    }).finally(() => console.log("Done"));
}

const DisplayImage = () => {
    const [imageURL, setImageURL] = useState("");
    return (
        <div className="form">
            <form onSubmit={(event)=>{
                event.preventDefault();
                showImage(setImageURL)
                }}>
                <div className="input-container">
                    <label>Image </label>
                    <input className="ImageName" type="text" name="image" required />
                </div>
                    <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
            <img alt="" src={imageURL}/>
        </div>
    )
}

export default DisplayImage;
export {
    showImage
}
