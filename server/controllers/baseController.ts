import { createResponse } from "@/src/utils";
import BaseContext from "../di/baseContext";
import { IUser } from "../models/user";

export class BaseController extends BaseContext {
    constructor(opts) {
        super(opts)
        this.handleRequest = this.handleRequest.bind(this)
    }

    public handleRequest(req, res) {
        const { id, isNextPage } = req.contextMetadata || {};
        console.log('isNextPage', isNextPage)
        if (isNextPage || id) {
            switch (req?.method) {
                case 'GET':
                    if (id) {

                        return this.di.UsersService.handleSSRFindUser(id).then(user => {
                            const serializableUser = JSON.parse(JSON.stringify(user) ?? '')

                            return createResponse(serializableUser, 'user').getSSP.success
                        }).catch(e => {
                            return createResponse().getSSP.error
                        });
                    } else {
                        return this.di.UsersService.handleSSRFindAllUsers().then(users => {
                            const serializableUsers = JSON.parse(JSON.stringify(users) ?? '')

                            return createResponse(serializableUsers, 'users').getSSP.success
                        }).catch(e => {
                            return createResponse().getSSP.error
                        })
                    }


                default:
                    console.log('------------controller default')
                    return { props: {} }
            }
        } else {
            switch (req?.method) {
                case 'GET':
                    if (req?.query?.id) {
                        return this.di.UsersService.findUserById(req?.query?.id).then(user => {
                            return res.json(createResponse(user, 'user').nextApi.success)
                        }).catch(e => {
                            return res.status(404).json(createResponse().nextApi.error)
                        });

                    } else {

                        return this.di.UsersService.findAllUsers().then(users => {
                            return res.json(createResponse(users, 'users').nextApi.success)
                        }).catch(e => {
                            return res.status(404).json(createResponse().nextApi.error)
                        });
                    }


                default:
                    console.log('------------controller default')
                    return { props: {} }
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
