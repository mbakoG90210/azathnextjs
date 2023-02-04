import React from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Contact() {
  async function handleSubmit(event) {
    event.preventDefault();
    toast.success("Thank you for subscribing!", {
    className: "bg-accent-focus text-white z-50",
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",});
    const formData = new FormData(event.target);

    formData.append("access_key", "64624977-1421-4512-8dc6-1d302c53fd3d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <>
      <ToastContainer
        className="bg-accent-focus text-white z-50"
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="flex flex-col space-y-4 mt-16 px-6">
        <p className="text-gray-300 uppercase text-sm">
          Notify me when it's ready
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Enter your email address
              </span>
            </label>
            <div>
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button
                type="submit"
                className="btn bg-accent-focus absolute rounded-l-none"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
