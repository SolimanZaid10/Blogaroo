export class Blog {
    constructor(public _id?:string,
        public title?:string,
        public authorImage?:string,
        public userId?:string,
        public body?:string,
        public blogImage?:string,
        public tags?:string[],
        public createdAt?:Date,
        public author?:string, 
        public comments?:[Comment]){

    }
}
