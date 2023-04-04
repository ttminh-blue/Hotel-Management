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
}