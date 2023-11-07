import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import absoluteUrl from "next-absolute-url"
import { connectbd } from "@/lib/dbConnect"
import { User } from "@/models/index"
import { UserModel } from "@/models/UserModel";
import { sendEmail } from "@/helpers/sendMail";

export default async function forgetPassword(req: NextApiRequest, res: NextApiResponse) {

    const JWTSECRET: any = process.env.JWT_SECRET

    if (req.method === "POST") {

        try {
            await connectbd()

            const body: UserModel = JSON.parse(req.body)

            const { email } = body;

            const user = await User.findOne({ email: email })

            if (user) {

                // console.log('newUser :- ', newUser);
                const token = jwt.sign({ _id: user._id }, JWTSECRET, {
                    expiresIn: "1d",
                })

                // console.log(token)

                const { origin } = absoluteUrl(req)
                const link = `${origin}/reset-password/${token}`

                const message = `<div>Click on the link below to reset your password, if the link is not working then please paste into the browser.</div></br><div>link:${link}</div>`

                // console.log("message", message)

                // console.log("here")

                await sendEmail({
                    to: user.email,
                    subject: "Password Reset",
                    text: message,
                })

                return res.status(200).json({
                    status: true,
                    message: "Your password reset link send in email , please check you email!",
                })

            } else {
                return res.status(422).json({ status: false, error: "This account don't exists!!!" })
            }



        } catch (err) {
            console.log(err)
            res.status(500).send("error")
        }

    } else {
        res.status(405).json({ message: "Method not allowed" })
    }

}
