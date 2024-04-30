import React, { useState } from 'react'
import Header from '../../components/Header'
import { navigate } from 'wouter/use-browser-location'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import ShowConfirmationDialog from '../../components/ShowConfirmationDialog';


interface Candidate {
  No: number;
  PositionTitle: string;
  PositionApplied: string;
  salary: string;
  DateOfApplication: string;
  Nationalities: string
}

const candidatesData: Candidate[] = [
  {
    No: 1,
    PositionTitle: 'Engineering',
    PositionApplied: 'Senior Developer',
    salary: '100 USD',
    DateOfApplication: 'Nov 28, 2023',
    Nationalities: 'Chinese'
  },
  {
    No: 2,
    PositionTitle: 'Developer',
    PositionApplied: 'Full Stack Developer',
    salary: '150 USD',
    DateOfApplication: 'Feb 5, 2024',
    Nationalities: 'Burmese'
  },
  {
    No: 3,
    PositionTitle: 'DevOps',
    PositionApplied: 'DevOps Engineer',
    salary: '110 USD',
    DateOfApplication: 'Jun 10, 2023',
    Nationalities: 'American'
  },
];

const VacancyPage = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState<boolean>(false);
  const [candidateToDelete, setCandidateToDelete] = useState<Candidate | null>(null);


  const togglePopup = (index: number) => {
    if (clickedIndex === index) {
      setClickedIndex(null); // Close the popup if clicking the same icon again
    } else {
      setClickedIndex(index);
    }
  };

  const GoToAddVacancies = () => {
    navigate('/AddVacancies')
  }

  const deleteCandidate = (candidate: Candidate) => {
    // const updatedCandidatesData = candidatesData.filter((c) => c !== candidate);
    candidatesData.splice(candidate.No - 1, 1);
    setClickedIndex(null);
    setCandidateToDelete(null);
    setShowConfirmationDialog(false);
  };

  const confirmDelete = (candidate: Candidate) => {
    setCandidateToDelete(candidate);
    setShowConfirmationDialog(true);
  };

  const cancelDelete = () => {
    setShowConfirmationDialog(false);
  };

  // const deleteCandidate = (index: number) => {
  //   const updatedCandidatesData = candidatesData.filter((_, i) => i !== index);
  //   candidatesData.splice(index, 1);
  //   setClickedIndex(null);
  //   console.log(updatedCandidatesData);
  //   // Here you can perform any additional actions like making an API call to delete the data from the server
  // };

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
            <button className=' bg-black hover:bg-gray-600 text-white font-bold py-2 px-2 rounded border border-black'>Available position</button>
            <button onClick={GoToAddVacancies} className=' hover:bg-gray-600 text-black font-bold py-2 px-2 rounded border border-black'>Add Vacancies</button>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className=' flex items-center'>
            <div className="mb-4 relative">
              <h1>Available position</h1>
            </div>
          </div>
          <div className='flex items-center space-x-2 px-2 mb-4'>
            <h1>Total data: {candidatesData.length}</h1>
          </div>
        </div>
        {candidatesData.length === 0 ? (
          <div className=" flex justify-center items-center py-4">
            <div className="  flex flex-col items-center px-72">
              <img src="../src/assets/vacancies/VacancyNDA.png" alt="VacancyNDA.png" className='h-48' />
              <h1 className='text-center mt-2 py-2 text-3xl font-bold'>No Data Available</h1>
              <h1 className='text-center text-lg'>Please add a vacancy to make the data appear.</h1>
            </div>
          </div>
        ) : (<table className='p-6 w-full bg-white rounded-xl shadow-md'>
          <thead>
            <tr>
              <th className="p-2 font-normal border-b border-gray-300">No</th>
              <th className='p-2 font-normal border-b border-gray-300'>Position title</th>
              <th className='p-2 font-normal border-b border-gray-300'>Position applied</th>
              <th className='p-2 font-normal border-b border-gray-300'>Salary</th>
              <th className='p-2 font-normal border-b border-gray-300'>Date of application</th>
              <th className='p-2 font-normal border-b border-gray-300'>Nationalities</th>
              <th className='p-2 font-normal border-b border-gray-300' />
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {candidatesData.map((candidate, index) => (
              <tr key={index}>
                <th className="p-2">{candidate.No}</th>
                <td className='p-2 text-center'>{candidate.PositionTitle}</td>
                <td className='p-2 flex items-center justify-center'>
                  {/* <img src="../src/assets/ProfileImage.png" alt="ProfileImage.png" className='h-8 mr-3' /> */}
                  <span>{candidate.PositionApplied}</span>
                </td>
                <td className='p-2 text-center'>{candidate.salary}</td>
                <td className='p-2 text-center'>{candidate.DateOfApplication}</td>
                <td className='p-2 text-center'>{candidate.Nationalities}</td>
                {/* <td className='p-2 flex justify-end'> */}
                <td className='p-2 relative'>
                  <FontAwesomeIcon icon={faEllipsisVertical} onClick={() => togglePopup(index)} className=' cursor-pointer' />
                  {clickedIndex === index && (
                    <div className="absolute right-0 mt-2 mr-2 z-10"> {/* Adjust mt-10 for positioning */}
                      <div className="p-4 bg-white rounded-xl shadow-xl">
                        <div className="flex flex-col">
                          {/* First Row */}
                          <div className="flex justify-between mb-2">
                            <div className=" p-2 mr-2 flex items-center">
                              <img src="../src/assets/vacancies/Edit.png" alt="Edit.png" className='h-8 mr-4' />
                              <span className=' mr-8 text-lg hover:text-green-400'><a href="">Edit</a></span>
                            </div>
                            <div className="bg-gray-200 p-2 justify-end text-end">
                              <FontAwesomeIcon icon={faCircleXmark} onClick={() => togglePopup(-1)} className="text-red-500 h-8 mr-2 cursor-pointer" />
                            </div>
                          </div>
                          {/* Second Row */}
                          <div className="mb-2  flex items-center">
                            {/* <div className="bg-gray-200 p-2 mr-2 flex items-center px-20"> */}
                            <img src="../src/assets/vacancies/RecommendedCandidates.png" alt="RecommendedCandidates.png" className='h-8 mr-5' />
                            <span className=' text-lg hover:text-green-400'><a href="">Recommended candidates</a></span>
                            {/* </div> */}
                          </div>

                          <div className="flex justify-between mb-2">
                            <div className=" p-2 mr-2 flex items-center">
                              <img src="../src/assets/vacancies/Delete.png" alt="Delete.png" className='h-8 mr-3' />
                              {/* <span className=' text-lg hover:text-green-400 cursor-pointer' onClick={() => deleteCandidate(index)}>Delete</span> */}
                              <span className=' text-lg hover:text-green-400 cursor-pointer' onClick={() => confirmDelete(candidate)}>Delete</span>
                            </div>
                            {/* <div className="bg-gray-200 p-2 mr-2">Third Column</div>
                            <div className="bg-gray-200 p-2 mr-2 flex-grow">Recommended candidates</div> */}
                          </div>
                          {/* <div className="bg-gray-200 p-2 px-14 mr-2">Fourth Column</div>
                          Second Row */}
                          <div className="flex justify-between">
                            <div className="p-2 mr-2"></div>
                            <div className=" p-2 px-32 mr-2"></div>
                            <div className="p-2"></div>
                          </div>
                          {/* Third Row
                          <div className="flex justify-center">
                            <div className="bg-gray-200 p-4">Sixth Column</div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>)}
        {showConfirmationDialog && (
          <ShowConfirmationDialog
            candidateToDelete={candidateToDelete as Candidate}
            onDelete={() => deleteCandidate(candidateToDelete as Candidate)}
            onCancel={cancelDelete}
          />
        )}
      </main>
    </>
  )
}

export default VacancyPage