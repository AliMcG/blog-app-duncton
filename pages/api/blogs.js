import dbConnect from "../../lib/dbConnect.js";
import Blogs from "../../models/Blog.js";

export default async function handler(req, res) {
  await dbConnect();

  const blogs = await Blogs.find(); /* find all the data in our database */
  res.status(200).json({ success: true, data: blogs });
  // res.json({message: "hello world"})
}