import React from 'react';
import { Scene } from '../types/scene';

const GameScene: Scene = {
    Game01: {
        bg: '1',
        message: (
            <p className="text-white">Youniverse through universe mission</p>
        ),
        choices: [
            {
                message: 'Ready?',
                score: 0,
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
                score: 0,
            },
            {
                message: 'สงบนิ่งอย่างบอกไม่ถูก',
                score: 0,
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
                score: 1,
            },
            {
                message: 'ทุกคนรวมถึงตัวคุณเองลงความเห็นแล้วว่าเหมาะสมที่สุด',
                score: 0,
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
                score: 0,
            },
            {
                message: 'พระ',
                score: 2,
            },
        ],
        goto: 'Game12',
    },
    Game12: {
        bg: '4',
        message: <p className="text-black">ได้เวลาแล้ว</p>,
        choices: [],
        goto: 'Game13',
    },
    Game13: {
        bg: '4',
        message: (
            <p className="text-black">
                ออกเดินทางในอีก
                <br />
                3.. 2.. 1..
            </p>
        ),
        choices: [],
        goto: 'Game14',
    },
    Game14: {
        bg: '4',
        message: <p className="text-black"></p>,
        choices: [],
        goto: 'Game15',
    },
    Game15: {
        bg: '15',
        message: <p className="text-white">คุณหลุดจากชั้นบรรยากาศโลกแล้ว</p>,
        choices: [],
        goto: 'Game16',
    },
    Game16: {
        bg: '15',
        message: <p className="text-white"></p>,
        choices: [],
        goto: 'Game17',
    },
    Game17: {
        bg: '17',
        message: <p className="text-white"></p>,
        choices: [],
        goto: 'Game18',
    },
    Game18: {
        bg: '17',
        message: <p className="text-white">ความคิดแรกที่เข้ามาในหัวคุณคือ</p>,
        choices: [
            {
                message:
                    'สงสัยว่ามันคือกลุ่มดาวอะไร ใหญ่แค่ไหน อยู่ไกลเท่าไหร่ อยากค้นคว้าจัง',
                score: 0,
            },
            {
                message:
                    'สวยมาก! เป็นวิวที่ไม่มีทาง ได้เห็นจากโลกแน่ๆ เหมือนฝันเลย',
                score: 2,
            },
        ],
        goto: 'Game19',
    },
    Game19: {
        bg: '19',
        message: <p className="text-white">โหมดการบินอัตโนมัติทำงาน</p>,
        choices: [],
        goto: 'Game20',
    },
    Game20: {
        bg: '19',
        message: <p className="text-white"></p>,
        choices: [],
        goto: 'Game21',
    },
    Game21: {
        bg: '21',
        message: <p className="text-white"></p>,
        choices: [],
        goto: 'Game22',
    },
    Game22: {
        bg: '21',
        message: (
            <p className="text-white">
                บางอย่างผิดปกติ
                <br />
                คุณรีบปรี่เข้าไปหน้าแผงควบคุมทันที
            </p>
        ),
        choices: [],
        goto: 'Game23',
    },
    Game23: {
        bg: '21',
        message: <p className="text-white"></p>,
        choices: [],
        goto: 'Game24',
    },
    Game24: {
        bg: '24',
        message: <p className="text-white"></p>,
        choices: [],
        goto: 'Game25',
    },
    Game25: {
        bg: '25',
        message: (
            <p className="text-white">คุณรอดพ้นอุปสรรคครั้งใหญ่นั้นมาได้</p>
        ),
        choices: [],
        goto: 'Game26',
    },
    Game26: {
        bg: '15',
        message: (
            <p className="text-white">
                แต่ก็ชักจะไม่แน่ใจแล้วว่า
                <br />
                ทางข้างหน้าคือทางเดียวกับ
                <br />
                ที่คุณและทีมได้วางแผนไว้
            </p>
        ),
        choices: [],
        goto: 'Game27',
    },
    Game27: {
        bg: '15',
        message: (
            <p className="text-white">คุณหน้านิ่วลงอย่างใช้ความคิด ก่อนจะ...</p>
        ),
        choices: [
            {
                message: 'มุ่งหน้าตามแผนเดิม',
                score: 3,
            },
            {
                message: 'ตัดสินใจปรับแผนการณ์',
                score: 0,
            },
        ],
        goto: 'Game28',
    },
    Game28: {
        bg: '15',
        message: (
            <p className="text-white">
                คุณวางมือที่ชื้นเหงื่อลงบนแผงควบคุม
                <br />
                รอบขมับเต้นตุบ ๆ จากความเครียด
            </p>
        ),
        choices: [],
        goto: 'Game29',
    },
    Game29: {
        bg: '29',
        message: (
            <p className="text-white">
                ยังไม่ทันจะได้หายใจทั่วท้อง
                <br />
                แสงบางอย่างก็ปรากฎหน้ายานของคุณ
            </p>
        ),
        choices: [],
        goto: 'Game30',
    },
    Game30: {
        bg: '30',
        message: <p className="text-white"></p>,
        choices: [],
        goto: 'Game31',
    },
    Game31: {
        bg: '2',
        message: <p className="text-white"></p>,
        choices: [
            {
                message: 'เข้าไปใกล้เพื่อสำรวจ',
                score: 0,
            },
            {
                message: 'หลบหนีเพื่อความปลอดภัย',
                score: 1,
            },
        ],
        goto: 'Game32',
    },
    Game32: {
        bg: '32',
        message: (
            <p className="text-black">วินาทีนั้น แสงก็พุ่งมาอยู่ตรงหน้า</p>
        ),
        choices: [],
        goto: 'Game33',
    },
    Game33: {
        bg: '33',
        message: (
            <p className="text-white">
                คุณจึงได้รู้ว่ามันคือ
                <br />
                สัญญาณขอความช่วยเหลือของยานอีกลํา
            </p>
        ),
        choices: [],
        goto: 'Game34',
    },
    Game34: {
        bg: '34',
        message: <p className="text-white"></p>,
        choices: [],
        goto: 'Game36',
    },
    //game scene35 and scene34 are same
    Game36: {
        bg: '34',
        message: (
            <p className="text-white">
                คุณตัดสินใจอยู่ช่วยพวกเขาจนถึงที่สุด
                <br />
                กระทั่งทุกอย่างผ่านพ้นด้วยดี
            </p>
        ),
        choices: [],
        goto: 'Game37',
    },
    Game37: {
        bg: '37',
        message: (
            <p className="text-white">
                พวกเขาจึงเสนอมอบบัตรเชิญร่วมงาน
                <br />
                “Freshmen night”
                <br />
                แก่คุณเป็นการตอบแทน
                <br />
                เป็นงานสุดยิ่งใหญ่อลังการ
                <br />
                ที่เปิดโอกาสให้นักท่องอวกาศทุกคนในสถาบัน
                <br />
                ไม่จำกัดฝ่าย ได้ร่วมสนุกและเพลิดเพลินไปกับ
                <br />
                คํ่าคืนที่งานรับเพื่อนก้าวใหม่จะมอบให้พวกคุณ
                <br />
                ในวันที่ 6 สิงหาคม พ.ศ.2566 ที่จะถึงนี้
                <br />
            </p>
        ),
        choices: [],
        goto: 'Game38',
    },
    Game38: {
        bg: '34',
        message: <p className="text-white">งานนี้พลาดไม่ได้เชียว คุณคาดหวัง</p>,
        choices: [
            {
                message:
                    'ที่จะได้สานสัมพันธ์กับเพื่อนใหม่ ๆ ได้ทำความรู้จักสถาบัน เพื่อเตรียมพร้อมท่องอวกาศ ในครั้งถัด ๆ ไป',
                score: 1,
            },
            {
                message:
                    'ความสนุก ม่วนจอย ที่จะได้รับอย่างจัดเต็ม โดยเฉพาะกับ concert freshy night ',
                score: 0,
            },
        ],
        goto: 'Game39',
    },
    Game39: {
        bg: '34',
        message: <p className="text-white"></p>,
        choices: [],
        goto: 'Game40',
    },
    Game40: {
        bg: '19',
        message: <p className="text-white">โหมดการบินอัตโนมัติทำงาน</p>,
        choices: [],
        goto: 'Game41',
    },
    Game41: {
        bg: '19',
        message: <p className="text-white">จบเรื่องวุ่น ๆ สักที</p>,
        choices: [],
        goto: 'Game42',
    },
    Game42: {
        bg: '42',
        message: (
            <p className="mt-48 text-black">
                ขอบคุณเทคโนโลยีล้ำสมัย
                <br />
                ที่ทำให้การอาบน้ำเป็นไปได้ในยานอวกาศ
                <br />
                เสียงน้ำกระทบพื้นแสนผ่อนคลาย
                <br />
                ทำให้คุณไหลไปกับกระแสความคิด
            </p>
        ),
        choices: [
            {
                message: 'กำลังคิดหาคำตอบว่าเราอาบน้ำบนยานอวกาศได้อย่างไร',
                score: 1,
            },
            {
                message: 'นึกถึงบรรยากาศเงียบสงบในวันฝนตก',
                score: 0,
            },
        ],
        goto: 'Game43',
    },
    Game43: {
        bg: '19',
        message: <p className="text-white">ได้เวลาปฏิบัติงาน</p>,
        choices: [],
        goto: 'Game44',
    },
    Game44: {
        bg: '19',
        message: <p className="text-white"></p>,
        choices: [],
        goto: 'Game45',
    },
    Game45: {
        bg: '19',
        message: (
            <p className="text-white">
                อันที่จริงตอนนี้ยานของคุณควร
                <br />
                ได้ลงจอดบนดาวดวงใหม่
                <br />
                ไม่ใช่บินอย่างเอื่อยเฉื่อยอยู่แบบนี้
            </p>
        ),
        choices: [
            {
                message:
                    'ถึงทรัพยากรจะยังเหลือ แต่สำหรับคุณ นี่ถือเป็นเรื่องน่ากังวล',
                score: 3,
            },
            {
                message:
                    'แต่ก็ไม่แย่ซะทีเดียว ใช้โอกาสนี้ท่องเอกภพ อีกสักหน่อย',
                score: 0,
            },
        ],
        goto: 'Game46',
    },
    Game46: {
        bg: '19',
        message: (
            <p className="text-white">
                จังหวะนั้นเอง
                <br />
                คุณเพิ่งสังเกตเห็นจุดแปลกปลอมนอกหน้าต่าง
            </p>
        ),
        choices: [],
        goto: 'Game47',
    },
    Game47: {
        bg: '19',
        message: (
            <p className="text-white">
                พร้อม ๆ กับแจ้งเตือนสำคัญ
                <br />
                ที่ผุดขึ้นมาบนหน้าจอโฮโลแกรม
            </p>
        ),
        choices: [],
        goto: 'Game48',
    },
    Game48: {
        bg: '48',
        message: <p></p>,
        choices: [],
        goto: 'Game49',
    },
    Game49: {
        bg: '48',
        message: <p className="text-white">ดาวของคุณถูกค้นพบแล้ว</p>,
        choices: [],
        goto: 'Game50',
    },
    Game50: {
        bg: 'null',
        message: <p></p>,
        choices: [],
        goto: '',
    },
};
export default GameScene;
