import type { NextPage } from 'next';
export interface Question {
    message: string;
}
export type Scene = Record<
    string,
    { bg: string; message: any; choices: Question[]; goto: string }
>;
const GameScene: Scene = {
    Game01: {
        bg: '1',
        message: (
            <p className="text-white">Youniverse through universe mission</p>
        ),
        choices: [
            {
                message: 'Ready?',
            },
        ],
        goto: 'Game02',
    },
    Game02: {
        bg: '2',
        message: (
            <p className="text-black">เบื้องหน้าคุณคือจอโฮโลแกรมสว่างวาบ</p>
        ),
        choices: [],
        goto: 'Game03',
    },
    Game03: {
        bg: '3',
        message: <p className="text-white">กำลังเชื่อมต่อระบบ</p>,
        choices: [],
        goto: 'Game04',
    },
    Game04: {
        bg: '4',
        message: <></>,
        choices: [],
        goto: 'Game05',
    },
    Game05: {
        bg: '4',
        message: (
            <p className="text-black">
                อีกไม่กี่อึดใจข้างหน้า
                <br />
                ยานบินลำนี้จะพาคุณท่องเอกภพอันไร้พรมแดน
            </p>
        ),
        choices: [],
        goto: 'Game06',
    },
    Game06: {
        bg: '4',
        message: <p className="text-black">คุณพ่นลมหายใจเบาๆ รู้สึก</p>,
        choices: [
            {
                message: 'ตื่นเต้นกับภารกิจ',
            },
            {
                message: 'สงบนิ่งอย่างบอกไม่ถูก',
            },
        ],
        goto: 'Game07',
    },
    Game07: {
        bg: '4',
        message: (
            <p className="text-black">
                ต้องเป็นอย่างนั้นอยู่แล้ว
                <br />
                คุณทุ่มแรงกับภารกิจนี้ไปไม่น้อย
            </p>
        ),
        choices: [],
        goto: 'Game08',
    },
    Game08: {
        bg: '4',
        message: (
            <p className="text-black">
                คุณวางนิ้วบนแผงควบคุม
                <br />
                มั่นใจว่ายานจะพาคุณไปถึงเป้าหมายแน่นอน
                <br />
                เพราะ ...
            </p>
        ),
        choices: [
            {
                message: 'จากข้อมูลแล้วยานลำนี้มีสมรรถนะดีที่สุดจากทั้งหมด',
            },
            {
                message: 'ทุกคนรวมถึงตัวคุณเองลงความเห็นแล้วว่าเหมาะสมที่สุด',
            },
        ],
        goto: 'Game09',
    },
    Game09: {
        bg: '4',
        message: <p className="text-black">เอาล่ะ ใกล้ได้เวลาออกเดินทางแล้ว</p>,
        choices: [],
        goto: 'Game10',
    },
    Game10: {
        bg: '4',
        message: <p className="text-black">จริงสิ คุณพกไอนั่นมาด้วย</p>,
        choices: [],
        goto: 'Game11',
    },
    Game11: {
        bg: '4',
        message: <p className="text-black">คุณเอื้อมมือคว้า</p>,
        choices: [
            {
                message:
                    'คู่มือความปลอดภัย เพื่ออ่านทบทวนอีกครั้ง เผื่อเกิดเหตุฉุกเฉิน',
            },
            {
                message: 'พระ',
            },
        ],
        goto: 'Game12',
    },
};
export default GameScene;
