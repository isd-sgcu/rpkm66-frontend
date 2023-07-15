import { Modal } from '@/components/Modal';
import { useAppContext } from '@/components/ModalContext';

export default function ModalPage() {
    const { openModal, modalToOpen, closeModal } = useAppContext();

    return (
        <div>
            <div className="flex h-screen flex-row justify-center gap-4">
                <button onClick={() => openModal('modal-1')}>Modal #1</button>
                <button onClick={() => openModal('modal-2')}>Modal #2</button>
                <button onClick={() => openModal('modal-3')}>Modal #3</button>
                <button onClick={() => openModal('modal-4')}>Modal #4</button>
            </div>
            <Modal
                open={modalToOpen === 'modal-1'}
                onClose={closeModal}
                answer1="ยกเลิก"
                answer2="ต้องการ"
            >
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">
                        คุณต้องการเข้ากลุ่มของ
                        <span className="text-orange">
                            {' '}
                            แจฮยอน คงแก่การเรียน
                        </span>{' '}
                        หรือไม่?
                    </h2>
                    <p className="pt-4">
                        <span className="text-orange">บ๊อกบ๊อก วงษ์คำเหลา</span>{' '}
                        เป็นสมาชิกในกลุ่มนี้ด้วย
                    </p>
                </div>
            </Modal>
            <Modal
                open={modalToOpen === 'modal-2'}
                onClose={closeModal}
                answer1="ยกเลิก"
                answer2="ต้องการ"
            >
                <div className="flex">
                    <h2 className="text-2xl font-bold">
                        คุณต้องการ
                        <span className="text-orange"> เปลี่ยนกลุ่ม </span>
                        ไปเข้ากลุ่มของ
                        <span className="text-orange ">
                            {' '}
                            ปัญญา นิรันดร์กุล{' '}
                        </span>
                        หรือไม่?
                    </h2>
                </div>
            </Modal>
            <Modal
                open={modalToOpen === 'modal-3'}
                onClose={closeModal}
                answer1=""
                answer2="รับทราบ"
            >
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">
                        คุณไม่สามารถเปลี่ยนกลุ่มได้
                    </h2>
                    <p className="pt-4">เนื่องจากสมาชิกในกลุ่มเต็มแล้ว</p>
                </div>
            </Modal>
            <Modal
                open={modalToOpen === 'modal-4'}
                onClose={closeModal}
                answer1=""
                answer2="รับทราบ"
            >
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">
                        คุณไม่สามารถเปลี่ยนกลุ่มได้
                    </h2>
                    <p className="pt-4">เนื่องจากคุณเป็นหัวหน้ากลุ่มอยู่</p>
                </div>
            </Modal>
        </div>
    );
}
