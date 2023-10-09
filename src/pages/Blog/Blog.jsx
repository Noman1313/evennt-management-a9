import Footer from "../sharedPage/Footer/Footer";
import Navbar from "../sharedPage/Navbar/Navbar";


const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-2 max-w-4xl mx-auto">
                <div className="card card-compact w-96 mt-5 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/5ncbVRX/weeding.png" alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>Love, joy, and eternal commitment come together in a celebration of a lifetime as  cordially invite you to witness the union of their hearts in holy matrimony. Join us on a journey of love and togetherness as we embark on a new chapter of our lives.The enchanting day will take...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">More details</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 mt-5 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/g7YKykq/Birthday.jpg" alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>Love, joy, and eternal commitment come together in a celebration of a lifetime as  cordially invite you to witness the union of their hearts in holy matrimony. Join us on a journey of love and togetherness as we embark on a new chapter of our lives.The enchanting day will take...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">More details</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 mt-5 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/pPkLzSP/Anniversaries-2.webp" alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>Love, joy, and eternal commitment come together in a celebration of a lifetime as  cordially invite you to witness the union of their hearts in holy matrimony. Join us on a journey of love and togetherness as we embark on a new chapter of our lives.The enchanting day will take...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">More details</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 mt-5 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/8jLtjf5/retirement-4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>Love, joy, and eternal commitment come together in a celebration of a lifetime as  cordially invite you to witness the union of their hearts in holy matrimony. Join us on a journey of love and togetherness as we embark on a new chapter of our lives.The enchanting day will take...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">More details</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;