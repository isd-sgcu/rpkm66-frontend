import { EstampDTO } from '@/dto/estampDTO';
import { httpGet } from '@/utils/axios';

const getUserStamp = async () => {
    try {
        const { data } = await httpGet<EstampDTO>('/estamp/my');
        return { status: 'success', data };
    } catch (err) {
        return {
            status: 'error',
            error: err,
        };
    }
};

const getRedeemStatus = async () => {
    try {
        const { data } = await httpGet<{ redeemed: boolean }>('/estamp/redeem');
        return { status: 'success', data };
    } catch (err) {
        return {
            status: 'error',
            error: err,
        };
    }
};

export { getUserStamp, getRedeemStatus };
