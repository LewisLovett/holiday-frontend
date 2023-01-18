import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from "react";
import HolidayList from './container/HolidayList/HolidayList';
import AddHoliday from './container/AddHoliday/AddHoliday';
import AddImage from './container/AddImage/AddImage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

        <Router>
                  <Routes>
            <Route path='/' element={<HolidayList holidays ={holidays} images={images} />}/>
            <Route path='/addHoliday' element={  <AddHoliday/>}/>
            <Route path='/addImage' element={   <AddImage holidays ={holidays}/>}/>
        
        </Routes>
        </Router>

  );
}

export default App;
