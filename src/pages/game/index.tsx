import GameContainer from './lib/GameContainer';
import { useState } from 'react';
import GameScene from './lib/Scene';
import { useAuth } from '@/context/AuthContext';
import Planet from './lib/Planet';
import Score from './lib/Score';

// import CollectScore from './lib/CollectScore'

const GameLogic = () => {
    const { user } = useAuth();
    const [page, setPage] = useState<string>('Game40');
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
    if (page === 'Game48') {
        return (
            <div>
                <GameContainer
                    scene={{
                        id: page,
                        bg: GameScene[page].bg,
                        message: (
                            <div className="flex flex-col content-center justify-center">
                                <p className="text-white">
                                    ขอแสดงความยินดีกับคุณ
                                </p>
                                <p className="text-2xl text-pink-600">
                                    {user?.firstname || ' '} {user?.lastname}
                                </p>
                            </div>
                        ),
                        choices: GameScene[page].choices,
                        goto: GameScene[page].goto,
                    }}
                    setPage={setPage}
                />
            </div>
        );
    } else if (page === 'Game50') {
        console.log(Score(4));
        const planetNum = Score(4);
        return <Planet num={planetNum}></Planet>;
    }
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
