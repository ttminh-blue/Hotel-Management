export type UserType = {
    name: string;
    position: string;
    email: string;
    phone: number | string;
 };
 

export type RoomType = {
    roomID: string,
    roomName: string,
    type: string,
    status: boolean,
    location:string,
};

export type Booking = {
    MaPhieuDp: string,
    MaKh: string,
    NgayDat: Date,
    Loaiphong: string,
    TienCoc: number,
    NgayTraPhong: Date,
 };
 export type BookingGet = {
    MA_PHIEU_DP: string,
    MA_KH: string,
    MA_NV: string,
    NGAY_DAT: Date,
    TONG_TIEN: null,
    TIEN_COC: null,
    LOAIPHONG: string,
    NGAY_TRA_PHONG: Date,
    SO_DEM_LUU_TRU: number,
    MA_GOIDV: null
 }