import { connectDB } from "@/utils/features";

const handler  = async (req, res) => {
    await connectDB();
    
    res.send({
        success : true,
    })
}

export default handler;