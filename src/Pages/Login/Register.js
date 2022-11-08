import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState("");
    const { createUser, updateUserProfile } = useContext(AuthContext);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;
  
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          setError("");
          form.reset();
          handleUpdateUserProfile(name, photoURL);
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
        });
    };
    const handleUpdateUserProfile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() =>{})
        .catch(error => console.error(error))
      }

    return (
        <div>
            <div>
      <div className="hero my-20 w-full">
        <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="w-3/4" src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/11/03/1455830a5c71daf44a3ec3351cf7e1ed_original.jpg?impolicy=abp_cdn&imwidth=650" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
            <h1 className="text-5xl text-center font-bold">Register</h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <p className="text-center">
              New to Homo Kitchen{" "}
              <Link className="text-orange-600 font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Register;