export interface Question {
    message: string;
    score: number;
}
export type Scene = Record<
    string,
    { bg: string; message: any; choices: Question[]; goto: string }
>;
