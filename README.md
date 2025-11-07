# introMongoose (ES Modules)

This project demonstrates connecting to MongoDB using Mongoose with native ES Modules and environment-based configuration.

## Quick start

1. **Create a `.env` file** in the project root with your MongoDB connection string:

   ```env
   # MongoDB connection string
   MONGODB_URI=mongodb://127.0.0.1:27017/my_database
   ```

   For MongoDB Atlas or other remote instances, replace with your connection string:

   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/my_database
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run scripts**:

   ```bash
   # Connect and disconnect (demo)
   npm start

   # Create a blog post
   npm run create

   # Read all blog posts
   npm run read

   # Search posts by body content (regex: /message/)
   npm run read-body

   # Search posts by body content (regex: /mon/)
   npm run read-reg

   # Search posts by body content (regex: /mon/i - case insensitive)
   npm run read-exp

   # Query posts with body length <= 20 characters
   npm run query

   # Find a post by ID
   npm run read-id
   ```

## Project structure

- `.env` — MongoDB connection string (not committed to git)
- `db.mjs` — Shared connection helpers using ES modules and dotenv
- `models/blogspot.mjs` — BlogPost Mongoose schema and model
- `index.mjs` — Simple connection demo using top-level await
- `create.mjs` — Creates a sample blog post
- `readAll.mjs` — Retrieves and displays all blog posts
- `readBody.mjs` — Searches for posts matching a body regex pattern (/message/)
- `readREg.mjs` — Searches for posts matching a body regex pattern (/mon/)
- `readExp_v2.mjs` — Searches for posts with case-insensitive regex (/mon/i)
- `query.mjs` — Query builder example: finds posts with body length <= 20
- `readById.mjs` — Finds a specific post by MongoDB ObjectId
- `package.json` — Configured with `"type": "module"` for ES modules

## Query builder example

The `query.mjs` script demonstrates Mongoose's **query builder pattern**, which allows you to construct queries step-by-step before executing them:

1. **Create a query**: `BlogPost.find({})` — finds all posts
2. **Select fields**: `.select("body")` — returns only the `body` field
3. **Add conditions**: `.$where("this.body.length <= 20")` — filters posts where body length is 20 characters or less
4. **Execute**: `.exec()` — runs the query and returns results

This pattern is useful when you need to build dynamic queries based on conditions or when you want to separate query construction from execution.

## Environment variables

All scripts load environment variables from `.env` via the `dotenv` package:

- `MONGODB_URI` — MongoDB connection string (defaults to `mongodb://127.0.0.1:27017/my_database` if not set)

**Note:** The `.env` file is gitignored to protect sensitive credentials. Copy `.env` and customize it for your environment.
