const express =  require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const path = require("path");
const userRoutes = require('./routes/users');

const app = express();

// connect to database
connectDB();

//middleware
app.use(cors());
app.use(express.json({extended:false}));
app.use(express.static(path.join(__dirname, "models")));

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));
app.use('/api/users', require("./routes/users"));
// app.use('/api/users', userRoutes);

// start server
const PORT = process.env.PORT || 5000 ; 
app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`)
});