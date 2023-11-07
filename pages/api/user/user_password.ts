import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs"
import { connectbd } from "@/lib/dbConnect"
import { User } from "@/models/index"
import { UserModel } from "@/models/UserModel";

export default async function userPassUpdate(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {

        try {
            await connectbd()

            const body: any = JSON.parse(req.body)

            const { _id, current_Password, new_Password, } = body;

            const user = await User.findOne({ _id })

            if (!user) {
                return res.status(404).json({ status: 'failed', message: "Your current password is not matched!!!", })
            }

            const doMatch = await bcrypt.compare(current_Password, user?.password);

            if (doMatch) {
                const HashedPassword = await bcrypt.hash(new_Password, 12)
                const userPassUpdate = await User.updateOne({ _id: _id }, {
                    password: HashedPassword,
                });
                return res.status(200).json({
                    status: 'success',
                    message: "Your password is update successfully!",
                })
            } else {
                return res.status(404).json({
                    status: 'failed',
                    message: "Your current password is not matched!!!",
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
