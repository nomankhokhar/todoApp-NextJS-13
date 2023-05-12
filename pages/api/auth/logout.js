import { asyncError } from "@/middleware/error";
import { cookieSetter } from "@/utils/features";
import { errorHandler } from "@/middleware/error";

const handler = asyncError(async (req, res) => {
    if (req.method !== "GET") {
        return errorHandler(res, 400, "Only GET Method not allowed")
    }


    cookieSetter(res, null, false);

    res.status(200).json({
        success: true,
        message: `logout successful`,
    })

})


export default handler;