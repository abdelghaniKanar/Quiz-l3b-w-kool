import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const WelcomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/player-selection');
    };

    return (
        <div className="min-h-screen bg-quiz-lime-100 flex flex-col items-center justify-center px-4">
            <div className="text-center mb-10">
                <img
                    className="w-32 mx-auto mb-6"
                    src="/dark-icon.png"
                    alt="Quiz App Logo"
                />
                <h1 className="text-4xl font-bold text-quiz-neutral-700 mb-4">
                    Welcome to QuizMaster!
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Test your knowledge with fun trivia questions!
                </p>

                <Button
                    onClick={handleStart}
                    variant="primary"
                    className="text-lg px-8 py-3"
                >
                    Start Quiz
                </Button>
            </div>
        </div>
    );
};

export default WelcomePage;