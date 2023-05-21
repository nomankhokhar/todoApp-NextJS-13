import { errorHandler } from "@/middleware/error";
import { connectDB, checkAuth } from "@/utils/features";
import { asyncError } from "@/middleware/error";
import { Task } from "@/models/task";


const handler = asyncError(async (req, res) => {


    await connectDB();
    const user = await checkAuth(req);

    if (!user) {
        return errorHandler(res, 401, "Login first");
    }

    const taskId = req.query.id;

    const task = await Task.findById(taskId);

    if (!task) return errorHandler(res, 404, "task not found");

    if (req.method === "PUT") {

        task.isCompleted = !task.isCompleted;

        await task.save();

        res.status(200).json({
            success: true,
            message: "Task Updated Successfully"
        });

    } else if (req.method === "DELETE") {

        await Task.deleteOne();

        res.status(200).json({
            success: true,
            message: "Task Deleted Successfully"
        });

    }
    else {
        return errorHandler(res, 400, "this method is not allowed")
    }



})

export default handler;