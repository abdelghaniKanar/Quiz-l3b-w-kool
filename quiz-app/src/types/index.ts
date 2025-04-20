// Player interfaces
export interface Player {
    id: string;
    name: string;
    highScore?: number;
    gamesPlayed?: number;
  }
  
  // Quiz interfaces
  export interface TriviaQuestion {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }
  
  export interface QuizState {
    questions: TriviaQuestion[];
    currentQuestionIndex: number;
    lives: number;
    score: number;
    isGameOver: boolean;
    isGameWon: boolean;
    answeredQuestions: number[];
  }
  
  // API response interface
  export interface TriviaResponse {
    response_code: number;
    results: TriviaQuestion[];
  }
  
  // Component prop interfaces
  export interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    disabled?: boolean;
  }
  
  export interface NavBarProps {
    playerName?: string;
    lives?: number;
  }
  
  export interface QuizCardProps {
    question: TriviaQuestion;
    onAnswer: (isCorrect: boolean) => void;
  }
  
  export interface ProgressBarProps {
    current: number;
    total: number;
  }
  
  export interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
  }