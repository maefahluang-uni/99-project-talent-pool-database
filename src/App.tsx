// src/App.tsx
import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";
import AddCandidate from "./pages/pages2/AddCandidate";
import { Route, Router, Switch } from "wouter";
import TestingAddCandidate from "./pages/pages2/TestingAddCandidate";
import VacancyPage from "./pages/vacancy/VacancyPage";
import AddVacancies from "./pages/vacancy/AddVacancies";
import RecommendedCandidates from "./pages/vacancy/RecommendedCandidates";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/forgotPassword" component={ForgotPassword} />
                <Route path="/homepage" component={HomePage} />
                {/* <div className="min-h-screen bg-gray-100 flex items-center justify-center"> */}
                    <Route path="/testingAddCandidate" component={TestingAddCandidate} />
                    <Route path="/addCandidate" component={AddCandidate} />
                {/* </div> */}
                <Route path="/VacancyPage" component={VacancyPage} />
                <Route path="/AddVacancies" component={AddVacancies} />
                <Route path="/RecommendedCandidates" component={RecommendedCandidates} />
            </Switch>
        </Router>
    );
};

export default App;

{/* <div className="absolute inset-y-0 right-80 flex items-center pr-3 pointer-events-none"></div> */ }
{/* <div className="p-6 max-w-xs bg-white rounded-xl shadow-md"> */ }
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


// import React, { useState } from 'react';

// const CandidateForm = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [link, setLink] = useState<string>('');

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFile(event.target.files?.[0] || null);
//   };

//   const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setLink(event.target.value);
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
//       <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//         New Candidate
//       </button>
//       <input
//         type="file"
//         accept=".pdf,.doc,.docx"
//         className="block w-full text-sm text-slate-500
//           file:mr-4 file:py-2 file:px-4
//           file:rounded-full file:border-0
//           file:text-sm file:font-semibold
//           file:bg-violet-50 file:text-violet-700
//           hover:file:bg-violet-100
//         "
//         onChange={handleFileChange}
//       />
//       <input
//         type="text"
//         className="block w-full text-sm text-slate-500
//           border border-gray-300 rounded-lg
//           cursor-pointer dark:text-gray-400
//           focus:outline-none dark:focus:ring-blue-800
//           dark:border-gray-600 dark:placeholder-gray-400
//           "
//         placeholder="Import resume via link"
//         value={link}
//         onChange={handleLinkChange}
//       />
//     </div>
//   );
// };

// export default CandidateForm;

{/* <header className="bg-blue-500 text-white p-4"> */ }
{/* <header className=" text-black p-1">
                <div className="flex items-center">
                    <img src="../src/assets/ATALogo.png" alt="Logo" className="h-20" />
                    <h1 className="text-xl">Talent Pool Database</h1>
                </div>
                <div className="flex justify-end space-x-4">
                    <button className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                        Candidate
                    </button>
                    <button className="bg-white hover:bg-gray-600 text-black font-bold py-2 px-4 rounded border border-black">
                        Vacancies
                    </button>
                    <div className="cursor-pointer hover:bg-gray-600 rounded p-2">
                        <i className="fas fa-bars text-gray-800 text-2xl"></i>
                    </div>

                </div>
            </header> */}

{/* <header className="text-black p-1">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="../src/assets/ATALogo.png" alt="Logo" className="h-20" />
                        <h1 className="text-xl ml-2">Talent Pool Database</h1>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded border border-black ">
                            Candidate
                        </button>
                        <button className="bg-white hover:bg-gray-600 text-black font-bold py-2 px-4 rounded border border-black">
                            Vacancies
                        </button>
                        <div className="cursor-pointer hover:bg-gray-600 rounded p-2">
                            <i className="fas fa-bars text-gray-800 text-2xl"></i>
                        </div>
                    </div>
                </div>
            </header> */}


// import React from "react";
// import './App.css';
// import PasswordInput from "./PasswordInput";

// const App: React.FC = () => {
//   function handleClick() {
//     window.location.href = '/ForgotPassword';
//   }

//   return (
//     // <div className="min-h-screen bg-gray-100">
//     <div className="min-h-screen">
//       <header className="bg-white py-6">
//         <div className="flex justify-center">
//           <img src="../src/assets/ATALogo.png" alt="ATA logo" className="h-20" />
//         </div>
//         <div>
//           <h1 className="text-1xl font-bold">Talent Pool Database</h1>
//         </div>
//       </header>
//       <main className="container mx-auto px-4 py-0 max-w-md">
//         <div className="bg-white p-6 rounded shadow-md">
//           <form action="">
//             <div className="mb-4">
//               <input type="email" placeholder="E-mail" className="w-full border border-black p-1 rounded" />
//             </div>
//             <div>
//               <PasswordInput />
//             </div>
//             <p onClick={handleClick} className="text-right text-sm text-blue-500 underline mt-2" >Forgot your password?</p>
//             <div className="mt-4">
//               <button type="submit" className="bg-blue-500 text-white py-1 px-4 rounded" >Login</button>
//             </div>
//           </form>
//           <div className="flex items-center my-4 mx-6">
//             <div className="border-t border-gray-900 flex-grow mr-3"></div>
//             <span className="text-gray-900">OR</span>
//             <div className="border-t border-gray-900 flex-grow ml-3"></div>
//           </div>
//           <p>Don’t have an account?
//             <span className="text-blue-500 underline ml-2">SIGN UP</span>
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default App;



// import React from "react";
// // import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './App.css';
// import ForgotPassword from "./ForgotPassword"; // Import ForgotPassword component
// import { Link, Route, Router, Switch } from "wouter";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div className="min-h-screen">
//         <header className="bg-white py-6">
//           <div className="flex justify-center">
//             <img src="../src/assets/ATALogo.png" alt="ATA logo" className="h-20" />
//           </div>
//           <div>
//             <h1 className="text-1xl font-bold">Talent Pool Database</h1>
//           </div>
//         </header>
//         <main className="container mx-auto px-4 py-0 max-w-md">
//           <div className="bg-white p-6 rounded shadow-md">
//             <Switch>
//               <Route path="/ForgotPassword" component={ForgotPassword} /> {/* Route to ForgotPassword component */}
//               {/* Other routes */}
//             </Switch>
//           </div>
//         </main>
//       </div>
//       <div className="text-right text-sm text-blue-500 underline mt-2">
//         <Link to="/ForgotPassword">Forgot your password?</Link>
//       </div>
//     </Router>
//   );
// };

// export default App;

