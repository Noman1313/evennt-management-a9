
const HomeCard = ({ data }) => {
    const { image, name, description, event_price, button } = data;
    console.log(data);
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mb-4">
                <figure><img src={image} alt="Shoes" className="w-full h-60" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>{description.slice(0,100)}</p>
                    <div className="card-actions justify-end">
                        <p className="text-xl font-bold">Price: ${event_price}</p>
                        <button className="btn btn-primary">{button}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;