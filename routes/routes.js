const express = require('express')
const control=require("../controller/controller")
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.render("index-2");
})

router.get('/index-2.html', (req, res) => {
  res.render("index-2");
})


router.get('/about-2.html', (req, res) => {
  res.render("about-2.ejs");
})


router.get('/about-2.html', (req, res) => {
  res.render("about-2.ejs");
})


router.get('/services.html', (req, res) => {
  res.render("services.ejs");
})



router.get('/service-02.html', (req, res) => {
  res.render("service-02.ejs");
})

router.get('/service-03.html', (req, res) => {
  res.render("service-03.ejs");
})

router.get('/service-04.html', (req, res) => {
  res.render("service-04.ejs");
})


router.get('/service-05.html', (req, res) => {
  res.render("service-05.ejs");
})

router.get('/service-06.html', (req, res) => {
  res.render("service-06.ejs");
})

router.get('/service-07.html', (req, res) => {
  res.render("service-07.ejs");
})


router.get('/service-01.html', (req, res) => {
  res.render("service-02.ejs");
})

router.get('/contact.html', (req, res) => {
  res.render("contact.ejs");
})

router.get('/contactUs.html', (req, res) => {
  res.render("contact.ejs");
})


//Arabic Routes


router.get('/index-2arabic.html', (req, res) => {
  res.render("index-2arabic");
})


router.get('/contactarabic.html', (req, res) => {
  res.render("contactarabic.ejs");
})

router.get('/contactarabic.ejs', (req, res) => {
  res.render("contactarabic.ejs");
})


router.get('/about-2arabic.html', (req, res) => {
  res.render("about-2Arabic.ejs");
})

router.get('/about-2arabic.ejs', (req, res) => {
  res.render("about-2Arabic.ejs");
})



router.get('/servicesArabic.html', (req, res) => {
  res.render("servicesArabic.ejs");
})


router.get('/servicesArabic.ejs', (req, res) => {
  res.render("servicesArabic.ejs");
})

router.get('/service-01Arabic.html', (req, res) => {
  res.render("service-01Arabic.ejs");
})


router.get('/service-02Arabic.html', (req, res) => {
  res.render("service-02Arabic.ejs");
})


router.get('/service-03Arabic.html', (req, res) => {
  res.render("service-03Arabic.ejs");
})

router.get('/service-04Arabic.html', (req, res) => {
  res.render("services-04Arabic.ejs");
})


router.get('/service-05Arabic.html', (req, res) => {
  res.render("service-05Arabic.ejs");
})

router.get('/service-06Arabic.html', (req, res) => {
  res.render("service-06Arabic.ejs");
})

router.get('/service-07Arabic.html', (req, res) => {
  res.render("service-07Arabic.ejs");
})

router.get('/service-01Arabic.ejs', (req, res) => {
  res.render("service-01Arabic.ejs");
})


router.get('/service-02Arabic.ejs', (req, res) => {
  res.render("service-02Arabic.ejs");
})


router.get('/service-03Arabic.ejs', (req, res) => {
  res.render("service-03Arabic.ejs");
})

router.get('/service-04Arabic.ejs', (req, res) => {
  res.render("services-04Arabic.ejs");
})


router.get('/service-05Arabic.ejs', (req, res) => {
  res.render("service-05Arabic.ejs");
})

router.get('/service-06Arabic.ejs', (req, res) => {
  res.render("service-06Arabic.ejs");
})

router.get('/service-07Arabic.ejs', (req, res) => {
  res.render("service-07Arabic.ejs");
})




router.post('/sendemail',control.sendMail);

router.post('/sendemailarabic',control.sendMailArabic);


module.exports=router