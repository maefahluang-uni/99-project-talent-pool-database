import React, { useState } from 'react'
import Header from '../../components/Header'
import { navigate } from 'wouter/use-browser-location'

const AddVacancies = () => {
    const currencies = ['USD', 'Baht', 'Kyat'];
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedCurrency(e.target.value);
    };

    const GoToAvailableposition = () => {
        navigate('/VacancyPage')
    }
    const GoToAddVacancies = () => {
        navigate('/AddVacancies')
    }

    const GoToRecommendedCandidates = () => {
        navigate("/RecommendedCandidates");
    }

    return (
        <>
            <header>
                <Header
                    candidateButtonClass='hover:bg-gray-600 text-black font-bold py-2 px-2 rounded border border-black'
                    vacanciesButtonClass='bg-black hover:bg-gray-600 text-white font-bold py-2 px-2 rounded border border-black'
                />
            </header>
            <main className=' p-4'>
                <div className='flex justify-end space-x-2 px-2 mb-4'>
                    <button onClick={GoToAvailableposition} className='hover:bg-gray-600 text-black font-bold py-2 px-2 rounded border border-black'>Available position</button>
                    <button onClick={GoToAddVacancies} className='bg-black hover:bg-gray-600 text-white font-bold py-2 px-2 rounded border border-black'>Add Vacancies</button>
                </div>
                <div className=' px-60'>
                    <div className="rounded shadow-lg p-5">
                        {/* <div className="border border-gray-300 rounded shadow-lg p-4"> */}
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                {/* First column */}
                                <div className=" p-2 mr-2">
                                    {/* <div className="bg-gray-200 p-2 mr-2"> */}
                                    <img src="../src/assets/vacancies/PositionTitle.png" alt="PositionTitle.png" className='h-10' />
                                </div>
                                {/* Second column */}
                                <div className=" p-2">
                                    <input
                                        placeholder='Position Title'
                                        type="text"
                                        id="positionApplied"
                                        name="positionApplied"
                                        // value={formData.positionApplied}
                                        // onChange={handleChange}
                                        className="w-full px-3 py-2 mr-20 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center">
                                {/* Third column */}
                                <div className="mr-2">
                                    <img src="../src/assets/vacancies/Salary.png" alt="Salary.png" className='h-10' />
                                </div>
                                {/* Fourth column */}
                                <div className="mr-2">
                                    {/* <div className="bg-gray-200 p-2 mr-2 px-20"> */}
                                    <input
                                        placeholder='Salary'
                                        type="text"
                                        id="positionApplied"
                                        name="positionApplied"
                                        // value={formData.positionApplied}
                                        // onChange={handleChange}
                                        className="w-full px-3 py-2 mr-20 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                {/* Fifth column */}
                                <div className="bg-gray-200 p-1">
                                    <div className="relative">
                                        <select
                                            value={selectedCurrency}
                                            onChange={handleChange}
                                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                        >
                                            {currencies.map(currency => (
                                                <option key={currency} value={currency}>{currency}</option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg
                                                className="fill-current h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9.293 14.293a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L10 11.586l-3.293-3.293a1 1 0 1 0-1.414 1.414l4 4z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                {/* First column */}
                                <div className=" p-2 mr-2">
                                    <img src="../src/assets/vacancies/PositionApplied.png" alt="PositionApplied.png" className='h-10' />
                                </div>
                                {/* Second column */}
                                <div className=" p-2">
                                    <input
                                        placeholder='Position Applied'
                                        type="text"
                                        id="positionApplied"
                                        name="positionApplied"
                                        // value={formData.positionApplied}
                                        // onChange={handleChange}
                                        className="w-full px-3 py-2 mr-20 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center" style={{ marginRight: '98px' }}>
                                {/* Third column */}
                                <div className="mr-2">
                                    <img src="../src/assets/vacancies/Dateofapplication.png" alt="Salary.png" className='h-10' />
                                </div>
                                {/* Fourth column */}
                                <div>
                                    {/* <div className="bg-gray-200 p-2 mr-2 px-20"> */}
                                    <input
                                        placeholder='Date of application'
                                        type="date"
                                        id="positionApplied"
                                        name="positionApplied"
                                        // value={formData.positionApplied}
                                        // onChange={handleChange}
                                        className="w-full px-3 py-2 mr-32 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        style={{ marginRight: '122px' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                {/* First column */}
                                <div className=" p-2 mr-2">
                                    <img src="../src/assets/vacancies/Nationalities.png" alt="PositionApplied.png" className='h-10' />
                                </div>
                                {/* Second column */}
                                <div className=" p-2">
                                    <input
                                        placeholder='Nationalities'
                                        type="text"
                                        id="positionApplied"
                                        name="positionApplied"
                                        // value={formData.positionApplied}
                                        // onChange={handleChange}
                                        className="w-full px-3 py-2 mr-20 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center py-4">
                            <div className="  flex flex-col items-center px-72">
                                <button onClick={GoToRecommendedCandidates} className=' bg-blue-500 p-2 rounded text-white'>Add</button>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </main>
        </>
    )
}

export default AddVacancies