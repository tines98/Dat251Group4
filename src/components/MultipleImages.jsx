import React, { useState } from 'react'
// import { showImage } from "components/DisplayImage.jsx"
import { storage, ref, listAll, getDownloadURL } from "../firebase"

function getImages(setImages) {
    console.log("Start");
    console.log("Start");
    const listRef = ref(storage, 'images/');
    const items = [];
    listAll(listRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
          console.log(folderRef);
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
      });
      res.items.forEach((itemRef) => { // <- This one
          console.info(itemRef.fullPath);
          items.push(itemRef.fullPath);
        // All the items under listRef.
      });
    }).catch((error) => {
        console.error(error);
      // Uh-oh, an error occurred!
    });

    console.log("Items:");
    console.log(items);
    setImages(items);

}

function getImageURL(setImageURL, imageName) {
    const pathReference = ref(storage, imageName);

    getDownloadURL(pathReference).then((value) => {
        setImageURL(value);
    }).catch((error) => {
        console.error("Something went wrong on getDownloadURL");
    }).finally(() => console.log("Done"));
}

function displayImages(images) {
    
    
}

const MultipleImages = () => {
    const [images, setImages] = useState([]);
    const [imageURL, setImageURL] = useState("");
    // const [imageURL, setImageURL] = useState("");
    return (
        <div className="form">
            <form onSubmit={(event)=>{
                event.preventDefault();
                getImages(setImages)
                images.map(image => {
                    console.log("HERE-----");
                    console.log(image);
                    console.log(images);
                    return <img alt="" src={"https://firebasestorage.googleapis.com/v0/b/rentivity-d61fc.…nds.jpg?alt=media&token=ab3f4f45-e074-444d-8b73-f2e8ecafd3b9"}/>
                    // getImageURL(setImageURL, image);
                    // return <img key={image} alt="" src={imageURL}/>
                })
                }}>
                <div className="input-container">
                    <label>Image </label>
                    <input className="ImageName" type="text" name="image" required />
                </div>
                    <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
            
        </div>
    )
}

export default MultipleImages;
