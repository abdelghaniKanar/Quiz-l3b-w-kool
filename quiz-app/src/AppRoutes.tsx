import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import PlayerSelectionPage from './pages/PlayerSelectionPage';

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