import { NextApiRequest, NextApiResponse } from "next";
import { connectbd } from "@/lib/dbConnect"
import { Category } from "@/models/index"

export default async function getPosts(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            await connectbd()

            const id = req.query.id;
            const category = await Category.findOne({ _id: id })

            return res.status(200).json({
                status: true,
                category: category,
            })

        } catch (err) {
            console.log(err)
            res.status(500).send("error")
        }
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}
