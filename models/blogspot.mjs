import mongoose from "mongoose";

const { Schema } = mongoose;

const BlogPostSchema = new Schema({
  title: String,
  body: String,
});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

export { BlogPost };
export default BlogPost;
