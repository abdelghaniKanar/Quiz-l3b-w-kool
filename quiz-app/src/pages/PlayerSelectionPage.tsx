import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import PlayerForm from '../components/player/PlayerForm';
import PlayerSelect from '../components/player/PlayerSelect';
import { Player } from '../types';
import { v4 as uuidv4 } from 'uuid';

const PlayerSelectionPage: React.FC = () => {
    const navigate = useNavigate();
    const [showCreateForm, setShowCreateForm] = useState<boolean>(false);

    const handleCreatePlayer = (name: string) => {
        // Create new player object
        const newPlayer: Player = {
            id: uuidv4(),
            name,
            highScore: 0,
            gamesPlayed: 0
        };

        // Save to localStorage
        const storedPlayers = localStorage.getItem('quizPlayers');
        let players: Player[] = [];

        if (storedPlayers) {
            try {
                players = JSON.parse(storedPlayers);
            } catch (error) {
                console.error('Error parsing stored players:', error);
            }
        }

        players.push(newPlayer);
        localStorage.setItem('quizPlayers', JSON.stringify(players));

        // Save current player
        localStorage.setItem('currentPlayer', JSON.stringify(newPlayer));

        // Navigate to quiz
        navigate('/quiz');
    };

    const handleSelectPlayer = (player: Player) => {
        // Save selected player as current
        localStorage.setItem('currentPlayer', JSON.stringify(player));

        // Navigate to quiz
        navigate('/quiz');
    };

    const toggleView = () => {
        setShowCreateForm(prev => !prev);
    };

    return (
        <div className="min-h-screen bg-quiz-lime-100 py-12 px-4">
            <div className="max-w-md mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-quiz-neutral-700 mb-6">
                        Player Selection
                    </h1>

                    <div className="flex justify-center space-x-4 mb-8">
                        <Button
                            onClick={() => setShowCreateForm(true)}
                            variant={showCreateForm ? 'primary' : 'outline'}
                        >
                            Create New
                        </Button>
                        <Button
                            onClick={() => setShowCreateForm(false)}
                            variant={!showCreateForm ? 'primary' : 'outline'}
                        >
                            Use Existing
                        </Button>
                    </div>
                </div>

                {showCreateForm ? (
                    <PlayerForm onSubmit={handleCreatePlayer} />
                ) : (
                    <PlayerSelect
                        onSelect={handleSelectPlayer}
                        onCreateNew={() => setShowCreateForm(true)}
                    />
                )}

                <div className="mt-8 text-center">
                    <Button
                        onClick={() => navigate('/')}
                        variant="outline"
                    >
                        Back to Welcome
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PlayerSelectionPage;