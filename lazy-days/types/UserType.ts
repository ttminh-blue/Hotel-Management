import { type } from "os";

export type UserType = {
    name: string;
    position: string;
    email: string;
    phone: number | string;
 };
 

export type RoomType = {
    MA_PHONG: string,
    TEN_PHONG: string,
    SO_LUONG_DAP_UNG: number,
    LOAI: string,
    TRANG_THAI:string,
};

export type Booking = {
    MaNvql: string,
    MaPhieuDp: string,
    MaPhong: string,
    NgayPhanPhong: string,
    NgayNhan: string
 };
 export type BookingGet = {
    MA_PHIEU_DP: string,
    MA_KH: string,
    MA_NV: string,
    NGAY_DAT: Date,
    TONG_TIEN: any,
    TIEN_COC: any,
    LOAIPHONG: string,
    NGAY_TRA_PHONG: Date,
    SO_DEM_LUU_TRU: number,
    MA_GOIDV: any
 }

 export type Room = {
    MA_PHONG: string;
    TEN_PHONG: string;
    TRANG_THAI: string;
    SO_LUONG_DAP_UNG: number;
    LOAI: string;
    DIADIEM: string;
 }

 export interface BellmanAssignmentRoom extends Room  {
    MA_PHIEU_DP: string;
    NGAY_NHAN: string;
    NGAY_PHAN_PHONG: string;
    SDT: string;
    SO_DEM_LUU_TRU: number;
    TEN_KH: string;
    TRANG_THAI_DAT_PHONG: string;
    YEU_CAU_DB: string;
 };


export type PackageType = {
   packageName?: string;
   packageQuantity?: Number;
};


export type PackageFormType = {
   packages: PackageType[];
};

export type BaggageRequestType = {
   MaPhong: string,
   MaPhieuDp: string,
   MaNv: string,
   SoLuong: number,
   HanhLy: string,
   MaPhieudangkyvanchuyen: string
}

export type BaggageFormType = {
   MA_PHIEUDANGKYVANCHUYEN: string,
   NGAY_TAO: string,
   HANH_LY: string,
   SO_LUONG: number,
   TEN_KH: string,
   SDT: string,
   TEN_PHONG: string,
   TEN_NV: string,
   CHUC_VU: string
} 
