import React from 'react';
import ImageLeft from "../../../assets/left.png"
import ImageRight from "../../../assets/right.png"
import skipli from "../../../assets/skipli.png"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from '../../../firebase/FilebaseConfig';

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate();
  const actionsetting = {
    url: 'http://localhost:5173/emailvalidate',
    handleCodeInApp: true,
  };

  const handleContinue = async (e) => {
    e.preventDefault();
    try {
      await sendSignInLinkToEmail(auth, email, actionsetting);
      window.localStorage.setItem('emailForSignIn', email);
      navigate('/emailvalidate');

    } catch (error) {
      console.error("error:", error);
      alert("An error has occurred. Please try again.");
    }
  };
  return (
    <div className="bg-white font-sans">
      <div className="flex items-center justify-around min-h-screen w-full p-5">
        {/* image left */}
        <div className="hidden lg:block flex-1 text-center">
          <img
            src={ImageLeft}
            alt="Illustration Left"
            className="max-w-[80%] mx-auto absolute bottom-0 ml-0"
          />
        </div>
        {/* form sign-in */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8 text-center w-full max-w-sm flex-shrink-0">
          <img src={skipli} alt="" srcset="" className='w-[56px] h-[55px]  block mx-auto' />

          <h2 className="text-lg font-medium text-gray-800 mb-6">Log in to continue</h2>

          <form action="#" onSubmit={handleContinue}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 mb-4 text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Continue
            </button>
          </form>

          <div className="mt-6">
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
              Privacy Policy
            </a>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              This site is protected by reCAPTCHA and the Google <br />
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and{' '}
              <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> apply.
            </p>
          </div>
        </div>

        {/* image right */}
        <div className="hidden lg:block flex-1 text-center">
          <img
            src={ImageRight}
            alt="Illustration Right"
            className="max-w-[80%] mx-auto absolute -right-[1px] bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
