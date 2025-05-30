import { ProgressBarProps } from '../../types';

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
    const percentage = (current / total) * 100;

    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
                className="bg-quiz-lime-500 h-2.5 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;