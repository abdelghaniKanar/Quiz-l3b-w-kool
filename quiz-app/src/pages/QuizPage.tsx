import { useState, useEffect } from 'react';
import NavBar from '../components/layout/NavBar';
import ProgressBar from '../components/common/ProgressBar';
import QuizCard from '../components/quiz/QuizCard';
import { TriviaQuestion } from '../types';

const QuizPage: React.FC = () => {
    // Placeholder states for now
    const [playerName, setPlayerName] = useState<string>('Player');
    const [lives, setLives] = useState<number>(3);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // We'll fully implement this later
    useEffect(() => {
        // Placeholder effect to simulate loading questions
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="min-h-screen bg-quiz-lime-100 flex flex-col">
            <NavBar playerName={playerName} lives={lives} />

            <div className="container mx-auto px-4 py-8 flex-grow">
                <div className="max-w-2xl mx-auto">
                    {isLoading ? (
                        <div className="text-center py-12">
                            <p className="text-xl">Loading questions...</p>
                        </div>
                    ) : (
                        <div className="text-center">
                            <p className="mb-8">Quiz content will be implemented in the next task</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="container mx-auto px-4 py-4">
                <ProgressBar current={currentQuestionIndex + 1} total={10} />
            </div>
        </div>
    );
};

export default QuizPage;