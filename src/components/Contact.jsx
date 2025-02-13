import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [submitData, setSubmitData] = useState(null);
    const [count, setCount] = useState(0);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitData(data);
        setData({ name: "", email: "", phone: "", message: "" });
    };
    return (
        <div className=" p-10 bg-gray-300 h-[81.5vh] flex flex-col">
            <div className=" flex flex-col gap-5 justify-center text-center">
                <p>Samuel Dawit</p>
                <h1 className=" text-3xl">CONTACT US</h1>
            </div>
            <div className="bottom flex gap-12 pt-14">
                <div className="form flex flex-col w-[50%] items-center">
                    <h3>ONLINE INQUIRY</h3>
                    <form
                        action=""
                        onSubmit={handleSubmit}
                        className=" flex flex-col w-[450px] h-[375px] rounded-4xl justify-center items-center gap-5 shadow-[0_5px_85px_rgba(0,0,0,0.55)]"
                    >
                        <input
                            type="text"
                            value={data.name}
                            onChange={handleChange}
                            name="name"
                            id="name"
                            placeholder="First and Last Name"
                            className="  bg-white px-1.5 py-2 w-[85%]"
                        />
                        <input
                            type="email"
                            value={data.email}
                            onChange={handleChange}
                            name="email"
                            id="email"
                            className=" bg-white px-1.5 py-2 w-[85%]"
                            placeholder="Email Address"
                        />
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            onChange={handleChange}
                            value={data.phone}
                            className="  bg-white px-1.5 py-2 w-[85%]"
                            placeholder="Phone Number"
                        />
                        <input
                            type="text"
                            value={data.message}
                            onChange={handleChange}
                            name="message"
                            id="name"
                            placeholder="Message"
                            className="  bg-white px-1.5 py-2 w-[85%]"
                        />
                        <input
                            type="submit"
                            value="submit"
                            className=" scale-[0.85]"
                        />
                    </form>
                </div>

                <div className="details flex flex-col items-center">
                    <h3>CONTACT DETAILS</h3>
                    <div className="details flex flex-col justify-center text-center gap-2.5 p-5">
                        <p>samueldawit354@gmail.com</p>
                        <p>(123)-456-7890</p>

                        <h4 className=" text-xl">Westfield</h4>
                        <p>233 North Avenue E. Westfield, NJ 07090</p>

                        <h4 className="text-xl">Summit</h4>
                        <p>357 Springfield Ave. Short hills, NJ 07901</p>

                        <h4 className="text-xl">Short Hills Office</h4>
                        <p>549 Millburn Ave. Short Hills, NJ 07078</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
