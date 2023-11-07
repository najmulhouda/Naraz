import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import absoluteUrl from "next-absolute-url"
import { connectbd } from "@/lib/dbConnect"
import { User } from "@/models/index"
import { UserModel } from "@/models/UserModel";
import { exit } from "process";

type ResponseData = {
    error: string,
    message: string,
}

export default async function getPosts(req: NextApiRequest, res: NextApiResponse) {

    const JWTSECRET: any = process.env.JWT_SECRET

    if (req.method === "GET") {

        try {
            await connectbd()

            const users = await User.find();

            res.status(201).json({
                users,
                status: true,
            })

        } catch (err) {
            console.log(err)
            res.status(500).send("error")
        }
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }

}
