import mongoose from "mongoose";

/* BlogSchema will correspond to a collection in your MongoDB database. */
const blogsSchema = new mongoose.Schema({
  title: {
    /* The name of this Blog */
    type: String,
    required: [true, "Please provide a title for this Blog."],
    // maxlength: [60, "Name cannot be more than 60 characters"],
  },
  description: {
    /* Blog content */
    type: String,
    required: [true, "Please provide a description for this Blog."],
  },
  image: {
    /* image-Url to blog image upload in base64*/
    type: String,
    required: [true, "Please provide an image for this blog."],
  },
}, { timestamps: true});

export default mongoose.models.Blogs || mongoose.model("Blogs", blogsSchema);
