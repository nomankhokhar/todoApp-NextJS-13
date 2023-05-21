import { errorHandler } from "@/middleware/error";
import { Task } from "@/models/task";
import { checkAuth, connectDB } from "@/utils/features";
import { asyncError } from "@/middleware/error";

const handler = asyncError(async (req, res) => {
    await connectDB();

    if (req.method !== "POST") {

        return errorHandler(res, 400, "Only POST Method not allowed");
    }

    const { title, description } = req.body;

    if(!title || !description){
        return errorHandler(res, 400, "Title and Description are required");
    }

    const user = await checkAuth(req);

    if (!user)  return errorHandler(res,401, "login required");

    await Task.create({
        title: title,
        description: description,
        user: user._id,
    })

    res.json({
        success: true,
        message: "Task created successfully",
    })
})

export default handler;