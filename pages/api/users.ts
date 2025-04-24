import type { NextApiRequest, NextApiResponse } from "next";
import User from "@/server/models/user";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User[]>,
) {
    const users = await User.findAll()
    res.status(200).json(users);
}