import React from "react";

function Contact() {
  return (
    <div className="text-center content-center min-h-screen">
      <h1 className="font-bold text-3xl m-4 p-4">Contact us..</h1>

      {/* Centering the form */}
      <div className="flex justify-center">
        <form className="border-2 border-cyan-950 rounded-2xl w-6/12 p-6">
          <input
            className="border-2 border-black rounded-xl m-2 p-2 w-full"
            placeholder="Name"
          />
          <br />
          <input
            className="border-2 border-black rounded-xl m-2 p-2 w-full"
            placeholder="Message"
          />
          <br />
          <button className="bg-black text-white font-bold cursor-pointer rounded-xl px-4 py-2 mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
