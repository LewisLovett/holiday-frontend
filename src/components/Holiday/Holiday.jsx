import "./Holiday.scss";


const Holiday = (props) => {
    const {holiday, images} = props;
    

    return(
        <div>
            <h2>{holiday.id}</h2>
            
            {images.map(imageURL => (<img className="holidayImage" src={imageURL}/>)
            )}
          
            <div >{holiday.location}</div>
            <div >{holiday.date}</div>
     
            <div>{holiday.description}</div>
           
            <div>{holiday.author}</div>
        </div>
    );
};

export default Holiday;