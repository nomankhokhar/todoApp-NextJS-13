import { asyncError } from "@/middleware/error";
import { checkAuth } from "@/utils/features";
import { errorHandler } from "@/middleware/error";


const handler = asyncError(async (req, res) => {
    if (req.method !== "GET") {
        return errorHandler(res, 400, "Only GET Method not allowed")
    }

    const user = await checkAuth(req);

    if(!user)  return errorHandler(res,401, "Login required");


    res.status(200).json({
        success: true,
        user,
    })

})


export default handler;