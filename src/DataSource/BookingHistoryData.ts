export const BookingHistoryDummyData = {
    getData(){
        return [
    {
        id:0,
        RoomName: 'Charminar',
        BookingDate: '2023-09-11',
        TimeSlot:'3:00pm - 3:30pm'
    },
    {
        id:1,
        RoomName: 'Falaknuma',
        BookingDate: '2023-09-10',
        TimeSlot:'4:30pm - 4:30pm'
    },
    {
        id:2,
        RoomName: 'Nalanda',
        BookingDate: '2023-09-16',
        TimeSlot:'2:30pm - 3:00pm'
    },
    
];
},
getBookings() {
    return Promise.resolve(this.getData().slice(0,50));
}}