import { useState, useEffect } from 'react';
import Button from '../common/Button';
import Card from '../common/Card';
import { Player } from '../../types';

interface PlayerSelectProps {
    onSelect: (player: Player) => void;
    onCreateNew: () => void;
}

const PlayerSelect: React.FC<PlayerSelectProps> = ({ onSelect, onCreateNew }) => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [selectedPlayer, setSelectedPlayer] = useState<string>('');

    // Load existing players from localStorage
    useEffect(() => {
        const storedPlayers = localStorage.getItem('quizPlayers');
        if (storedPlayers) {
            try {
                const parsedPlayers = JSON.parse(storedPlayers);
                setPlayers(parsedPlayers);

                // If there are players, set the first one as selected by default
                if (parsedPlayers.length > 0) {
                    setSelectedPlayer(parsedPlayers[0].id);
                }
            } catch (error) {
                console.error('Error parsing stored players:', error);
            }
        }
    }, []);

    const handlePlayerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPlayer(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const player = players.find(p => p.id === selectedPlayer);
        if (player) {
            onSelect(player);
        }
    };

    // If no players, render a message and redirect button
    if (players.length === 0) {
        return (
            <Card className="p-6 mb-4">
                <h2 className="text-xl font-bold mb-4 text-quiz-neutral-700">No Saved Players Found</h2>
                <p className="text-gray-600 mb-6">
                    You don't have any saved players yet. Create a new player to start playing!
                </p>
                <div className="flex justify-center">
                    <Button onClick={onCreateNew} variant="primary">
                        Create New Player
                    </Button>
                </div>
            </Card>
        );
    }

    return (
        <Card className="p-6 mb-4">
            <h2 className="text-xl font-bold mb-4 text-quiz-neutral-700">Choose Existing Player</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-quiz-neutral-700 text-sm font-bold mb-2" htmlFor="player">
                        Select Player
                    </label>
                    <select
                        className="shadow border rounded w-full py-2 px-3 text-quiz-neutral-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="player"
                        value={selectedPlayer}
                        onChange={handlePlayerChange}
                    >
                        {players.map(player => (
                            <option key={player.id} value={player.id}>
                                {player.name} {player.highScore !== undefined ? `(High Score: ${player.highScore})` : ''}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex justify-center mt-6">
                    <Button type="submit" variant="primary">
                        Start Playing
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default PlayerSelect;