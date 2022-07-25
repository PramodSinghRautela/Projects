import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

const Contact = () => {
    const [data,setData] = useState({
        fullname:'',
        phone:'',
        emails:'',
        msg:'',
    }
    )

    const InputEvent = (event) =>{
        const {name, value} = event.target;
        setData((preVal) => {
            return{
                ...preVal,
                [name] : value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}, My Mobile number is ${data.phone}, and my email is ${data.email}, Here is what i want to say ${data.msg}`
        );
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <from onSubmit ={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Enter your Full Name</label>
                                <input type="text" class="form-control"
                                id="exampleFormControlInput1"
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent}
                                placeholder="Enter Your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                <input type="number" class="form-control"
                                id="exampleFormControlInput1"
                                name="phone"
                                value={data.phone}
                                onChange={InputEvent}
                                placeholder="mobile number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control"
                                id="exampleFormControlInput1"
                                name="emails"
                                value={data.email}
                                onChange={InputEvent}
                                placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                name="msg"
                                value={data.msg}
                                onChange={InputEvent}
                                ></textarea>
                            </div>
                            <div class="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </from>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Contact;
