import GameContainer from './lib/GameContainer';
import { useState } from 'react';
import GameScene from './lib/Game';

const GameLogic = () => {
    const [page, setPage] = useState<string>('Game01');
    <GameContainer
        scene={{
            id: page,
            bg: GameScene[page].bg,
            choices: GameScene[page].choices,
            message: GameScene[page].message,
            goto: GameScene[page].goto,
        }}
        setPage={setPage}
    />;
    return (
        <div>
            <GameContainer
                scene={{
                    id: page,
                    bg: GameScene[page].bg,
                    message: GameScene[page].message,
                    choices: GameScene[page].choices,
                    goto: GameScene[page].goto,
                }}
                setPage={setPage}
            />
        </div>
    );
};
export default GameLogic;
