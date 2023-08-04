const playerScore: number[] = [0, 0, 0];

export default function Score(type: number) {
    if (type === 1) {
        playerScore[0] += 1;
    } else if (type === 2) {
        playerScore[1] += 1;
    } else if (type === 3) {
        playerScore[2] += 1;
    } else {
        console.log(playerScore);
        if (
            playerScore[0] === 3 &&
            playerScore[1] === 1 &&
            playerScore[2] === 1
        ) {
            return 0;
        } else if (
            playerScore[0] === 2 &&
            playerScore[1] === 2 &&
            playerScore[2] === 1
        ) {
            return 1;
        } else if (
            playerScore[0] === 2 &&
            playerScore[1] === 1 &&
            playerScore[2] === 2
        ) {
            return 2;
        } else if (
            playerScore[0] > 3 &&
            playerScore[1] > 2 &&
            playerScore[2] > 2
        ) {
            return 3;
        } else if (
            playerScore[0] < 3 &&
            playerScore[1] > 2 &&
            playerScore[2] > 2
        ) {
            return 4;
        } else if (
            playerScore[0] > 3 &&
            playerScore[1] < 1 &&
            playerScore[2] > 2
        ) {
            return 5;
        } else if (
            playerScore[0] > 3 &&
            playerScore[1] > 2 &&
            playerScore[2] < 1
        ) {
            return 6;
        } else {
            return 7;
        }
    }
}
