import Footer from "../sharedPage/Footer/Footer";
import Navbar from "../sharedPage/Navbar/Navbar";


const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-5xl mx-auto">
                <h2 className="text-6xl font-bold text-center">CONTACT US</h2>
                <form className="grid justify-items-center mb-6">
                    <input type="text" name="Name" id="" placeholder="input your name" className="border-2 w-3/4 mx-auto  p-2 rounded-md my-4" />
                    <input type="text" name="Name" id="" placeholder="input your email" className="border-2 w-3/4 mx-auto  p-2 rounded-md my-4" />
                    <input type="text" name="Name" id="" placeholder="input your number" className="border-2 w-3/4 mx-auto  p-2 rounded-md my-4" />
                    <input type="text" name="Name" id="" placeholder="input your address" className="border-2 w-3/4 mx-auto  p-2 rounded-md my-4" />
                    <input type="text" name="Name" id="" placeholder="event date" className="border-2 w-3/4 mx-auto  p-2 rounded-md my-4" />
                    <input type="submit" value="Submit" className="btn btn-outline w-1/3" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;