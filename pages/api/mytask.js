import { errorHandler } from "@/middleware/error";
import { Task } from "@/models/task";
import { connectDB, checkAuth } from "@/utils/features";
import { asyncError } from "@/middleware/error";


const handler = asyncError(async (req, res) => {
    await connectDB();

    if (req.method !== "GET") {
        return errorHandler(res, 400, "Only GET Method not allowed")
    }

    const user = await checkAuth(req);

    if (!user) {
        return errorHandler(res, 401, "Login first");
    }

    const tasks = await Task.find({ user: user._id });

    res.json({
        success: true,
        tasks,
    })
})

export default handler;