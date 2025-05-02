import { log } from "console";
import BaseContext from "../di/baseContext";
import { IUser } from "../models/user";
import { createResponse } from "@/src/utils";
import { BaseController } from "./baseController";
export class UsersController extends BaseController /*extends BaseContext*/ {
    constructor(opts) {
        super(opts)
        /*this.getAllUsers = this.getAllUsers.bind(this)
        this.getUserById = this.getUserById.bind(this)
        this.handleSSRGetUser = this.handleSSRGetUser.bind(this)
        this.handleSSRGetAll = this.handleSSRGetAll.bind(this)*/

        //this.handleRequest = this.handleRequest.bind(this)
        //this.handleSSPRequest = this.handleSSPRequest.bind(this)
        //this.handleNextApiRequest = this.handleNextApiRequest.bind(this)
    }





    public handleNextApiRequest(req, res) {

        //if(req?.query?.id){} else{}


    }


    /*
        public getAllUsers(req, res): Promise<IUser[]> {
            return this.di.UsersService.findAllUsers().then(users => {
    
                return res.json({
                    error: false,
                    message: "",
                    data: users
                })
            }).catch(e => {
    
                return res.status(404).json({
                    error: true,
                    message: "No users found!",
                    data: null,
                })
            });
    
    
            /* switch (method) {
                 case 'get':
                     console.log('------------controller get')
                     this.di.UsersService.findAllUsers().then().catch(e)
                     break;
     
                 default:
                     console.log('------------controller default')
                     return { props: {} }
             }*//*
}

public getUserById(req, res): Promise<IUser> {
return this.di.UsersService.findUserById(req?.query?.id).then(user => {

return res.json({
error: false,
message: '',
data: user,
})
}).catch(e => {

return res.status(404).json({
error: true,
message: `User with id ${req?.query?.id} was not found!`,
data: null,
})
});
}

public handleSSRGetUser(req, res): Promise<IUser> {
const { id } = req.contextParams;
console.log('req?.method', req?.method)

return this.di.UsersService.handleSSRFindUser(id).then(user => {

const serializableUser = JSON.parse(JSON.stringify(user) ?? '')

/*return res.json({
error: false,
message: '',
data: { props: { user: serializableUser } },
})*//*
                            
                             return { props: { user: serializableUser } }
                            }).catch(e => {
                             /*return res.status(404).json({
                                 error: true,
                                 message: `User with id ${req?.query?.id} was not found!`,
                                 data: { props: { notFound: true } }
                             })*//*
 
return { props: { notFound: true } }
 
});
 
}
 
public handleSSRGetAll(req, res): Promise<IUser[]> {
console.log('req?.method', req?.method)
return this.di.UsersService.handleSSRFindAllUsers().then(users => {
 
const serializableUsers = JSON.parse(JSON.stringify(users) ?? '')
 
return { props: { users: serializableUsers } }
}).catch(e => {
 
return { props: { notFound: true } }
})
 
}*/
}



