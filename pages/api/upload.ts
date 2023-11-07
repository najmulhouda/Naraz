import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import * as fs from 'fs';
import FormData from "form-data";
import formidable from "formidable";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function imgUpload(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {

        let imageName;

        const readFile = (req: NextApiRequest, saveLocally?: boolean): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
            const options: formidable.Options = {};
            if (saveLocally) {
                options.uploadDir = path.join(process.cwd(), "/public/images");
                options.filename = (name, ext, path, form) => {
                    imageName = Date.now().toString() + "_" + path.originalFilename
                    return imageName;
                };
            }

            options.maxFileSize = 4000 * 1024 * 1024;
            const form = formidable(options);
            return new Promise((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                    if (err) reject(err);
                    resolve({ fields, files });
                });
            });
        };

        try {
            await readFile(req, true);
            res.status(200).json({
                status: true,
                message: "Image Uploaded",
                image: imageName,
            })

        } catch (err) {
            console.log(err);
            res.status(500).send("Wrong information");
        }
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}


