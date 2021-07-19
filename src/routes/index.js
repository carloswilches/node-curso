const express = require("express");
const router = express.Router();


router.get("/", (req, res) =>{
    res.render("index.html", )
});

router.get("/about", (req, res) => {
    res.render("about.html")
})

//router.get("/about", (req, res) => {
    //res.render("Acerca de")
//})


//router.get("/about", (req, res) => {
    //res.render("Acerca de")
//})


//router.get("/about", (req, res) => {
    //res.render("Acerca de")
//})

router.get("/user", (req, res) => {
    res.render("user.html")
})


router.get("/directorio", (req, res) => {
    res.render("directorio.html")
})

router.get("/contact", (req, res) => {
    res.render("contact.html")
})

module.exports =router;