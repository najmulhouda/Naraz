import { NextRequest } from "next/server";
import { baseUrl } from "@/config/appConfig";


const IsAuth = async (request: NextRequest) => {
    const user = request.cookies.get("user");

    //@ts-ignore
    const userInfo = JSON.parse(user?.value);

    if (user == undefined) {
        return false;
    } else {
        //@ts-ignore
        const userProfile = await fetch(`${baseUrl}/api/user/${userInfo?._id}`);
        const userData = await userProfile.json();

        console.log('userData', userData.user.userRole);

        if (userData.status == true) {
            if (userData.user.userRole == 'admin' || userData.user.userRole == 'editor') {
                return true;
            }
            return false;
        } else {
            return false;
        }
    }
}


export { IsAuth };