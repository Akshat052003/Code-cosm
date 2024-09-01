const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const commentRoute = require('./routes/comments');

// Load environment variables
dotenv.config();

// Connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database is connected successfully!");
  } catch (err) {
    console.error("Database connection error:", err);
  }
};

// Middleware
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
const corsOptions = {
  origin: ['https://illustrious-selkie-e9a696.netlify.app', 'http://localhost:5173'], // Add both the Netlify and localhost URLs
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

// Image upload configuration
const storage=multer.diskStorage({
  destination:(req,file,fn)=>{
      fn(null,"images")
  },
  filename:(req,file,fn)=>{
      fn(null,req.body.img)
      // fn(null,"image1.jpg")
  }
})
const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  res.status(200).json({ imageUrl: `/images/${req.file.filename}`, message: "Image has been uploaded successfully!" });
});

// Start server and connect to the database
app.listen(process.env.PORT, () => {
  connectDB();
  console.log("App is running on port " + process.env.PORT);
});
