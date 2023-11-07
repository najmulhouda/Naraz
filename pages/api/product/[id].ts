import { NextApiRequest, NextApiResponse } from "next";
import { connectbd } from "@/lib/dbConnect"
import { Product } from "@/models/index"

export default async function getProduct(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            await connectbd()
            const id = req.query.id;
            const product = await Product.findOne({ _id: id })

            return res.status(200).json({
                status: true,
                product: product,
            })
        } catch (err) {
            console.log(err)
            res.status(500).send("error")
        }
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}
