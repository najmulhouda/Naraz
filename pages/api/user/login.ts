import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { connectbd } from "@/lib/dbConnect"
import { User } from "@/models/index"
import { UserModel } from "@/models/UserModel";

type ResponseData = {
    error: string,
    message: string,
}

export default async function userLogin(req: NextApiRequest, res: NextApiResponse) {

    const JWTSECRET: any = process.env.JWT_SECRET

    if (req.method === "POST") {

        try {
            await connectbd()

            const body: UserModel = JSON.parse(req.body)

            const { email, password } = body;

            if (!email || !password) {
                return res.status(422).json({
                    status: false,
                    message: "please assign all the fields"
                })
            }

            const user = await User.findOne({ email })

            if (!user) {
                return res.status(404).json({
                    status: false,
                    message: "Login details don't match"
                })
            }

            const doMatch = await bcrypt.compare(password, user.password);

            if (doMatch) {
                const token = jwt.sign({ userId: user._id }, JWTSECRET, {
                    expiresIn: "30d",
                })

                if (!doMatch) {
                    return res.status(401).json({
                        status: false,
                        message: "Login password don't match"
                    });
                }

                const { _id, firstName, lastName, email, phone, address, address2, city, state, postcode, userRole, profile_avatar, date_at } = user;

                res.status(201).json({
                    status: true,
                    token,
                    user: { _id, firstName, lastName, email, phone, address, address2, city, state, postcode, userRole, profile_avatar, date_at },
                    message: "login successful",
                })
            } else {
                return res.status(404).json({
                    status: false,
                    message: "Login password don't match"
                })
            }

        } catch (err) {
            console.log(err)
            res.status(500).send("error")
        }
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }

}
