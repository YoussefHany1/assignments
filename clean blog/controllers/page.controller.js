function home(req, res) {
    res.render("index.ejs", {
      title: "Home",
      page: "./pages/home.ejs",
      image: "assets/img/home-bg.jpg",
      header: "Clean Blog",
      subHeader: "A Blog Theme by Start Bootstrap",
    });
  }
  function post(req, res) {
    res.render("index.ejs", {
      title: "Post",
      page: "./pages/post.ejs",
      image: "assets/img/post-bg.jpg",
      header: "Man must explore, and this is exploration at its greatest",
      subHeader: "Problems look mighty small from 150 miles up <br> Posted by Start Bootstrap on August 24, 2023",
    });
  }
  function contact(req, res) {
    res.render("index.ejs", {
      title: "Contact",
      page: "./pages/contact.ejs",
      image: "assets/img/contact-bg.jpg",
      header: "Contact Me",
      subHeader: "Have questions? I have answers.",
    });
  }
  function about(req, res) {
    res.render("index.ejs", {
      title: "About",
      page: "./pages/about.ejs",
      image: "assets/img/about-bg.jpg",
      header: "About Me",
      subHeader: "This is what I do.",
    });
  }
module.exports = {
    home,
    post,
    contact,
    about
};
