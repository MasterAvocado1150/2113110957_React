import axios,{AxiosResponse, AxiosError} from 'axios';

//สร้าง instance = ตัวแทน
const http = axios.create({
    headers:{'Content-Type':'application/json'}
});
export {http};

export type {AxiosResponse,AxiosError};