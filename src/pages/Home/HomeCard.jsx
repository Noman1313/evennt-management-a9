import { Link } from "react-router-dom";

const HomeCard = ({ data }) => {
    const { image, name, description, event_price, button, id } = data;

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mb-4">
                <figure><img src={image} alt="Shoes" className="w-full h-60" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>{description.slice(0, 95)}</p>
                    <div className="card-actions justify-end">
                        <p className="text-xl font-bold">Price: ${event_price}</p>
                        <Link to={`/cardDetails/${id}`}><button className="btn btn-primary">{button}</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;