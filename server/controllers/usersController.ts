import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";
import { NodeRouter } from "next-connect/dist/types/node";
import User from "../models/user";
export class UsersContoller {
    constructor() {
        this.getAllUsers = this.getAllUsers.bind(this)
        this.getUserById = this.getUserById.bind(this)
    }


    async getAllUsers(req, res) {
        const users = await User.findAll();
        res.json({ users });
    }

    async getUserById(req, res) {
        /*console.log(req?.query)
        console.log(req?.params)
        console.log(req?.url)
        console.log('req.query.id', req.query.id)*/
        const users = await User.findAll();
        res.json({ users });
    }
}



