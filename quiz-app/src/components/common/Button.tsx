import { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    variant = 'primary',
    className = '',
    disabled = false
}) => {
    // Base button styles
    const baseStyles = 'button-55 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all';

    // Variant-specific styles
    const variantStyles = {
        primary: 'bg-quiz-lime-500 hover:bg-quiz-lime-600 text-white shadow-md',
        secondary: 'bg-quiz-neutral-700 hover:bg-black text-white shadow-md',
        outline: 'bg-transparent hover:bg-gray-100 text-quiz-neutral-700 border border-quiz-neutral-700'
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
            {children}
        </button>
    );
};

export default Button;