import React, { useEffect, useState } from "react";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";
import Header from "../components/Header";

<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";
import Header from "../components/Header";

interface User {
  id: number;
  name: string;
  email: string;
  year: 0;
}

const HomePage: React.FC = () => {
  // const [datas, setData] = useState<User[]>([]);
  // Mock data for candidate information (replace with actual data)
  const candidates = [
    {
      id: 1,
      // name: 'Mr. Alan',
      name: "Alan",
      position: "Senior Developer",
      // addedBy: 'Mr. Tin Win',
      email: "luna@hotmail.com",
      dateAdded: "10-10-2023",
      // Add other relevant fields if needed
    },
    {
      id: 2,
      // name: 'Mr. Ala',
      name: "Ala",
      position: "Developer",
      // addedBy: 'Mr. Lee',
      email: "alisa@gmail.com",
      dateAdded: "8-12-2022",
      // Add other relevant fields if needed
    },
    // Add more candidate entries as necessary
  ];

  // useEffect(() => {
  //     axios.get<User[]>('http://localhost:8080/users')
  //         .then(response => {
  //             setData(response.data);
  //         })
  //         .catch(error => {
  //             console.error('Error fetching data:', error);
  //         });
  // }, []);
>>>>>>> fa1e27f2b2df7245c2f247139b155a762b2cb826

  return (
    // <div className="bg-gray-100 min-h-screen">
    <div>
<<<<<<< HEAD
      <header>
=======
      {/* Header */}
      {/* <header className='bg-blue-500'> */}
      <header>
        {/* <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src="../src/assets/ATALogo.png" alt="ATALogo" className='h-20' />
                        <h1 className='text-lg ml-2'>Talent Pool Database</h1>
                    </div>
                    <div className='flex items-center space-x-2 px-2'>
                        <button className='bg-black hover:bg-gray-600 text-white font-bold py-2 px-2 rounded border border-black'>Candidate</button>
                        <button className='hover:bg-gray-600 text-black font-bold py-2 px-2 rounded border border-black'>Vacancies</button>
                        <a href='/login' className="cursor-pointer hover:bg-gray-600 rounded p-1">
                            <i className="fas fa-bars text-gray-800 text-2xl"></i>
                        </a>
                    </div>
                </div> */}
>>>>>>> fa1e27f2b2df7245c2f247139b155a762b2cb826
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
<<<<<<< HEAD
=======
          {/* First Column */}
          {/* <div className=" bg-orange-500 w-1/2 mr-4"> */}
          {/* <div className=" bg-orange-500 w-80 mr-4"> */}
          {/* <div className=" bg-orange-500 w-96 mr-4"> */}
>>>>>>> fa1e27f2b2df7245c2f247139b155a762b2cb826
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
<<<<<<< HEAD
=======

        {/* New Candidate Section */}
        {/* <section className="mb-6">
                    <h2 className="text-lg font-semibold">New Candidate</h2>
                    <div className="flex space-x-4">
                        <button className="bg-blue-500 text-white p-2 rounded">
                            Add Candidate
                        </button>
                        <button className="bg-blue-500 text-white p-2 rounded">
                            Upload CV
                        </button>
                        <button className="bg-blue-500 text-white p-2 rounded">
                            Import resume via link
                        </button>
                    </div>
                </section> */}

        {/* Report Function Section */}
        {/* <section className="mb-6">
                    <h2 className="text-lg font-semibold">Report Function</h2>
                    <div className="flex space-x-4">
                        <button className="bg-blue-500 text-white p-2 rounded">
                            Generate Excel
                        </button>
                        <button className="bg-blue-500 text-white p-2 rounded">
                            Generate CSV
                        </button>
                        <button className="bg-blue-500 text-white p-2 rounded">
                            Generate Chart
                        </button>
                    </div>
                </section> */}

        {/* Candidate Table */}
        {/* <table className="w-full border-collapse border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2">Profile</th>
                            <th className="p-2">Candidate</th>
                            <th className="p-2">Added by</th>
                            <th className="p-2">Date Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map((candidate) => (
                            <tr key={candidate.id}>
                                <td className="p-2">
                                    <img
                                        src="/path/to/avatar.png"
                                        alt={`Avatar for ${candidate.name}`}
                                        className="w-8 h-8 rounded-full"
                                    />
                                </td>
                                <td className="p-2">{candidate.name}</td>
                                <td className="p-2">{candidate.addedBy}</td>
                                <td className="p-2">{candidate.dateAdded}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}
>>>>>>> fa1e27f2b2df7245c2f247139b155a762b2cb826
      </main>
    </div>
  );
};

export default HomePage;
<<<<<<< HEAD
=======

// import React from 'react'

// export default function HomePage() {
//     return (
//         <div>
//             <h2>HomePage</h2>
//             <p>Already have an account? <a href="/login">Login here.</a></p>
//         </div>
//     )
// }

// import React from "react";

// const SignUp: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//       <p>Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
//     </div>
//   );
// };

// export default SignUp;
>>>>>>> fa1e27f2b2df7245c2f247139b155a762b2cb826
