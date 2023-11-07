import { NextApiRequest, NextApiResponse } from "next";
import { connectbd } from "@/lib/dbConnect"
import { Category, CategoryModel } from "@/models/index"

export default async function contactUpdate(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {

        try {
            await connectbd()

            const body: CategoryModel = JSON.parse(req.body)
            const { _id, title, logo, parent_id, parent_title, parent_slug } = body;

            let slug = title;
            slug = slug.toLowerCase().replace(/[^\w-]+/g, '-');

            let results = [];

            const categories = await Category.find({});
            for (var i = 0; i < categories.length; i++) {
                if (categories[i].slug.toLowerCase().includes(slug.toLowerCase()) && slug) {
                    results.push(categories[i]);
                }
            }

            let newSlug;
            if (results.length == 0) {
                newSlug = slug;
            } else {
                newSlug = `${slug}-${results.length}`;
            }

            if (_id == null) {
                const newInfo = await new Category({
                    title: title,
                    slug: newSlug,
                    logo: logo,
                    parent_id: parent_id,
                    parent_title: parent_title,
                    parent_slug: parent_slug,
                }).save()

                return res.status(200).json({
                    status: 'success',
                    message: "Category add successfully!",
                })

            } else {
                const contactUpdate = await Category.updateOne({ _id: _id }, {
                    title: title,
                    slug: newSlug,
                    logo: logo,
                    parent_id: parent_id,
                    parent_title: parent_title,
                    parent_slug: parent_slug,
                });

                return res.status(200).json({
                    status: 'success',
                    message: "Category update successfully!",
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
