const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")));

// Data for the portfolio
const portfolioData = {
  name: "Bernard Pacanza",
  role: "Information Technology Student",
  description: {
    bold: "Hello! 👋 — I'm a developer from the Philippines with a strong interest in full stack and mobile development.",
    normal:
      "I enjoy turning ideas into working products and learning how to make software that's clean, efficient, and easy to maintain.",
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/hyakumachi",
      icon: "fab fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bernardpacanza4884/",
      icon: "fab fa-linkedin",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/pacanza.bernard",
      icon: "fab fa-facebook",
    },
  ],
  projects: [
    {
      date: "April 2025",
      name: "La Salle Davao",
      description:
        'I recreated the DLSU website as "De La Salle Davao" with my own design, using the original as a reference.',
      stack: ["React", "CSS", "Javascript"],
      img: "/images/ftproj1.png",
      source: "https://github.com/hyakumachi/la-salle-davao",
      demo: "https://la-salle-davao.vercel.app",
    },
    {
      date: "May 2025",
      name: "User Management System",
      description:
        "A simple user management system that displays user data with search and filter features, and shows full user details in a modal.",
      stack: ["HTML", "CSS", "Javascript"],
      img: "/images/ftproj2.png",
      source: "https://github.com/hyakumachi/PacanzaUserSystem",
      demo: null,
    },
    {
      date: "April 2025",
      name: "Landing Page",
      description: "A landing page exercise from The Odin Project.",
      stack: ["HTML", "CSS", "Github Pages"],
      img: "/images/ftproj3.png",
      source: "https://github.com/hyakumachi/odin-landing_page",
      demo: "https://hyakumachi.github.io/odin-landing_page/",
    },
    {
      date: "Jan 2025",
      name: "Absent Counter",
      description: "Lets students track their absences per subject.",
      stack: ["React", "Tailwind CSS", "Javascript"],
      img: "/images/proj4.png",
      source: "https://github.com/Kurev/Absent-Counter",
      demo: "https://absentracker.vercel.app/",
    },
  ],
  techStack: [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
  ],
  experience: [
    {
      title: "SAMAHAN Systems Development",
      role: "Frontend Developer",
      period: "August 2025 - Present",
      image: "/images/sysdev.jpg",
    },
    {
      title: "Ateneo de Davao University",
      role: "Information Technology Student",
      period: "July 2023 - Present",
      image: "/images/addu.png",
    },
  ],
};

// Routes
app.get("/", (req, res) => {
  res.render("landing", {
    title: "Home",
    data: portfolioData,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    data: portfolioData,
  });
});

app.get("/projects", (req, res) => {
  res.render("projects", {
    title: "Projects",
    data: portfolioData,
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
    data: portfolioData,
  });
});

// 404 Error handler
app.use((req, res) => {
  res.status(404).render("error", {
    title: "Page Not Found",
    errorCode: 404,
    errorMessage: "The page you are looking for could not be found.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
