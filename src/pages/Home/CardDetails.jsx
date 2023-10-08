import { useParams } from "react-router-dom";
import Navbar from "../sharedPage/Navbar/Navbar";
import Footer from "../sharedPage/Footer/Footer";


const CardDetails = () => {
    const { id } = useParams()
    return (
        <div>
            <Navbar></Navbar>
            <h1>card detailsssss</h1>
            <p>{id}</p>
            <Footer></Footer>
        </div>
    );
};

export default CardDetails;