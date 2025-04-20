import { useState, useMemo } from 'react';
import Card from '../common/Card';
import AnswerOption from './AnswerOption';
import { TriviaQuestion } from '../../types';

interface QuizCardProps {
    questionNumber: number;
    question: TriviaQuestion;
    onAnswered: (isCorrect: boolean) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ questionNumber, question, onAnswered }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showResult, setShowResult] = useState<boolean>(false);

    // Randomize answer order but keep it stable with useMemo
    const allAnswers = useMemo(() => {
        const answers = [...question.incorrect_answers, question.correct_answer];
        return answers.sort(() => Math.random() - 0.5);
    }, [question]);

    // Helper function to decode HTML entities
    const decodeHTML = (html: string) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };

    const handleAnswerSelect = (answer: string) => {
        if (showResult) return; // Prevent selecting after result is shown

        setSelectedAnswer(answer);
        setShowResult(true);

        const isCorrect = answer === question.correct_answer;

        // Delay to show the result before proceeding to next question
        setTimeout(() => {
            onAnswered(isCorrect);
        }, 1500);
    };

    const getDifficultyColor = () => {
        switch (question.difficulty.toLowerCase()) {
            case 'easy':
                return 'bg-green-100';
            case 'medium':
                return 'bg-yellow-100';
            case 'hard':
                return 'bg-red-100';
            default:
                return 'bg-gray-100';
        }
    };

    return (
        <Card className={`overflow-hidden ${getDifficultyColor()}`}>
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Question {questionNumber}</span>
                    <span className="px-2 py-1 text-xs font-semibold rounded bg-gray-200">
                        {question.category}
                    </span>
                </div>

                <h3 className="text-lg font-medium mb-6 text-left">
                    {decodeHTML(question.question)}
                </h3>

                <div className="space-y-3">
                    {allAnswers.map((answer, index) => (
                        <AnswerOption
                            key={index}
                            answer={answer}
                            isSelected={selectedAnswer === answer}
                            isCorrect={showResult ? answer === question.correct_answer : undefined}
                            showResult={showResult}
                            onClick={() => handleAnswerSelect(answer)}
                            disabled={showResult}
                        />
                    ))}
                </div>

                {showResult && (
                    <div className="mt-4 text-left">
                        {selectedAnswer === question.correct_answer ? (
                            <p className="text-lime-600 font-medium">Correct!</p>
                        ) : (
                            <p className="text-red-600 font-medium">
                                Incorrect. The correct answer is: {decodeHTML(question.correct_answer)}
                            </p>
                        )}
                    </div>
                )}
            </div>

            <div className="px-4 py-2 bg-gray-50 text-xs text-gray-500 flex justify-between">
                <span>Difficulty: {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}</span>
                <span>Type: {question.type === "multiple" ? "Multiple Choice" : "True/False"}</span>
            </div>
        </Card>
    );
};

export default QuizCard;