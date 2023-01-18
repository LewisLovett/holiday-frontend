import "./AddHoliday.scss";

import { useEffect, useState } from "react";


const AddHoliday = (props) => {
    const [holiday,setHoliday] = useState({
        location: "", date: "", author: "", description: ""}
    );

    const addHoliday = async event => {
        event.preventDefault();
        console.log(JSON.stringify(holiday));
        let response = await fetch("http://localhost:8080/api/holiday",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'        
            },
            body:JSON.stringify(holiday)
        
        });
        if (response.ok) {
            alert("Holiday added");
        
          } else {
            const message = await response.text();
            alert(message);
          }
    };

    return(
        <>
            <form className="holiday-form" onSubmit={addHoliday} id="holidayForm">
                <h2>Add Holiday</h2>
                <input className="holiday-form__input" placeholder="Holiday Location" type="text"
                    onInput={event=>setHoliday({...holiday,location:event.target.value})}  />
                <input className="holiday-form__input" placeholder="Holiday Date" type="text"
                    onInput={event=>setHoliday({...holiday,date:event.target.value})}  />
                <input className="holiday-form__input" placeholder="Holiday Author" type="text"
                    onInput={event=>setHoliday({...holiday,author:event.target.value})}  />
                <textarea className="holiday-form__input" placeholder="Holiday Description"
                    onInput={event=>setHoliday({...holiday,description:event.target.value})} form="holidayForm"  ></textarea>
                <button className="holiday-form__submit" type="submit">Submit</button>
            </form>
        </>
    );
};

export default AddHoliday;