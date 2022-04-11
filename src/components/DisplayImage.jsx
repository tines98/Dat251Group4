import React, { useState } from 'react'
import { storage, ref, getDownloadURL } from "../firebase"

function showImage(setImage) {
    // return "https://firebasestorage.googleapis.com/v0/b/rentivity-d61fc.appspot.com/o/images%2FmyMillGrinds.jpg?alt=media&token=ab3f4f45-e074-444d-8b73-f2e8ecafd3b9";

    console.log("Bruh??!");
    const imageName = document.querySelector(".ImageName").value;
    const pathReference = ref(storage, `images/${imageName}`);
    // // const pathReference = ref(storage, "gs://rentivity-d61fc.appspot.com/test.jpg");
    // console.log(`images/${imageName}`);
    // console.log(pathReference.bucket);
    // console.log(pathReference.fullPath);

    // //-------------------------------------------------
    // // console.log(getDownloadURL(pathReference));
    getDownloadURL(pathReference).then((value) => {
        console.log(value);
        console.log("Hello mario");
        setImage(value);
    }).catch((error) => {
        console.log("Error");
    }).finally(() => console.log("Done"));
    //--------------------------------------------------
    // Promise.resolve();
    // console.log(test === "https://firebasestorage.googleapis.com/v0/b/rentivity-d61fc.appspot.com/o/images%2FmyMillGrinds.jpg?alt=media&token=ab3f4f45-e074-444d-8b73-f2e8ecafd3b9");
    // return test;
    // return String(test);
    // test.then((value) => console.log(value));
    // console.log(test.value);
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
