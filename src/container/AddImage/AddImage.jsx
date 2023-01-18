import "./AddImage.scss";

import { useEffect, useState } from "react";
import Holiday from "../../components/Holiday/Holiday";
import {Link} from "react-router-dom"

const AddImage = (props) => {
    const {holidays} = props;
    const [image,setImage] = useState({
        url: ""}
    );
    const [holidayId, setHolidayId] = useState();

    const addImage = async event => {
        console.log(holidayId);
        event.preventDefault();
        console.log(JSON.stringify(image));
        let response = await fetch(`http://localhost:8080/api/holidays/${holidayId}/images`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'        
            },
            body:JSON.stringify(image)
        
        });
        if (response.ok) {
            alert("Image added");
        
          } else {
            const message = await response.text();
            alert(message);
          }
    };

    

    return(
        <>
    
            <form className="image-form" onSubmit={addImage} id="imageForm">
            <Link className="nav-button"  to={"/"}>View Holidays</Link>
            <h2>Add Image</h2>
                <input className="image-form__input" placeholder="Image URL" type="text"
                    onInput={event=>setImage({...image,url:event.target.value})}  />

                <select className="image-form__input" name="holidays" id="holidays" onChange={event=>setHolidayId(event.target.value)}>
                    {holidays && holidays.map((holiday)=> (<option value={holiday.id}>{holiday.location}</option>))}
                </select>

                <button className="holiday-form__submit" type="submit">Submit</button>
            </form>
        </>
    );
};

export default AddImage;