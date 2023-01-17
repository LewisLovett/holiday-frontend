import "./Holiday.scss";


const Holiday = (props) => {
    const {holiday, images} = props;
    

    return(
        <div className="holiday">
            <h2 className="holiday__location">{holiday.location}</h2>
            
            {images.map(imageURL => (<img className="holiday__image" src={imageURL}/>)
            )}
          
            
            <div className="holiday__date" >{holiday.date}</div>
     
            <div className="holiday__description">{holiday.description}</div>
           
            <div className="holiday__author">{holiday.author}</div>
        </div>
    );
};

export default Holiday;