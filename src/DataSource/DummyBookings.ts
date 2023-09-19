export const DummyBookings = {
    getData(){
        return [
    {
        id:0,
        organizer: 'Moghe, Priya',
        orgEmail: 'priya.moghe@ttec.com',
        bookingDate: '2023-09-11',
        timeslot:'3:30pm - 4:00pm'
    },
    {
        id:1,
        organizer: 'Verma, Shantanu',
        orgEmail: 'shantanu.verma@ttec.com',
        bookingDate: '2023-09-11',
        timeslot:'2:30pm - 3:00pm'
    },
    {
        id:2,
        organizer: 'Verma, Ankur',
        orgEmail: 'ankur.verma@ttec.com',
        bookingDate: '2023-09-11',
        timeslot:'2:00pm - 2:30pm'
    }
];
},
getOrganizers() {
    return Promise.resolve(this.getData().slice(0,50));
}}