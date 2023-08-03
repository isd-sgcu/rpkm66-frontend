export interface Question {
    message: string;
}
export type Scene = Record<
    string,
    { bg: string; message: any; choices: Question[]; goto: string }
>;
