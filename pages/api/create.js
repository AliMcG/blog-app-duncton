import dbConnect from "../../lib/dbConnect.js";
import Blogs from "../../models/Blog.js";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb',
    },
  },
}


export default async function handler(req, res) {
  await dbConnect();
  const { title, description, image } = req.body;
  try {
    const newBlog = await Blogs.create({ title, description, image });
    res.status(200).json({message: "Success", body: newBlog.title});
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}
