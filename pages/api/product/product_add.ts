import { NextApiRequest, NextApiResponse } from "next";
import { connectbd } from "@/lib/dbConnect"
import { Product, ProductModel } from "@/models/index"

export default async function contactUpdate(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {

        try {
            await connectbd()

            const body: ProductModel = JSON.parse(req.body)
            const { user_id, title, images, category, description, price } = body;

            let slug = title;
            slug = slug.toLowerCase().replace(/[^\w-]+/g, '-');

            let results = [];

            const products = await Product.find({});
            for (var i = 0; i < products.length; i++) {
                if (products[i].slug.toLowerCase().includes(slug.toLowerCase()) && slug) {
                    results.push(products[i]);
                }
            }

            let newSlug;
            if (results.length == 0) {
                newSlug = slug;
            } else {
                newSlug = `${slug}-${results.length}`;
            }

            const newPro = await new Product({
                user_id: user_id,
                title: title,
                slug: newSlug,
                images: images,
                category: category,
                description: description,
                price: price,
            }).save()

            return res.status(200).json({
                status: true,
                message: "Product add successfully!",
            })
        } catch (err) {
            console.log(err)
            res.status(500).send("error")
        }
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }

}
