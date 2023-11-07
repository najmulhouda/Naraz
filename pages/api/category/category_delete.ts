import { NextApiRequest, NextApiResponse } from "next";
import { connectbd } from "@/lib/dbConnect"
import { Category, CategoryModel } from "@/models/index"

type ResponseData = {
    error: string,
    message: string,
}

export default async function contactDelete(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {

        try {
            await connectbd()

            const id = req.query.id;

            if (id == null) {
                return res.status(200).json({
                    status: 'success',
                    message: "Category not delete successfully!",
                })
            } else {
                const contactDelete = await Category.deleteOne({ _id: id });
                return res.status(200).json({
                    status: 'success',
                    message: "Category delete successfully!",
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
