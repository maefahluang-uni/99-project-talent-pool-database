import { navigate } from 'wouter/use-browser-location';

interface HeaderProps {
    candidateButtonClass: string;
    vacanciesButtonClass: string;
}

const Header = ({ candidateButtonClass, vacanciesButtonClass }: HeaderProps) => {

    const GoToVacancyPage = () => {
        navigate('/VacancyPage')
    };

    return (
        <header>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img src="../src/assets/ATALogo.png" alt="ATALogo" className='h-20' />
                    <h1 className='text-lg ml-2'>Talent Pool Database</h1>
                </div>
                <div className='flex items-center space-x-2 px-2'>
                    <button className={`${candidateButtonClass}`}>Candidate</button>
                    <button onClick={GoToVacancyPage} className={`${vacanciesButtonClass}`}>Vacancies</button>
                    {/* <button className=' bg-black hover:bg-gray-600 text-white font-bold py-2 px-2 rounded border border-black'>Candidate</button>
                    <button onClick={GoToVacancyPage} className=' hover:bg-gray-600 text-black font-bold py-2 px-2 rounded border border-black'>Vacancies</button> */}
                    <a href='/login' className="cursor-pointer hover:bg-gray-600 rounded p-1">
                        <i className="fas fa-bars text-gray-800 text-2xl"></i>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
