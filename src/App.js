import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Holiday from "./components/Holiday/Holiday"

function App() {
  const [holidays,setHolidays] = useState([]);
  const [images,setImages] = useState([]);

  const getHolidays = async () => {
    const response = await fetch("http://localhost:8080/api/holidays");
    const holidayData = await response.json();
    setHolidays(holidayData);
    getImages();
 
}

const getImages = async () => {
  var allImages = [];

  for (const holiday of holidays) {
    const holidayId = holiday.id;
    const response = await fetch(`http://localhost:8080/api/holidays/${holidayId}/images`);
    const imageData = await response.json();
    var currentImages = [];
   
    for(const image of imageData){
      currentImages.push(image.url);
    }
    allImages.push(currentImages);
  }

  setImages(allImages);
  
}


useEffect(() =>{
  getHolidays();

},[])

useEffect(() =>{
  getImages();
  
},[holidays])
  return (

    <div >
           {images[0] &&holidays.map((holiday,index) => (<Holiday holiday={holiday} images={images[index]}/>)
            )}
        </div>

  );
}

export default App;
