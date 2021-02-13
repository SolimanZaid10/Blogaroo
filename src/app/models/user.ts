export class User {
    constructor(public _id?:string,
        public userImage?:string,
        public firstName?:string,
        public lastName?:string,
        public email?:string,
        public username?:string,
        public password?:string,
        public followers?:string[],
        public followings?:string[],
        public token?:string,
       
        ){
        
    }
}
