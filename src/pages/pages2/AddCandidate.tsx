import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

interface FormData {
  fullName: string;
  email: string;
  image: File;
}

const App: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [logo, setLogo] = useState<string | null>(null);

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setLogo(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response: AxiosResponse = await axios.post(
        "http://localhost:8080/users",
        formData
      );
      console.log("File uploaded:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Image:", image);

    // Upload the file
    if (image) {
      handleFileUpload(image);
    }
  };

  return (
    <div>
      {/* Header */}
      <header>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="../src/assets/ATALogo.png"
              alt="ATALogo"
              className="h-20"
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
      <div className="my-8 flex justify-center items-center">
        {/* Upload profile picture section */}
        <label htmlFor="upload-input" className="cursor-pointer">
          <div className="relative">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded"
                className="w-48 h-48 rounded-full"
              />
            ) : (
              <div className="w-48 h-48 bg-gray-200 rounded-full flex justify-center items-center">
                <span className="text-gray-400">Upload Profile Picture</span>
              </div>
            )}
            <input
              id="upload-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Candidate information filling section */}
        <div className="container mx-auto px-4 sm:w-4/5 lg:w-3/5">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 flex justify-between mb-4 shadow-md rounded-md p-4">
              <input
                type="text"
                value={fullName}
                onChange={handleFullNameChange}
                placeholder="Name"
                className="border border-gray-300 rounded px-3 py-2 w-30"
                required
              />
              <input
                type="text"
                placeholder="Birth Date"
                className="border border-gray-300 rounded px-3 py-2 w-30"
              />
              <input
                type="text"
                placeholder="Courtesy Title"
                className="border border-gray-300 rounded px-3 py-2 w-80"
              />
            </div>
            <div className="col-span-3 flex justify-between mb-4 shadow-md rounded-md p-4">
              <input
                type="text"
                placeholder="Desired Position"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Desired Salary"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="col-span-3 flex justify-between mb-4 shadow-md rounded-md p-4">
              <input
                type="text"
                placeholder="Employment Type"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Industry"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="col-span-3 flex justify-between mb-4 shadow-md rounded-md p-4">
              <input
                type="text"
                placeholder="Education Level"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Skill"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="col-span-3 flex justify-between mb-4 shadow-md rounded-md p-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                required
              />
            </div>
            <div className="col-span-3 flex justify-between mb-4 shadow-md rounded-md p-4">
              <input
                type="tel"
                placeholder="Add Comment"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
            <div className="col-span-3 mb-4 shadow-md rounded-md p-4">
              <input
                type="file"
                placeholder="Add File/Attachments"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Candidate
        </button>
      </form>
    </div>
  );
};

export default App;
