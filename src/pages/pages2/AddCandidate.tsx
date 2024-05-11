import axios from "axios";
import React, { useState, ChangeEvent } from "react";
// import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { navigate } from "wouter/use-browser-location";
// import axios from 'axios';

// interface Candidate {
//   courtesy: string;
//   firstName: string;
//   birthDate: string; // Assuming birthDate is a string from the form
//   position: string;
//   salary: number;
//   employmentType: string;
//   industry: string;
//   eduLevel: string;
//   skill: string;
//   phoneNumber: string;
//   email: string;
//   comment: string;
// }

interface User {
  name: string;
  email: string;
  year: number;
}

export function AddCandidate() {
  const [imageUrl, setImageUrl] = useState<string>("");
  // const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    year: 0,
  });

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result as string;
        setImageUrl(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Ensure the email field is updated with the input value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/candidates", formData);
      alert("User created successfully");
      // Optionally, you can clear the form after submission
      setFormData({
        name: "",
        email: "",
        year: 0,
      });
      navigate("/");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user");
    }
  };

  return (
    <div>
      <header>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="../src/assets/ATALogo.png"
              alt="ATALogo"
              className="h-20 "
              style={{ marginLeft: 20 }}
            />
            <h1 className="text-lg ml-2">Talent Pool Database</h1>
          </div>
          <div className="flex items-center space-x-2 px-2">
            <button className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-2 rounded border border-black">
              Candidate
            </button>
            <button className="hover:bg-gray-600 text-black font-bold py-2 px-2 rounded border border-black">
              Vacancies
            </button>
            <a
              href="/login"
              className="cursor-pointer hover:bg-gray-600 rounded p-1"
            >
              <i className="fas fa-bars text-gray-800 text-2xl"></i>
            </a>
          </div>
        </div>
      </header>

      <div className="mx-xl w-1000 px-4 py-24 sm:px-7 sm:py-25 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Add margin top to create space */}
          <div className="relative w-56 h-56 border border-dashed border-gray-400 rounded-full flex justify-center items-center cursor-pointer overflow-hidden mt-4">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Uploaded"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <span className="text-gray-500">Click to Insert Image</span>
            )}
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
              id="image-input"
              onChange={handleImageChange}
            />
          </div>
          <form className=" w-full max-w-200 mt-8 py-10 ">
            <div className="flex justify-between w-4/5 mx-auto">
              <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0 ">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Courtesy
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none text-center w-full bg-white-200 border border-black-200 text-black-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-black-500"
                    id="grid-courtesy"
                  >
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Ms</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-1 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                {/* <input value={formData.name} onChange={handleChange} className="appearance-none block w-full bg-white-200 text-black-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />  */}
                <input
                  placeholder="Susan"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  // className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  className="appearance-none block w-full bg-white-200 text-black-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  required
                />
              </div>
              <div className="w-xl md:w-1/1 px-3">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-birthday"
                >
                  Birth Date
                </label>
                {/* <input value={formData.year} onChange={handleChange} className="appearance-none block w-full bg-white-200 text-black-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="10-11-2022" /> */}
                <input
                  placeholder="YYYY-MM-DD"
                  type="number"
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="appearance-none block w-full bg-white-200 text-black-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between w-4/5 mx-auto">
              <div className="w-full md:w-1/2 px-3 py-3 mb-6 md:mb-0">
                <label
                  className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-position"
                >
                  Position
                </label>
                <input
                  className="appearance-none block w-full text-center bg-white-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-position"
                  type="text"
                  placeholder="Postion"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 py-3 mb-6 md:mb-0">
                <label
                  className="block  tracking-wide  text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-salary"
                >
                  Salary
                </label>
                <input
                  className="appearance-none block w-full text-center bg-white-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-salary"
                  type="number"
                  placeholder="Salary"
                />
              </div>
            </div>
            <div className="flex justify-between w-4/5 mx-auto">
              <div className="w-full md:w-1/2 px-3 py-3 mb-6 md:mb-0">
                <label
                  className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-employmentType"
                >
                  Employment Type
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none text-center w-full bg-white-200 border border-black-200 text-black-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-black-500"
                    id="grid-employmentType"
                  >
                    <option>Part Time</option>
                    <option>Full Time</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/1 px-3 py-3 mb-6 md:mb-0">
                <label
                  className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-industry"
                >
                  Industry
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-white-200 border border-black-200 text-black-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-black-500"
                    id="grid-industry"
                  >
                    <option>Information Technology</option>
                    <option>Financial Services Industry</option>
                    <option>Automotive Industry</option>
                    <option>Human Resources Management</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between w-4/5 mx-auto">
              <div className="w-full md:w-1/2 px-3 py-6 mb-6 md:mb-0">
                <label
                  className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-eduLevel"
                >
                  Education Level
                </label>
                <input
                  className="appearance-none block w-full bg-white-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-eduLevel"
                  type="text"
                  placeholder="Education Level"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 py-6  mb-6 md:mb-0">
                <label
                  className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-skill"
                >
                  Skill
                </label>
                <input
                  className="appearance-none block w-full bg-white-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-skill"
                  type="text"
                  placeholder="Skill"
                />
              </div>
            </div>
            <div className="flex justify-between w-4/5 mx-auto">
              <div className="w-full md:w-1/2 px-3 py-1 mb-6 md:mb-0">
                <label
                  className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-phNumber"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Phone Number"
                ></input>
              </div>
              <div className="w-full md:w-1/2 px-3 py-1  mb-6 md:mb-0">
                <label
                  className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Email
                </label>
                {/* <input id="email" name="email" type="email" required className="appearance-none block w-full bg-white-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder='Email'></input> */}
                <input
                  type="email"
                  id="email"
                  name="email" // Ensure the name attribute matches the key in formData
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between w-4/5 mx-auto">
              <div className="w-full md:w-1/1 px-3 py-1 mb-6 md:mb-0">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                  htmlFor="Uploadfiles"
                >
                  Uploadfiles
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="multiple_files"
                  type="file"
                  multiple
                />
              </div>

              <div className="w-full md:w-1/2 px-3 py-1 mb-6 md:mb-0">
                <div className=" border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="  Write a comment..."
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
          <form>
            {/* ... form fields and structure ... */}
            {/* ... form fields and structure ... */}
            {/* ... form fields and structure ... */}
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-white-700 rounded mt-8"
            >
              Add Candidate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCandidate;
