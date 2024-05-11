import React, { useState } from "react";
import PasswordInput from "./PasswordInput";
import ConfirmPassword from "./ConfirmPassword";
import { navigate } from "wouter/use-browser-location";

const SignUp: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // You can simulate successful signup here by setting a success message
    setSuccessMessage("Signup successful! You can now login.");
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white py-6">{/* Header content */}</header>
      <main className="container mx-auto px-4 py-0 max-w-md">
        <div className="bg-white p-6 rounded shadow-md">
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <input
                type="username"
                placeholder="Username"
                className="w-full border border-black p-1 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full border border-black p-1 rounded"
              />
            </div>
            <div className="mb-4">
              <PasswordInput />
            </div>
            <div>
              <ConfirmPassword />
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-1 px-4 rounded"
              >
                Sign Up
              </button>
            </div>
          </form>
          {successMessage && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <div className="relative bg-white rounded-lg p-8">
                <span
                  className="absolute top-0 right-0 cursor-pointer"
                  onClick={() => setSuccessMessage("")}
                >
                  <svg
                    className="fill-current h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path
                      fillRule="evenodd"
                      d="M14.354 5.354a1 1 0 0 1 0 1.414L11.414 10l2.94 2.94a1 1 0 1 1-1.414 1.414L10 11.414l-2.94 2.94a1 1 0 1 1-1.414-1.414L8.586 10 5.646 7.06a1 1 0 0 1 1.414-1.414L10 8.586l2.94-2.94a1 1 0 0 1 1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p className="text-lg text-gray-800">{successMessage}</p>
              </div>
            </div>
          )}
          <div className="flex items-center my-4 mx-6">
            {/* Divider content */}
          </div>
          <div className="flex justify-center">
            <p>
              Already have an account?
              <a href="/login" className="text-blue-500 underline ml-2">
                Login
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
function setUsername(arg0: string) {
  throw new Error("Function not implemented.");
}

function setEmail(arg0: string) {
  throw new Error("Function not implemented.");
}

function setPassword(arg0: string) {
  throw new Error("Function not implemented.");
}
