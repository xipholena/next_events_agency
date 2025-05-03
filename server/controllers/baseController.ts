import { createResponse } from "@/src/utils";
import BaseContext from "../di/baseContext";
import { IUser } from "../models/user";

export abstract class BaseController extends BaseContext {
    constructor(opts) {
        super(opts)
        this.handleRequest = this.handleRequest.bind(this)
    }

    public handleRequest(req, res) {
        // Add id into object, check it's defined
        
        //const { params, isNextPage } = req.contextMetadata || {};
        const { id, isNextPage } = req.contextMetadata || {};

        //params is {} , so params.values.length instead of id to check if there any string parameter, not just id. OR (+++++)Add isNextPage on every page
        if (isNextPage || id) { // || id won't be needed
            //switch (req?.method) {
             //   case 'GET':

             // params.keys.length - probably will be always 1
                    if (id) { //params.values[0]

                        /**    ====  Part2, not necessary =====  */
                        //Send User not UsersController, Extract Users from UsecController and add['entity'Service]
                        //rename all services to handleFindOne and handleFindAll
                        //rename ticketController to ticketS and userService to userS. Check all is plural in di
                        
                        return this.di.UsersService.handleSSRFindUser(id/* params.values[0]*/).then(response => {
                            //Serializible what, props what  ====  Part2, not necessary =====
                            const serializableUser = JSON.parse(JSON.stringify(response) ?? '')
                            return res.json({ props: { user: serializableUser } })
                            
                        }).catch(e => {
                            return res.status(404).json({ props: { notFound: true } })
                            
                        });
                    } else { //handleFindOne and handleFindAll
                        return this.di.UsersService.handleSSRFindAllUsers().then(response => {
                            const serializableUsers = JSON.parse(JSON.stringify(response) ?? '')
                            return res.json({ props: { users: serializableUsers } })
                           
                        }).catch(e => {
                            return res.status(404).json({ props: { notFound: true } })
                            
                        })
                    }


                //default:
                //    console.log('------------controller default')
                //    return { props: {} }
            //}
        } else {
            switch (req?.method) {
                case 'GET':
                    //check req.query values.length
                    if (req?.query?.id) {
                        //same Part2
                        return this.di.UsersService.findUserById(req?.query?.id/*  .values[0] */).then(response => {
                            return res.json({
                                data: response,
                                message: '',
                                error: false,
                              })
                        }).catch(e => {
                            return res.status(404).json({
                                error: true,
                                message: 'User was not found!',
                                data: null,
                              })
                        });

                    } else {

                        return this.di.UsersService.findAllUsers().then(response => {
                            return res.json({
                                data: response,
                                message: '',
                                error: false,
                              })
                        }).catch(e => {
                            return res.status(404).json({
                                error: true,
                                message: 'User was not found!',
                                data: null,
                              })
                        });
                    }


                default:
                    console.log('------------controller default')
                    return {}//{ props: {} }
            }
        }

    }

}
// one action
// but many servers that are not (?) wired with controller
// responses are different
//maybe createResponse fn that called in both then and catch
// how do i know wich service?  wich data? mb from mutated req? maybe call it "metadata then"?

/*
--- users/1 -> contextId +              ----- users/1 -> isSSP+
--- /users -> contextId -               --- /users -> isSSP+
--- /api/users  -> contextId -          --- /api/users  -> isSSP - 
---- /api/users/1 -> contextId -        --- /api/users/1  -> isSSP - 
*/

