import "./HolidayList.scss";

import Holiday from "../../components/Holiday/Holiday"
import AddImage from "../AddImage/AddImage";
import {Link} from "react-router-dom"
const HolidayList = (props) => {
    
  const {holidays, images} = props;




    return(
        <>
        <div className="link-container">
        <Link className="nav-button"  to={"/addHoliday"}>Add Holiday</Link>
        <Link className="nav-button"   to={"/addImage"}>Add Image</Link>
        </div>
            {images[0] &&holidays.map((holiday,index) => (<Holiday holiday={holiday} images={images[index]}/>))}
        </>
    );
};

export default HolidayList;