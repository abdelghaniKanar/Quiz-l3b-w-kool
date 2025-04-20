interface AnswerOptionProps {
    answer: string;
    isSelected: boolean;
    isCorrect?: boolean;
    showResult: boolean;
    onClick: () => void;
    disabled: boolean;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
    answer,
    isSelected,
    isCorrect,
    showResult,
    onClick,
    disabled
}) => {
    // Helper function to decode HTML entities
    const decodeHTML = (html: string) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };

    // Determine button styling based on state
    let buttonClasses = 'w-full text-left p-3 rounded border transition-colors';

    if (showResult) {
        if (isCorrect) {
            buttonClasses += ' bg-green-100 border-lime-500';
        } else if (isSelected) {
            buttonClasses += ' bg-red-100 border-red-500';
        } else {
            buttonClasses += ' bg-white border-gray-300';
        }
    } else {
        buttonClasses += isSelected
            ? ' bg-quiz-lime-100 border-quiz-lime-500'
            : ' bg-white border-gray-300 hover:bg-gray-50';
    }

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
        >
            <div className="flex justify-between items-center">
                <span>{decodeHTML(answer)}</span>

                {showResult && isCorrect && (
                    <span className="ml-2 text-lime-600">✓</span>
                )}

                {showResult && isSelected && !isCorrect && (
                    <span className="ml-2 text-red-600">✗</span>
                )}
            </div>
        </button>
    );
};

export default AnswerOption;