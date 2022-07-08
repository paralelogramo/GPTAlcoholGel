export class Notification{
    constructor(
        public room: string,
        public date: string,
        public time: string,
        public reason: string
    ){}
}