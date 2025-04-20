import { Routes, Route } from 'react-router-dom';

// Import pages (will be created later)
const WelcomePage = () => <div>Welcome Page</div>;
const PlayerSelectionPage = () => <div>Player Selection Page</div>;
const QuizPage = () => <div>Quiz Page</div>;

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/player-selection" element={<PlayerSelectionPage />} />
            <Route path="/quiz" element={<QuizPage />} />
        </Routes>
    );
};

export default AppRoutes;