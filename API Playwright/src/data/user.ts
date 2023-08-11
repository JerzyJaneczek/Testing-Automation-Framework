import * as data from "./data.json"

export default class User { 
    id : number;
    username: string
    firstName : string
    lastName : string
    email : string;
    password : string;
    phone : string;
    userStatus : number

    constructor() {
        // const randomNum = Math.floor((Math.random()*100 + 1))
        // var randomStr = "john" + Math.random().toString(20).substring(2);

        // this.id = 0
        // this.username = "jurek"
        // this.firstName = randomStr
        // this.lastName = randomStr
        // this.email = randomStr
        // this.password = randomStr
        // this.phone = "12345678980"
        // this.userStatus = 0


        /* Or Import Data from data.json file */
        
        this.id = data.user.id
        this.username = data.user.username
        this.firstName = data.user.firstName
        this.lastName = data.user.lastName
        this.email = data.user.email
        this.password = data.user.password
        this.phone = data.user.phone
        this.userStatus = 0
        

    }
}