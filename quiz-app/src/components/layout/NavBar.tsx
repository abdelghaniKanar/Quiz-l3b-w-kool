import { NavBarProps } from '../../types';

const NavBar: React.FC<NavBarProps> = ({ playerName, lives }) => {
    // Function to render heart icons based on lives
    const renderLives = () => {
        if (lives === undefined) return null;

        return (
            <div className="flex">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="mx-1">
                        {i < lives ? (
                            // Full heart
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            // Empty heart
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <nav className="bg-quiz-lime-100 p-3 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img className="w-12" src="/dark-icon.png" alt="Quiz App Logo" />
                </div>

                {playerName && (
                    <div className="text-quiz-neutral-700 font-bold">
                        {playerName}
                    </div>
                )}

                <div>
                    {renderLives()}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;