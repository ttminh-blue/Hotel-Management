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
    name: string,
    id_guest: string,
    room_type: string,
    checkindate: Date,
 };
 