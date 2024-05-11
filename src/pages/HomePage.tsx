import React, { useEffect, useState } from "react";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";
import Header from "../components/Header";

interface Candidate {
  id: number;
  name: string;
  position: string;
  email: string; // Added email field
  dateAdded: string;
  // Add other relevant fields if needed
}

const HomePage: React.FC = () => {
  const [candidates, setCandidates] = useState<
    {
      id: number;
      name: string;
      position: string;
      email: string;
      dateAdded: string;
    }[]
  >([]);

  useEffect(() => {
    axios
      .get<Candidate[]>("http://localhost:8080/candidates")
      .then((response) => {
        setCandidates(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    // <div className="bg-gray-100 min-h-screen">
    <div>
      <header>
        <Header
          candidateButtonClass="bg-black hover:bg-gray-600 text-white font-bold py-2 px-2 rounded border border-black"
          vacanciesButtonClass="hover:bg-gray-600 text-black font-bold py-2 px-2 rounded border border-black"
        />
      </header>
      {/* Main Content */}
      {/* <main className=" bg-cyan-500 p-4"> */}
      <main className="p-4">
        {/* First Row */}
        {/* <div className=" bg-slate-500 flex mb-4"> */}
        <div className="flex mb-4">
          <div className="w-96 mr-4">
            {/* <div className=" bg-orange-500 w-1/3.5 mr-4"> */}
            {/* Content for the first row, first column */}
            {/* Content */}
            <div className="p-6 max-w-xs bg-white rounded-xl shadow-md">
              <div className="flex items-center justify-center">
                <img
                  src="../src/assets/NewCandidate.png"
                  alt="NewCandidate.png"
                  className="h-10"
                />
                <h1 className="text-lg ml-2 mt-5">New Candidate</h1>
              </div>
              <hr className="my-2 w-full border-gray-300" />
              <a
                href="/addCandidate"
                className="cursor-pointer flex items-center"
              >
                {/* <a href='/addCandidate' className='cursor-pointer flex items-center'> */}
                <img
                  src="../src/assets/AddCandidate.png"
                  alt="AddCandidate.png"
                  className="h-8"
                />
                <h4 className="ml-2">Add Candidate</h4>
              </a>
              <div className="cursor-pointer flex items-center mt-3">
                {/* <a href="/addCandidate"> */}
                <img
                  src="../src/assets/UploadCV.png"
                  alt="AddCandidate.png"
                  className="h-8"
                />
                <h4 className="ml-2 ">Upload CV</h4>
                {/* </a> */}
              </div>
              <div className="cursor-pointer flex items-center mt-3">
                <img
                  src="../src/assets/ImportRVL.png"
                  alt="AddCandidate.png"
                  className="h-8"
                />
                <h4 className="ml-2 ">Import resume via link</h4>
              </div>
            </div>
            <br />
            <div className="p-6 max-w-xs bg-white rounded-xl shadow-md">
              <div className="flex items-center justify-center">
                <img
                  src="../src/assets/ReportFunction.png"
                  alt="NewCandidate.png"
                  className="h-10"
                />
                <h1 className="text-lg ml-2 mt-5">Report Function</h1>
              </div>
              <hr className="my-2 w-full border-gray-300" />
              <div className="cursor-pointer flex items-center">
                <img
                  src="../src/assets/GenerateExcel.png"
                  alt="AddCandidate.png"
                  className="h-8"
                />
                <h4 className="ml-2 ">Generate Excel</h4>
              </div>
              <div className="cursor-pointer flex items-center mt-3 -ml-1">
                <img
                  src="../src/assets/GenerateCSV.png"
                  alt="GenerateCSV.png"
                  className="h-8 "
                />
                <h4 className="ml-1">Generate CSV</h4>
              </div>
              <div className="cursor-pointer flex items-center mt-3 ml-2">
                <img
                  src="../src/assets/GenerateChart.png"
                  alt="GenerateChart.png"
                  className="h-8"
                />
                <h4 className="ml-2.5 ">Generate Chart</h4>
              </div>
            </div>
          </div>
          {/* Second Column */}
          {/* <div className="bg-lime-300 w-1/2 relative"> */}
          {/* <div className="bg-lime-300 w-full relative"> */}
          <div className="w-full relative">
            {/* Content for the first row, second column */}
            {/* Search Bar */}
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Search Candidate"
                className="w-96 p-2 pr-10 border rounded border-gray-400"
              />
              <div className=" absolute inset-y-0 left-80 ml-8 flex items-center pr-3 pointer-events-none">
                <i className="fas fa-search text-gray-600"></i>
              </div>
            </div>

            {/* Found: 1 candidates */}
            <div className="mb-4 border border-gray-400 w-52 rounded p-2 pr-10">
              <h1 className="ml-2">Found: {candidates.length} candidates</h1>
              {/* <h1 className='ml-2'>Found: {datas.length} candidates</h1> */}
            </div>
            <table className="p-6 w-full bg-white rounded-xl shadow-md">
              <thead>
                <tr>
                  <th className="p-2 font-normal border-b border-gray-300">
                    <input type="checkbox" className="cursor-pointer" />
                  </th>
                  <th className="p-2 font-normal border-b border-gray-300">
                    Profile
                  </th>
                  <th className="p-2 font-normal border-b border-gray-300">
                    Candidate
                  </th>
                  <th className="p-2 font-normal border-b border-gray-300">
                    Email
                  </th>
                  {/* <th className='p-2 font-normal border-b border-gray-300'>Added by</th> */}
                  <th className="p-2 font-normal border-b border-gray-300">
                    Date Added
                  </th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((data) => (
                  // {datas.map((data) => (
                  <tr key={data.id}>
                    <th className="p-2">
                      <input type="checkbox" className="cursor-pointer" />
                    </th>
                    <td className="p-2 flex items-center justify-center">
                      <img
                        src="../src/assets/ProfileImage.png"
                        alt="ProfileImage.png"
                        className="h-8"
                      />
                    </td>
                    <td className="p-2 text-center">{data.name}</td>
                    <td className="p-2 text-center">{data.email}</td>
                    <td className="p-2 text-center">{data.dateAdded}</td>
                    {/* <td className='p-2 text-center'>{data.year}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <br />

        {/* Testing Code */}
        <br />
      </main>
    </div>
  );
};

export default HomePage;
