import "./HolidayList.scss";

import Holiday from "../../components/Holiday/Holiday"

const HolidayList = (props) => {
    
  const {holidays, images} = props;




    return(
        <>
            {images[0] &&holidays.map((holiday,index) => (<Holiday holiday={holiday} images={images[index]}/>))}
        </>
    );
};

export default HolidayList;