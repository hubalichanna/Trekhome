const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path =require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const listings =require("./routes/listing.js")
const reviews =require("./routes/review.js")


main().then(()=>{
    console.log("Connected To DB");
}) .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/TrekHome');
};

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method")); 
app.engine('ejs', ejsMate); 
app.use(express.static(path.join(__dirname,"public")));



app.use("/listings",listings);
app.use("/listings/:id/reviews",reviews);

// Root Route
app.get("/",(req,res)=>{
    res.send("Root is working...")
});


//When Path doesnot exist
// After all other routes...
app.use((req, res, next) => {
  res.status(404).send("Page Not Found");
});

// Error handler (must be last)
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Internal Server Error" } = err;
  res.status(statusCode).render("error.ejs",{message});
});

app.listen(8080, ()=>{
    console.log("listening to port 8080...")
});

