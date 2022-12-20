// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../lib/dbConnect.js";
import Blog from "../../models/Blog.js";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const blogs = await Blog.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: blogs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const blog = await Blog.create(
          req.body
        ); /* create a new blog in the database */
        res.status(201).json({ success: true, data: blog });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
