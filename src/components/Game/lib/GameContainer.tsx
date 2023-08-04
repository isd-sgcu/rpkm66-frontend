import type { NextPage } from 'next';
import Button from '@/components/Button';
import type { Dispatch, SetStateAction } from 'react';
import GameBackground from './GameBackground';
import { AnimatePresence, motion } from 'framer-motion';
import { Question } from '../types/scene';
import Score from './Score';

function ChoicesButton({
    choices,
    goto,
    setPage,
}: {
    choices: Question[];
    goto: string;
    setPage: Dispatch<SetStateAction<string>>;
}) {
    if (choices.length === 1) {
        return (
            <div className="mx-auto my-10 flex content-center text-sm">
                <Button
                    content={choices[0].message}
                    onClick={() => {
                        console.log(goto);
                        setPage(goto);
                    }}
                    additionalStyle=" bg-pink-400 w-fit px-8 shadow-md border-pink-600 border-4 rounded-xl"
                />
            </div>
        );
    } else if (choices.length === 2) {
        return (
            <div className="w- mx-auto my-10 flex justify-center gap-2 text-sm font-extralight">
                <Button
                    content={choices[0].message}
                    onClick={() => {
                        console.log(goto);
                        setPage(goto);
                        Score(choices[0].score);
                    }}
                    additionalStyle="font-extralight text-s mx-5 bg-pink-400 px-2 shadow-md border-pink-600 border-4 rounded-xl"
                />
                <Button
                    content={choices[1].message}
                    onClick={() => {
                        console.log(goto);
                        setPage(goto);
                        Score(choices[1].score);
                    }}
                    additionalStyle="text-s mx-5 bg-pink-400 px-2 shadow-md border-pink-600 border-4 rounded-xl"
                />
            </div>
        );
    } else {
        return (
            <div
                className="fixed left-0 top-0 h-full w-full items-center justify-center"
                onClick={() => {
                    console.log(goto);
                    setPage(goto);
                }}
            />
        );
    }
}
export default function GameContainer({
    scene,
    setPage,
}: {
    scene: {
        bg: string;
        id: string;
        message: any;
        choices: Question[];
        goto: string;
    };
    setPage: Dispatch<SetStateAction<string>>;
}) {
    return (
        <AnimatePresence>
            <motion.div
                key={scene.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.5,
                }}
                className="relative flex min-h-screen w-full cursor-pointer place-content-center items-center overflow-x-hidden font-ibm font-bold text-white"
            >
                <GameBackground bg={scene.bg} />
                <div className="mb-40 block">
                    <h1 className="mx-auto text-center text-lg">
                        {scene.message}
                    </h1>
                    {ChoicesButton({
                        choices: scene.choices,
                        goto: scene.goto,
                        setPage: setPage,
                    })}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
