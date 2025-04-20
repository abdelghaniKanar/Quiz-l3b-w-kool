import Button from '../common/Button';
import Popup from '../common/Popup';

interface GameResumePopupProps {
    isOpen: boolean;
    onResume: () => void;
    onRestart: () => void;
}

const GameResumePopup: React.FC<GameResumePopupProps> = ({
    isOpen,
    onResume,
    onRestart
}) => {
    return (
        <Popup
            isOpen={isOpen}
            onClose={() => { }} // Cannot be closed except via buttons
            title="Resume Game"
        >
            <div className="text-center">
                <p className="text-lg mb-6">
                    You have an unfinished game. Would you like to continue where you left off?
                </p>

                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <Button onClick={onResume} variant="primary">
                        Continue
                    </Button>
                    <Button onClick={onRestart} variant="outline">
                        Start New Game
                    </Button>
                </div>
            </div>
        </Popup>
    );
};

export default GameResumePopup;