import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import absoluteUrl from "next-absolute-url"
import { connectbd } from "@/lib/dbConnect"
import { User } from "@/models/index"
import { UserModel } from "@/models/index";
import { sendEmail } from "@/helpers/sendMail"

export default async function userRegister(req: NextApiRequest, res: NextApiResponse) {

    const JWTSECRET: any = process.env.JWT_SECRET

    if (req.method === "POST") {

        try {
            await connectbd()

            const body: UserModel = JSON.parse(req.body)

            const { firstName, lastName, email, password } = body;

            const user = await User.findOne({ email: email })

            console.log('user :', user);

            if (user) {
                return res.status(422).json({
                    status: false,
                    message: "This account is already exists!!!"
                })
            }

            const HashedPassword = await bcrypt.hash(password, 12);

            const newUser = await new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: "",
                password: HashedPassword,
                dob: "",
                company: "",
                address: "",
                address2: "",
                city: "",
                state: "",
                postcode: "",
                country: "Bangladesh",
            }).save()

            // console.log('newUser :- ', newUser);

            // const token = jwt.sign({ _id: newUser._id }, JWTSECRET, {
            //     expiresIn: "30d",
            // })

            // console.log(token)

            // newUser.emailToken = token
            // await newUser.save()

            // const { origin } = absoluteUrl(req)
            // const link = `${origin}/user/email/${token}`
            // const message = `<div>Click on the link below to verify your email, if the link is not working then please paste into the browser.</div></br><div>link:${link}</div>`

            const message = `<p>Your account is registered successfully</p>`;

            // console.log("message", message)
            // console.log("here")

            await sendEmail({
                to: newUser.email,
                subject: "Account is registered",
                text: message,
            })

            return res.status(201).json({
                status: true,
                message: "Your account is registered successfully!",
            })
        } catch (err) {
            console.log(err)
            res.status(500).send("error")
        }
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }

}
