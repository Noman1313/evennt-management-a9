import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../sharedPage/Navbar/Navbar";
import Footer from "../sharedPage/Footer/Footer";
import { useEffect, useState } from "react";


const CardDetails = () => {

    const [card, setCard] = useState({})
    const { image, description } = card || {}
    

    const { id } = useParams()
    const intId = parseInt(id)
    

    const cards = useLoaderData()
    

    useEffect(() => {
        const findCard = cards?.find(card => card.id == intId)
        setCard(findCard)
    }, [intId, cards])

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center">
                <img src={image} alt="" className="my-5 " />
            </div>
            <p className="text-xl font-semibold max-w-5xl mx-auto mb-5">{description}</p>
            <Footer></Footer>
        </div>
    );
};

export default CardDetails;