import { useState } from 'react';
import Button from '../common/Button';
import Card from '../common/Card';

interface PlayerFormProps {
    onSubmit: (name: string) => void;
}

const PlayerForm: React.FC<PlayerFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim()) {
            setError('Please enter your name');
            return;
        }

        onSubmit(name);
    };

    return (
        <Card className="p-6 mb-4">
            <h2 className="text-xl font-bold mb-4 text-quiz-neutral-700">Create New Player</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-quiz-neutral-700 text-sm font-bold mb-2" htmlFor="name">
                        Your Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-quiz-neutral-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setError('');
                        }}
                    />
                    {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
                </div>

                <div className="flex justify-center mt-6">
                    <Button type="submit" variant="primary">
                        Create & Start Playing
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default PlayerForm;