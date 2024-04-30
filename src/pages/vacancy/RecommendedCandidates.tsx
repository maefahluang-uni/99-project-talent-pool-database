import React from 'react'
import Header from '../../components/Header'
import { navigate } from 'wouter/use-browser-location'

interface Candidate {
    matching: number;
    candidate: string;
    position: string;
    salary: string;
    skill: string;
}

const candidatesData: Candidate[] = [
    {
        matching: 80,
        candidate: 'Mr. Alan',
        position: 'Senior Developer',
        salary: '100 USD',
        skill: 'Java',
    },
    {
        matching: 60,
        candidate: 'Mr. Kyaw Oo',
        position: 'Full Stack Developer',
        salary: '150 USD',
        skill: 'Angular',
    },
    {
        matching: 30,
        candidate: 'Mr. Danny',
        position: 'DevOps Engineer',
        salary: '110 USD',
        skill: 'React',
    },
];

// type Candidate = {
//     match: number;
//     name: string;
//     position: string;
//     salary: string;
//     skill: string;
// };

// const candidates: Candidate[] = [
//     { match: 80, name: 'Mr. Alan', position: 'Senior Developer', salary: '100 USD', skill: 'Java' },
//     { match: 50, name: 'Mr. Kyaw Oo', position: 'Full Stack Developer', salary: '150 USD', skill: 'Angular' },
//     { match: 70, name: 'Mr. Danny', position: 'DevOps Engineer', salary: '110 USD', skill: 'React' },
// ];

// const CandidateRow: React.FC<Candidate> = ({ match, name, position, salary, skill }) => (
//     <tr>
//         <td><input type="checkbox" /></td>
//         <td>{match}%</td>
//         <td>{name}</td>
//         <td>{position}</td>
//         <td>{salary}</td>
//         <td>{skill}</td>
//     </tr>
// );

const RecommendedCandidates = () => {
    // const RecommendedCandidates: React.FC = () => {

    const GoToAvailableposition = () => {
        navigate('/VacancyPage')
    }

    const GoToAddVacancies = () => {
        navigate('/AddVacancies')
    }

    return (
        <>
            <header>
                <Header
                    candidateButtonClass='hover:bg-gray-600 text-black font-bold py-2 px-2 rounded border border-black'
                    vacanciesButtonClass='bg-black hover:bg-gray-600 text-white font-bold py-2 px-2 rounded border border-black'
                />
            </header>
            <main className="p-4">
                <div className='flex justify-between items-center'>
                    <div className=' flex items-center'>
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
                    </div>
                    <div className='flex items-center space-x-2 px-2 mb-4'>
                        <button onClick={GoToAvailableposition} className=' bg-black hover:bg-gray-600 text-white font-bold py-2 px-2 rounded border border-black'>Available position</button>
                        <button onClick={GoToAddVacancies} className=' hover:bg-gray-600 text-black font-bold py-2 px-2 rounded border border-black'>Add Vacancies</button>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className=' flex items-center'>
                        <div className="mb-4 relative">
                            <h1>Recommended candidates</h1>
                        </div>
                    </div>
                    <div className='flex items-center space-x-2 px-2 mb-4'>
                        <h1>Total data: {candidatesData.length}</h1>
                    </div>
                </div>

                <table className='p-6 w-full bg-white rounded-xl shadow-md'>
                    <thead>
                        <tr>
                            <th className="p-2 font-normal border-b border-gray-300">
                                <input type="checkbox" className='cursor-pointer' />
                            </th>
                            <th className='p-2 font-normal border-b border-gray-300'>Matching</th>
                            <th className='p-2 font-normal border-b border-gray-300'>Candidate</th>
                            <th className='p-2 font-normal border-b border-gray-300'>Desired position</th>
                            <th className='p-2 font-normal border-b border-gray-300'>Salary</th>
                            <th className='p-2 font-normal border-b border-gray-300'>Skill</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                        {candidatesData.map((candidate, index) => (
                            <tr key={index}>
                                <th className="p-2">
                                    <input type="checkbox" className='cursor-pointer' />
                                </th>
                                <td className='p-2 text-center'>{candidate.matching}%</td>
                                <td className='p-2 flex items-center justify-center'>
                                    <img src="../src/assets/ProfileImage.png" alt="ProfileImage.png" className='h-8 mr-3' />
                                    <span>{candidate.candidate}</span>
                                </td>
                                <td className='p-2 text-center'>{candidate.position}</td>
                                <td className='p-2 text-center'>{candidate.salary}</td>
                                <td className='p-2 text-center'>{candidate.skill}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* <div className="flex flex-col w-full overflow-auto shadow-md rounded-md">
                    <div className="w-full bg-gray-200 px-4 py-2 flex flex-row justify-between items-center text-xs font-medium">
                        <span>Recommended candidates</span>
                        <span>Total data: {candidatesData.length}</span>
                    </div>
                    <div className="w-full divide-y divide-gray-200">
                        <div className="px-4 py-2 flex flex-row justify-between text-xs font-medium">
                            <span><input type="checkbox" /></span>
                            <span>Matching</span>
                            <span>Candidate</span>
                            <span>Desired position</span>
                            <span>Salary</span>
                            <span>Skill</span>
                        </div>
                        {candidatesData.map((candidate, index) => (
                            <div key={index} className="px-4 py-2 flex flex-row justify-between text-sm">
                                <span><input type="checkbox" /></span>
                                <span>{candidate.matching}%</span>
                                <span>{candidate.candidate}</span>
                                <span>{candidate.position}</span>
                                <span>{candidate.salary}</span>
                                <span>{candidate.skill}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='shadow-xl'>
                    <table className="w-full rounded overflow-hidden divide-y divide-gray-200">
                        <thead className="bg-red-500">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Matching
                                </th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Candidate
                                </th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Desired Position
                                </th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Salary
                                </th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Skill
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {candidates.map((candidate) => (
                                <CandidateRow key={candidate.name} {...candidate} />
                            ))}
                        </tbody>
                    </table>
                </div> */}
            </main>
        </>
    )
}

export default RecommendedCandidates