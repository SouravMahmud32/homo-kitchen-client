import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const DetailsReview = () => {
  const { _id, title, price, img, description } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const message = form.message.value;

    const services = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      message,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Added successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="grid grid-cols-2 mb-5 ml-5">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-2xl text-orange-600 font-semibold">
            Price: ${price}
          </p>
          <p>
            {description}
          </p>
        </div>
      </div>
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl font-bold">You are about to review on: {title}</h2>
        <h4 className="text-3xl text-orange-600 font-semibold">Price: {price}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 p-5">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-ghost w-full  input-bordered"
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Your Message"
          required
        ></textarea>

        <input
          className="btn btn-warning mt-4"
          type="submit"
          value="Add a Review"
        />
      </form>
    </div>
  );
};

export default DetailsReview;
