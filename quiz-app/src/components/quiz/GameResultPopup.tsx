import Button from '../common/Button';
import Popup from '../common/Popup';

interface GameResultPopupProps {
    isOpen: boolean;
    isWin: boolean;
    score: number;
    totalQuestions: number;
    onRestart: () => void;
    onHome: () => void;
}

const GameResultPopup: React.FC<GameResultPopupProps> = ({
    isOpen,
    isWin,
    score,
    totalQuestions,
    onRestart,
    onHome
}) => {
    const title = isWin ? 'Congratulations!' : 'Game Over';

    return (
        <Popup
            isOpen={isOpen}
            onClose={() => { }} // Popup cannot be closed except via buttons
            title={title}
        >
            <div className="text-center">
                {isWin ? (
                    <div className="mb-6">
                        <div className="text-6xl mb-4">🏆</div>
                        <p className="text-lg mb-2">You've successfully completed the quiz!</p>
                    </div>
                ) : (
                    <div className="mb-6">
                        <div className="text-6xl mb-4">💔</div>
                        <p className="text-lg mb-2">You've run out of lives!</p>
                    </div>
                )}

                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                    <p className="text-xl font-bold">Your Score</p>
                    <p className="text-3xl font-bold text-quiz-lime-500">{score} / {totalQuestions}</p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <Button onClick={onRestart} variant="primary">
                        Play Again
                    </Button>
                    <Button onClick={onHome} variant="outline">
                        Back to Home
                    </Button>
                </div>
            </div>
        </Popup>
    );
};

export default GameResultPopup;