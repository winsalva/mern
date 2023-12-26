const express = require("express");
const cors = require("cors");
const app = express();

let corsOptions = {
    origin: ["http://localhost:5173"]
};

app.use(cors(corsOptions));

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

/*
app.get("/", (req, res) => {
    res.json({message: "Welcome to my E-Commerce app"});
});
*/

const PORT = process.env.PORT || 8080;

// user routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

