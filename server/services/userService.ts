
import BaseContext from "../di/baseContext";
import { IUser, UserType } from "../models/user";

export class UsersService extends BaseContext {
    constructor(opts) {
        super(opts)
        this.findAllUsers = this.findAllUsers.bind(this)
        this.findUserById = this.findUserById.bind(this)
        this.handleSSRFindUser = this.handleSSRFindUser.bind(this)
        this.handleSSRFindAllUsers = this.handleSSRFindAllUsers.bind(this)
    }

    public findAllUsers(): Promise<IUser[]> {
        return this.di.User.findAll()
    }

    public findUserById(id): Promise<IUser> {
        return this.di.User.findByPk(id)
    }

    public handleSSRFindAllUsers(): Promise<IUser[]> {
        return this.di.User.findAll()
    }

    public handleSSRFindUser(id): Promise<IUser> {
        return this.di.User.findByPk(id)
    }
}