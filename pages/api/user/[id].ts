import { NextApiRequest, NextApiResponse } from "next";
import { connectbd } from "@/lib/dbConnect"
import { User, UserModel } from "@/models/index";

export default async function getUserInfo(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            await connectbd()

            const user_id = req.query.id;
            const user = await User.findOne({ _id: user_id });
            
            return res.status(200).json({
                status: true,
                user: user,
            })

        } catch (err) {
            console.log(err)
            res.status(500).send("error")
        }
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}
