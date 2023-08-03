export default function getPlanet(
    logic: number,
    overall: number,
    plan: number
) {
    if (logic === 3 && overall === 1 && plan === 1) {
        return 0;
    } else if (logic === 2 && overall === 2 && plan === 1) {
        return 1;
    } else if (logic === 2 && overall === 1 && plan === 2) {
        return 2;
    } else if (logic > 3 && overall > 2 && plan > 2) {
        return 3;
    } else if (logic < 3 && overall > 2 && plan > 2) {
        return 4;
    } else if (logic > 3 && overall < 1 && plan > 2) {
        return 5;
    } else if (logic > 3 && overall > 2 && plan < 1) {
        return 6;
    } else {
        return 7;
    }
}
