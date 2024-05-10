import React, { useState } from "react";
import PasswordInput from "./PasswordInput";
import { navigate } from "wouter/use-browser-location";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if email and password match the expected values
    if (email === "hello123@gmail.com" && password === "1234") {
      // Successful login, navigate to home page
      navigate("/");
    } else {
      // Display error message for incorrect credentials
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white py-6">
        <div className="flex justify-center">
          <img
            src="../src/assets/ATALogo.png"
            alt="ATA logo"
            className="h-20"
          />
        </div>
        <div className="flex justify-center">
          <h1 className="text-1xl font-bold">Talent Pool Database</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-0 max-w-md">
        <div className="bg-white p-6 rounded shadow-md">
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full border border-black p-1 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-black p-1 rounded"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}
            <a
              href="/forgotPassword"
              className="flex justify-end text-sm text-blue-500 underline mt-2"
            >
              Forgot your password?
            </a>
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-1 px-4 rounded"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center my-4 mx-6">
            <div className="border-t border-gray-900 flex-grow mr-3"></div>
            <span className="text-gray-900">OR</span>
            <div className="border-t border-gray-900 flex-grow ml-3"></div>
          </div>
          <div className="flex justify-center">
            <p>
              Don’t have an account?
              <a href="/signup" className="text-blue-500 underline ml-2">
                SIGN UP
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
