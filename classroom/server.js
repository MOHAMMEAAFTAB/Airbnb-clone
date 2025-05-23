const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const { nextTick } = require("process");



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



const sessionOptions = {
    secret: "mysupersecretstring",
         resave: false,  
         saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());


app.use((req ,res , next) => {
      res.locals.successMsg = req.flash("success"); 
         res.locals.errorMsg = req.flash("error");
         next();
});



app.get("/register", (req ,res) => {
      let { name = "anonymous"} = req.query;
      req.session.name = name;
      if(name === "anonymous") {
            req.flash("error", "user not register");
      }else {
    req.flash("success", "user rgistered successfully");

      }
      res.redirect("/hello");
});


app.get("/hello", (req , res) => {
  res.render("page.ejs", {name: req.session.name});     
});









// app.get("/reqcount", (req ,res) => {
//     if(req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }   
//     res.send(`you sent request into ${req.session.count} time`);
// });

// app.get("/test", (req ,res) => {
//     res.send("test successful");
// });


app.listen(3000, () => {
      console.log("server is listing to 3000");  
});