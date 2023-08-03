import Scene from './Game';
import type { NextPage } from 'next';
import Button from '@/components/Button';
import { Question } from './Game';
import type { Dispatch, SetStateAction } from 'react';
import GameBackground from './GameBackground';

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
            <div className="mx-auto my-10 flex content-center text-sm ">
                <Button
                    content={choices[0].message}
                    onClick={() => {
                        console.log(goto);
                        setPage(goto);
                    }}
                    additionalStyle="mx-4 bg-pink-400 w-fit px-2 shadow-md border-pink-600 border-4 rounded-xl"
                />
                <Button
                    content={choices[1].message}
                    onClick={() => {
                        console.log(goto);
                        setPage(goto);
                    }}
                    additionalStyle="mx-4 bg-pink-400 w-fit px-2 shadow-md border-pink-600 border-4 rounded-xl"
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
        <div className="relative flex min-h-screen w-full place-content-center items-center overflow-x-hidden font-ibm font-bold text-white">
            <GameBackground bg={scene.bg} />
            <div className="mb-40 block">
                <h1 className="mx-auto text-center text-lg  ">
                    {scene.message}
                </h1>
                {ChoicesButton({
                    choices: scene.choices,
                    goto: scene.goto,
                    setPage: setPage,
                })}
            </div>
        </div>
    );
}
