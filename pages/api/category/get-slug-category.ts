import { NextApiRequest, NextApiResponse } from "next";
import { connectbd } from "@/lib/dbConnect"
import { Category, CategoryModel } from "@/models/index"

export default async function getCategory(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            await connectbd();
            const { pid, slug } = req.query;
            const category:any = await Category.findOne({ slug: slug });
            const parentCat = await Category.findOne({ _id: pid });

            return res.status(200).json({
                status: true,
                parentCat,
                category,
            })

        } catch (err) {
            console.log(err)
            res.status(500).send("error")
        }
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}
