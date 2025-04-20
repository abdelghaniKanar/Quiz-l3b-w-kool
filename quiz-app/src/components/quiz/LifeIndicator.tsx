interface LifeIndicatorProps {
    lives: number;
    maxLives?: number;
}

const LifeIndicator: React.FC<LifeIndicatorProps> = ({ lives, maxLives = 3 }) => {
    return (
        <div className="flex justify-center">
            {[...Array(maxLives)].map((_, i) => (
                <div key={i} className="mx-1 animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>
                    {i < lives ? (
                        // Full heart
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-red-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        // Empty heart
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-300"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                </div>
            ))}
        </div>
    );
};

export default LifeIndicator;