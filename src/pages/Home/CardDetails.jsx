import { useParams } from "react-router-dom";
import Navbar from "../sharedPage/Navbar/Navbar";


const CardDetails = () => {
    const { id } = useParams()
    return (
        <div>
            <Navbar></Navbar>
            <h1>card detailsssss</h1>
            <p>{id}</p>
        </div>
    );
};

export default CardDetails;