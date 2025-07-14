import React from 'react'
import ImageLeft from "../../../assets/left.png"
import ImageRight from "../../../assets/right.png"

const VerificationEmail = () => {
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
                <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8 text-center w-full max-w-md flex-shrink-0">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Email Verification
                    </h1>
                    <p className="text-sm text-gray-600 mb-8 whitespace-nowrap">
                        Please enter your code that send to your email address
                    </p>
                    <form action="#">
                        <input
                            type="email"
                            placeholder="Enter code Verification"
                            required
                            className="w-full px-4 py-3 mb-4 text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-medium py-3 rounded hover:bg-blue-700 transition-colors duration-300"
                        >
                            submit
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
    )
}

export default VerificationEmail
