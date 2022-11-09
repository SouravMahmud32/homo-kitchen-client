import React from "react";

const Subscription = () => {
  return (
    <div className="mt-12 p-5">
      <div className="">
        <div class="row">
          <div className="col-12">
            <div className="text-center">
              <p className="text-5xl font-bold text-pink-500">Join Our Newsletter</p>
              <h4 className="font-semibold py-2">Get special campaign by subscribing now!</h4>
            </div>
            <div className="my-4">
            <input type="email" placeholder="email" className="input input-bordered mr-2 border-pink-500 input-warning w-full max-w-xs"  />
            <button className="btn btn-sm bg-pink-500">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
