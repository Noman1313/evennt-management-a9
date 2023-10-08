import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import Footer from "../sharedPage/Footer/Footer";
import Navbar from "../sharedPage/Navbar/Navbar";
import HomeCard from "./HomeCard";
import RightSide from "./RightSide";

const Home = () => {

    const datas = useLoaderData();
    console.log(datas);

    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <div>
                <p className="text-3xl font-bold text-center my-8">Our Services</p>
                <div className="max-w-6xl mx-auto mt-3 lg:grid grid-cols-4 gap-5">
                    <div className="md:grid grid-cols-2 col-span-3 gap-4">
                        {
                            datas.map(data => <HomeCard
                                key={data.id}
                                data={data}
                            ></HomeCard>)
                        }
                    </div>
                    <div>
                        <RightSide></RightSide>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;