import { errorHandler } from "@/middleware/error";
import { Task } from "@/models/task";
import { connectDB } from "@/utils/features";
import { asyncError } from "@/middleware/error";

const handler = asyncError(async (req, res) => {
    await connectDB();

    if (req.method !== "POST") {

        return errorHandler(res, 400, "Only POST Method not allowed")
    }

    const { title, description } = req.body;

    await Task.create({
        title: title,
        description: description,
        user: "5c0a7922c9d89830f4911426",
    })

    res.json({
        success: true,
        message: "Task created successfully",
    })
})

export default handler;