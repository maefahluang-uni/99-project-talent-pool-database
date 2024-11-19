import React, { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../Config"; // Adjust the path as needed

interface User {
  name: string;
  email: string;
  year: string;
  // year: number;
  comment?: string;
  file?: File;
}

const AddCandidate: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    year: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [comment, setComment] = useState<string>("");
  const [candidates, setCandidates] = useState<User[]>([]);
  const navigate = useNavigate();

  // Function to fetch candidates
  const fetchCandidates = async () => {
    try {
      const response = await axios.get(`${config.backendUrl}/candidates`);
      setCandidates(response.data);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  // Fetch candidates on component mount
  useEffect(() => {
    fetchCandidates();
  }, []);

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create FormData object
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    // data.append("year", formData.year.toString());
    // data.append("comment", comment);

    // if (selectedFile) {
    //   data.append("file", selectedFile);
    // }

    try {
      await axios.post(`${config.backendUrl}/candidates`, data, {
        headers: {
          "Content-Type": 'application/json',
        },
      });
      alert("Candidate created successfully");
      // Clear form data
      setFormData({
        name: "",
        email: "",
        year: "",
      });
      setComment("");
      setSelectedFile(null);
      setImageUrl("");
      // Refresh candidates list
      fetchCandidates();
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error creating candidate:", error.message);
        alert("Failed to create candidate");
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred");
      }
    }
  };

  return (
    <div>
      <header>{/* Header code */}</header>

      <div className="mx-xl w-1000 px-4 py-24 sm:px-7 sm:py-25 lg:px-8">
        <div className="flex flex-col items-center">
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
          <form className="w-full max-w-200 mt-8 py-10" onSubmit={handleSubmit}>
            {/* Form fields */}
            <div className="flex justify-between w-4/5 mx-auto">
              <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-courtesy"
                >
                  Courtesy
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none text-center w-full bg-white-200 border border-black-200 text-black-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-black-500"
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
              <div className="w-full md:w-1/3 px-1 mb-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  placeholder="Susan"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="appearance-none block w-full bg-white-200 text-black-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  required
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-birthday"
                >
                  Birth Date
                </label>
                <input
                  placeholder="YYYY-MM-DD"
                  type="date"
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="appearance-none block w-full bg-white-200 text-black-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  required
                />
              </div>
            </div>

            {/* Additional form fields */}
            <div className="flex justify-between w-4/5 mx-auto">
              <div className="w-full md:w-1/2 px-3 py-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-position"
                >
                  Position
                </label>
                <input
                  className="appearance-none block w-full text-center bg-white-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-position"
                  type="text"
                  placeholder="Position"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 py-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-salary"
                >
                  Salary
                </label>
                <input
                  className="appearance-none block w-full text-center bg-white-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-salary"
                  type="text"
                  placeholder="Salary"
                />
              </div>
            </div>

            <div className="flex justify-between w-4/5 mx-auto">
              <div className="w-full md:w-1/2 px-3 py-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-education"
                >
                  Education
                </label>
                <input
                  className="appearance-none block w-full text-center bg-white-200 text-black-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-education"
                  type="text"
                  placeholder="Education"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 py-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-comment"
                >
                  Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="appearance-none block w-full bg-white-200 text-black-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
            </div>

            <div className="flex justify-between w-4/5 mx-auto">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-resume"
                >
                  Resume
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  className="appearance-none block w-full bg-white-200 text-black-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
            </div>

            <div className="flex justify-between w-4/5 mx-auto">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                Add Candidate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCandidate;
