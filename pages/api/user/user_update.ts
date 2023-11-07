import { NextApiRequest, NextApiResponse } from "next";
import { connectbd } from "@/lib/dbConnect"
import { User } from "@/models/index"
import { UserModel } from "@/models/UserModel";

export default async function userUpdate(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {

        try {
            await connectbd()

            const body: UserModel = JSON.parse(req.body)
            const { _id, firstName, lastName, email, phone, dob, address, address2, city, state, postcode, profile_avatar } = body;
            const user: any = await User.findOne({ email: email });
            const { userRole, date_at } = user;

            const userUpdate = await User.updateOne({ _id: _id }, {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                dob: dob,
                address: address,
                address2: address2,
                city: city,
                state: state,
                postcode: postcode,
                profile_avatar: profile_avatar,
            });


            // console.log('userUpdate :- ', userUpdate);

            return res.status(200).json({
                status: 'success',
                message: "Your account is update successfully!",
                user: { _id, firstName, lastName, email, phone, address, address2, city, state, postcode, location, userRole, profile_avatar, date_at },
            })


        } catch (err) {
            console.log(err)
            res.status(500).send("error")
        }
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }

}
