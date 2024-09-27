import React from "react";
import InputBox from "./ui/InputBox";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8   bg-white shadow-xl rounded-lg">
      <div className="flex items-start">
        <h2 className="text-2xl  font-bold mb-4">Sign Up</h2>
      </div>
      <button className="flex items-center justify-center w-full mb-4 py-2 border rounded-full bg-gray-100 hover:bg-gray-200">
        <img src="/google.png" alt="Google" className="w-6 h-6 mr-2" />
        {/* <Image src={google} alt="google" /> */}
        Sign in with Google
      </button>
      <p className="mb-4 ">or Sign Up with</p>

      <InputBox type="text" placeholder="Name" />

      <InputBox type="email" placeholder="Email" />
      <InputBox type="password" placeholder="Password" />

      <button className="w-full py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">
        Sign Up
      </button>
      <p className="mt-4">
        Already have an account?{" "}
        <Link href="./SignInPage" className="text-blue-500 hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
