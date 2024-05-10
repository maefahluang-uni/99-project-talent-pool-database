import React from 'react';
// import AddEmployeeForm from './page/AddEmployeeForm';
// import EmployeeList from './page/EmployeeList';
import { Route, Router, Switch } from 'wouter';
import AddEmployee from './page/AddEmployee';
import UpdateEmployee from './page/UpdateEmployee';
import Vacancies from './page/vacancies/Vacancies';
import AddNewVacancy from './page/vacancies/AddNewVacancy';
import RecommendedCandidates from './page/vacancies/RecommendedCandidates';
import EditVacancy from './page/vacancies/EditVacancy';
import ViewRecommendCan from './page/vacancies/ViewRecommendCan';
import EmployeeList from './page/EmployeeList';
// import VacancySearch from './page/vacancies/VacancySearch';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={EmployeeList} />
        {/* <VacancySearch /> */}
        <Route path='/add' component={AddEmployee} />
        <Route path='/update/:id' component={UpdateEmployee} />
        <Route path='/vacancies' component={Vacancies} />
        <Route path='/addVacancies' component={AddNewVacancy} />
        <Route path='/editVacancy/:id' component={EditVacancy} />
        <Route path="/matching-candidates" component={RecommendedCandidates} />
        <Route path="/viewRecommendCan" component={ViewRecommendCan} />
        {/* <Route path="/viewRecommendCan/:id" component={ViewRecommendCan} /> */}
      </Switch>
    </Router>
  );
};

export default App;

// import React, { useState, ChangeEvent, FormEvent } from 'react';
// // import axios from 'axios';
// import { fetchMatchingCandidates } from './API/vacanciesApi';

// interface Vacancy {
//   id: number;
//   title: string;
//   position: string;
//   skills: string;
// }

// interface MatchingCandidate {
//   candidate: {
//     name: string;
//     position: string;
//     skills: string;
//   };
//   matchPercentage: number;
// }

// const App: React.FC = () => {
//   const [vacancy, setVacancy] = useState<Vacancy>({
//     id: 0,
//     title: '',
//     position: '',
//     skills: ''
//   });
//   const [matchingCandidates, setMatchingCandidates] = useState<MatchingCandidate[]>([]);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setVacancy(prevVacancy => ({
//       ...prevVacancy,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const matchingCandidatesData = await fetchMatchingCandidates(vacancy);
//       console.log("matchingCandidatesData = ", matchingCandidatesData);
//       setMatchingCandidates(matchingCandidatesData);
//     } catch (error) {
//       console.error('Error fetching matching candidates:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Matching Candidates</h1>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <div className="mb-4">
//           <label htmlFor="title" className="block mb-1">Title</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={vacancy.title}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-4 py-2 w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="position" className="block mb-1">Position</label>
//           <input
//             type="text"
//             id="position"
//             name="position"
//             value={vacancy.position}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-4 py-2 w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="skills" className="block mb-1">Skills</label>
//           <input
//             type="text"
//             id="skills"
//             name="skills"
//             value={vacancy.skills}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-4 py-2 w-full"
//             required
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Find Matching Candidates</button>
//       </form>
//       <div>
//         <h2 className="text-xl font-bold mb-2">Matching Candidates:</h2>
//         <ul>
//           {matchingCandidates.map((candidate, index) => (
//             <li key={index} className="mb-2">
//               <p>{candidate.candidate.name}</p>
//               <p>{candidate.candidate.position}</p>
//               <p>{candidate.candidate.skills}</p>
//               <p>Match Percentage: {candidate.matchPercentage}%</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
