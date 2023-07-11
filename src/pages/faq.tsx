const Questions = [
    {
        header: 'ใช้อีเมลอะไรในการลงทะเบียนได้บ้าง ?',
        paragraph: 'สามารถใช้ได้ทั้งอีเมลส่วนตัวและอีเมลนิสิต',
    },
    {
        header: 'รูปที่อัปโหลดในเว็บไซต์จำเป็นต้องเป็นรูปแบบไหน ? จำเป็นต้องเป็นรูปนิสิตไหม ?',
        paragraph:
            'รูปที่อัปโหลดจะต้องเป็นรูปที่เห็นใบหน้าชัดเจน โดยสามารถใช้อัปโหลดรูปที่ไม่เป็นทางการได้ โดยจะต้องอัปโหลดรูปในสกุลไฟล์ .png หรือ .jpg ขนาดไม่เกิน 10MB',
    },
    {
        header: 'กรอกข้อมูลผิดตอนลงทะเบียน สามารถแก้ไขได้ไหม ?',
        paragraph:
            'สามารถแก้ไขข้อมูลได้ตั้งแต่วันที่ 17 กรกฎาคม 2566 จนถึง 22 กรกฎาคม 2566',
    },
];

const FAQ = () => {
    return (
        <div className="mx-auto min-h-screen max-w-xl px-4 py-16">
            <h1 className="text-center text-4xl font-bold">คำถามที่พบบ่อย</h1>

            <div className="flex flex-col gap-6 py-8">
                {Questions.map((question) => {
                    return (
                        <div
                            key={question.header}
                            className="flex flex-col gap-2 rounded-md bg-white px-8 py-8 shadow-md"
                        >
                            <h2 className="text-xl font-semibold text-purple">
                                {question.header}
                            </h2>

                            <p className="font-light text-gray-500">
                                {question.paragraph}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;
