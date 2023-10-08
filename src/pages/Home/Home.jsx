import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import Footer from "../sharedPage/Footer/Footer";
import Navbar from "../sharedPage/Navbar/Navbar";
import HomeCard from "./HomeCard";

const Home = () => {

    const datas = useLoaderData();
    console.log(datas);

    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <div className="max-w-6xl mx-auto mt-3 grid grid-cols-4 gap-5">
                <div>
                    <h3>right side</h3>
                </div>
                <div className="grid grid-cols-2 col-span-3">
                    {
                        datas.map(data => <HomeCard
                            key={data.id}
                            data={data}
                        ></HomeCard>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;