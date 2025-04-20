import Popup from '../common/Popup';

interface LifeLostPopupProps {
    isOpen: boolean;
    onClose: () => void;
    livesRemaining: number;
}

const LifeLostPopup: React.FC<LifeLostPopupProps> = ({
    isOpen,
    onClose,
    livesRemaining
}) => {
    // Auto-close after 2 seconds
    if (isOpen) {
        setTimeout(() => {
            onClose();
        }, 2000);
    }

    return (
        <Popup
            isOpen={isOpen}
            onClose={onClose}
            title="Oops!"
        >
            <div className="text-center">
                <div className="text-5xl mb-4">💔</div>
                <p className="text-xl mb-4">You lost a life!</p>

                <p className="font-bold">
                    {livesRemaining === 0
                        ? "No lives remaining!"
                        : `${livesRemaining} ${livesRemaining === 1 ? 'life' : 'lives'} remaining`}
                </p>
            </div>
        </Popup>
    );
};

export default LifeLostPopup;