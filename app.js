const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path =require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy=require("passport-local");
const User =require("./models/user.js");

const listingRouter =require("./routes/listing.js");
const reviewRouter =require("./routes/review.js");
const userRouter = require("./routes/user.js");


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


const sessionOptions={
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie:{
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, //Time in mili seconds
    httpOnly: true,
  }
};

// Root Route
app.get("/",(req,res)=>{
    res.send("Root is working...")
});


app.use(session(sessionOptions));
app.use(flash());

//implementing passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
  res.locals.success=req.flash("success"); 
  res.locals.error=req.flash("error");
  res.locals.currUser=req.user;
  next();
})


app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);



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

