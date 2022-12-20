import mongoose from "mongoose";

/* BlogSchema will correspond to a collection in your MongoDB database. */
const BlogSchema = new mongoose.Schema({
  title: {
    /* The name of this Blog */
    type: String,
    required: [true, "Please provide a title for this Blog."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  description: {
    /* Blog content */
    type: String,
    required: [true, "Please provide a title for this Blog."],
  },
  image: {
    /* image-Url to blog image upload in base64*/
    type: String,
    required: [true, "Please provide an image for this blog."],
  },
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
