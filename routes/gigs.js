const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gigs");
 
//Get gig list


router.get("/", (req, res) => 
    Gig.findAll()
        .then(gigs => {
            res.render("gigs", {
                gigs
        });
    })
        .catch(err => console.log(err)));


 // Add a gig
 router.get("/add", (req, res) => {
     const data = {
         title: "looking for a Java developer",
         technologies: "Mulesoft certification, Javascript, html, css",
         budget: "$6000",
         description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
         contact_email: "user3@live.com"
     }

     let {title, technologies, budget, description, contact_email } = data;

    //Insert into table
    Gig.create({
        title,
        technologies,
        description,
        budget,
        contact_email
    })     

        .then(gig => res.redirect("/gigs"))
        .catch(err => console.log(err));
 })   

module.exports = router;