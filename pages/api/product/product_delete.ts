import { NextApiRequest, NextApiResponse } from "next";
import { connectbd } from "@/lib/dbConnect"
import { Product, ProductModel } from "@/models/index"

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
                    status: false,
                    message: "Product ID is required!",
                })
            } else {
                const proDelete = await Product.deleteOne({ _id: id });
                return res.status(200).json({
                    status: true,
                    message: "Product delete successfully!",
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
