# Introduction to Mongoose (ES Modules)

## 🎯 Learning Objectives

This repository is a **hands-on tutorial** designed to teach you the fundamentals of Mongoose, the popular MongoDB object modeling library for Node.js. Through practical examples, you'll learn how to:

- 📦 **Connect** to MongoDB databases
- 📝 **Create** documents (INSERT operations)
- 🔍 **Read** documents with various query methods (SELECT operations)
- 🎨 **Use schemas** to structure your data
- 🔧 **Work with ES Modules** in a modern Node.js environment

Each script in this project demonstrates a specific Mongoose command or concept, making it easy to learn step-by-step.

## 🚀 Quick Start

### 1. Set up your MongoDB connection

Create a `.env` file in the project root with your MongoDB connection string:

```env
# Local MongoDB connection
MONGODB_URI=mongodb://127.0.0.1:27017/intro
```

Or for MongoDB Atlas (cloud database):

```env
# MongoDB Atlas connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/intro
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the examples

Try each script to learn different Mongoose operations:

```bash
# 📌 Basic connection demo
npm start

# ✍️ Create a blog post (INSERT)
npm run create

# 📚 Read all blog posts (FIND ALL)
npm run read

# 🔎 Search by body content with regex (/message/)
npm run read-body

# 🔎 Search with another regex pattern (/mon/)
npm run read-reg

# 🔎 Case-insensitive search (/mon/i)
npm run read-exp

# 🔍 Query with custom conditions (body length <= 20)
npm run query

# 🎯 Find a specific post by ID
npm run read-id
```

## 📚 What You'll Learn

### Basic Operations

| Script         | Mongoose Command                      | What It Teaches                                 |
| -------------- | ------------------------------------- | ----------------------------------------------- |
| `index.mjs`    | `mongoose.connect()` / `disconnect()` | How to establish and close database connections |
| `create.mjs`   | `Model.create()`                      | How to insert new documents into MongoDB        |
| `readAll.mjs`  | `Model.find()`                        | How to retrieve all documents from a collection |
| `readById.mjs` | `Model.findById()`                    | How to find a specific document by its ObjectId |

### Advanced Queries

| Script           | Technique                       | What It Teaches                                    |
| ---------------- | ------------------------------- | -------------------------------------------------- |
| `readBody.mjs`   | Regex matching `/message/`      | How to search text fields with regular expressions |
| `readReg.mjs`    | Regex matching `/mon/`          | More regex pattern examples                        |
| `readExp_v2.mjs` | Case-insensitive regex `/mon/i` | Using regex flags for flexible searches            |
| `query.mjs`      | Query builder + `$where`        | How to build complex queries with conditions       | 


## 📁 Project Structure |

Understanding the codebase:

- `.env` — Your MongoDB connection string (create this file, not in git)
- `db.mjs` — **Reusable connection helpers** (learn how to modularize database connections)
- `models/blogspot.mjs` — **Mongoose schema & model** (learn data structure definition)
- `index.mjs` — **Connection demo** using top-level await
- `create.mjs` — **CREATE operation** - Insert a new blog post
- `readAll.mjs` — **READ operation** - Retrieve all posts
- `readBody.mjs` — **SEARCH operation** - Find posts with regex (/message/)
- `readReg.mjs` — **SEARCH operation** - Find posts with regex (/mon/)
- `readExp_v2.mjs` — **SEARCH operation** - Case-insensitive regex (/mon/i)
- `query.mjs` — **QUERY BUILDER** - Complex queries with conditions
- `readById.mjs` — **FIND BY ID** - Retrieve a specific document
- `package.json` — Configured with `"type": "module"` for modern ES modules

## 🔧 Understanding Query Builders

The `query.mjs` script is a great example of Mongoose's **query builder pattern**:

```javascript
// Step-by-step query construction
BlogPost.find({}) // 1️⃣ Start: find all posts
  .select("body") // 2️⃣ Select only the 'body' field
  .$where("this.body.length <= 20") // 3️⃣ Filter: body length <= 20 chars
  .exec(); // 4️⃣ Execute the query
```

**Why is this useful?**

- ✅ Build queries dynamically based on conditions
- ✅ Chain multiple filters together
- ✅ Separate query construction from execution
- ✅ More readable and maintainable code

## 🔐 Environment Variables

This project uses environment variables for secure configuration:

- `MONGODB_URI` — Your MongoDB connection string (defaults to `mongodb://127.0.0.1:27017/my_database`)

**🔒 Security Note:** The `.env` file is gitignored to protect your credentials. Never commit sensitive connection strings to version control!

## 💡 Learning Path

**Recommended order for beginners:**

1. Start with `index.mjs` to understand basic connection/disconnection
2. Run `create.mjs` to learn how to insert data
3. Try `readAll.mjs` to see how to retrieve all documents
4. Explore the search scripts (`readBody.mjs`, `readReg.mjs`, `readExp_v2.mjs`) to learn regex patterns
5. Study `query.mjs` to understand query builders
6. Use `readById.mjs` to learn targeted document retrieval

## 🎓 Next Steps

After mastering these basics, you can explore:

- **UPDATE operations** - Modifying existing documents
- **DELETE operations** - Removing documents
- **Relationships** - Linking documents with references or embedding
- **Validation** - Enforcing data rules in schemas
- **Middleware** - Pre/post hooks for operations
- **Aggregation** - Complex data analysis pipelines

---

**Happy Learning! 🚀** Start experimenting with the scripts and observe how Mongoose interacts with MongoDB.
