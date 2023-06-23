<template>
  <section>
    <div class="home" :style="projectsLoaded ? 'display:none' : ''">
      <div class="top">
        <div class="left animate-top-left">
          <div>Mario Fernandez</div>
          <div>Website Developer</div>
        </div>
        <div class="right animate-top-right">Contact</div>
      </div>
      <div class="center">
        <div class="hello-container animate-hello" id="hello">
          <span class="english" id="english">Hello</span>
          <span class="french" id="french">Bonjour</span>
          <span class="spanish" id="spanish">Hola</span>
        </div>
        <div class="scroll-container">
          <div class="text">Scroll</div>
          <div class="icon">
            <i class="fa fa-arrow-down animate-arrow"></i>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="about-container animate-bottom-right">
          <div class="header">ABOUT</div>
          <div class="text">Website developer with a passion for simple and engaging designs</div>
        </div>
      </div>
    </div>
    <div class="projects-hidden" id="projects">
      <div class="line even"></div>
      <div class="desc even">Vue, Laravel, HTML, CSS</div>
      <!-- Evolution of portfolio sites -->
      <div class="project even"><span>WEB PORTFOLIO -- AN INTERACTIVE RESUME</span></div>
      <div class="line odd"></div>
      <div class="desc odd">Vue, Laravel, HTML, CSS, Mapbox API</div>
      <div class="project odd">
        <router-link to="/business-finder-site" target="_blank"
          >BUSINESS FINDER -- FIND BUSINESSES NEAR YOU</router-link
        >
      </div>
      <div class="line even"></div>
      <div class="desc even">Vue, Laravel, HTML, CSS</div>
      <div class="project even">
        <router-link to="/coffee-site" target="_blank"
          >COFFEE SITE -- A VIRTUAL STORE FRONT</router-link
        >
      </div>
      <div class="line odd"></div>
      <div class="desc odd">React, HTML, CSS</div>
      <div class="project odd">
        <a href="https://cookieclickerstartup.netlify.app/" target="_blank"
          >CLICKER GAME -- A CLASSIC</a
        >
      </div>
      <div class="line even"></div>
      <div class="icon">
        <i class="fa fa-arrow-down"></i>
      </div>
    </div>
    <div class="skills-hidden" id="skills">
      <div class="line top"></div>
      <div class="content">
        <div class="left">
          <div>Interests</div>
          <br />
          <ul>
            <li>
              Personal Web Development Projects: Actively engaged in building and maintaining
              personal web projects using HTML, CSS, and JavaScript. Projects include responsive web
              design, interactive interfaces, and integration with RESTful APIs.
            </li>
            <li>
              Continuous Learning: Dedicated to staying up-to-date with emerging web technologies
              and frameworks. Follow designers/developers on social media platforms and have taken
              courses to build my skillset.
            </li>
            <li>
              UX/UI Design: Keen interest in user-centric design principles, wireframing, and
              prototyping. Strong focus on creating intuitive and visually appealing interfaces that
              enhance the user experience.
            </li>
          </ul>
        </div>
        <div class="line vert"></div>
        <div class="center">
          <div>Ice Breakers</div>
          <br />
          <ul>
            <li>
              Traveling: Over the past few years I've had the opportunity to visit 10 countries on 5
              different continents.
            </li>
            <li>
              Self Improvement: Whether it's challenging my physical fitness, trying a new diet,
              adopting a new mindset, or learning something new, I always find myself trying to
              better the person I am to see how far I can go.
            </li>
            <li>
              Gaming: I don't find much time for video games nowadays but when I do I find myself
              gravitating to games like Zelda, Age of Empires, Stardew, and Diablo.
            </li>
          </ul>
        </div>
        <div class="line vert"></div>
        <div class="right">
          <div>Top Tech</div>
          <div class="skills-container">
            <div class="skill-container">
              <div class="label">Vue.js <span>90%</span></div>
              <div id="barBackground">
                <div id="vue" class="bar"></div>
              </div>
            </div>
            <div class="skill-container">
              <div class="label">PHP <span>80%</span></div>
              <div id="barBackground">
                <div id="php" class="bar"></div>
              </div>
            </div>
            <div class="skill-container">
              <div class="label">MySQL <span>75%</span></div>
              <div id="barBackground">
                <div id="mysql" class="bar"></div>
              </div>
            </div>
            <div class="skill-container">
              <div class="label">HTML <span>90%</span></div>
              <div id="barBackground">
                <div id="html" class="bar"></div>
              </div>
            </div>
            <div class="skill-container">
              <div class="label">CSS/SCSS <span>85%</span></div>
              <div id="barBackground">
                <div id="cssScss" class="bar"></div>
              </div>
            </div>
          </div>
          <br />
          <div></div>
        </div>
      </div>
      <div class="line bottom"></div>
    </div>
    <div class="contact-hidden" id="contact">
      <div class="content-container">
        <div class="line even"></div>
        <div class="text">Questions or simply want to chat, feel free to reach out</div>
        <div class="line odd"></div>
        <div class="scrolling-text">SAY HI - LET'S TALK - LET'S COLLABORATE</div>
        <div class="line even"></div>
        <div class="socials">
          <div class="left">
            <a
              style="color: inherit"
              href="https://github.com/JorgeMarioFernandez91"
              target="_blank"
              >GitHub</a
            >
          </div>
          <div class="center">jmferna91@gmail.com</div>
          <div class="right">
            <a
              style="color: inherit"
              href="https://www.linkedin.com/in/jorge-mario-fernandez-67578b106/"
              target="_blank"
              >LinkedIn</a
            >
          </div>
        </div>
        <div class="line odd"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  name: "HomeV3",

  components: { MglMap },
  data() {
    return {
      homeLoaded: false,
      projectsLoaded: false,
      skillsLoaded: false,
      contactLoaded: false,
      debugProjects: false,
      debugSkills: false,
      debugContact: false,
      lat: 0,
      long: 0,
    };
  },

  computed: {},

  created() {},

  mounted() {
    // const screenHeight = parseInt(document.body.scrollHeight);
    // if (this.debugProjects && !this.debugSkills) {
    //   var projects = document.getElementById("projects");
    //   projects.style.height = screenHeight + "px";
    //   projects.style.padding = "30px";
    //   projects.style.top = 0;

    //   this.loadProjects();
    // } else if (this.debugProjects && this.debugSkills && !this.debugContact) {
    //   var projects = document.getElementById("projects");
    //   projects.style.height = screenHeight + "px";
    //   projects.style.padding = "30px";
    //   projects.style.top = 0;

    //   this.projectsLoaded ? "" : this.loadProjects();

    //   window.addEventListener("wheel", (event) => {
    //     if (!this.projectsLoaded) {
    //       this.handleFirstScroll(event);
    //     } else if (this.projectsLoaded && !this.skillsLoaded) {
    //       console.log(1);
    //       this.handleSecondScroll(event);
    //     } else if (this.projectsLoaded && this.skillsLoaded && !this.contactLoaded) {
    //       console.log(2);
    //       this.handleThirdScroll(event);
    //     }
    //   });
    // } else if (this.debugProjects && this.debugSkills && this.debugSkills) {
    //   this.loadProjects();
    //   this.loadSkills();
    //   this.loadContact();
    // } else {
    setTimeout(() => {
      this.homeLoaded = true;
    }, 1500);
    window.addEventListener("wheel", (event) => {
      if (!this.projectsLoaded) {
        this.handleFirstScroll(event);
      } else if (this.projectsLoaded && !this.skillsLoaded) {
        this.handleSecondScroll(event);
      } else if (this.projectsLoaded && !this.contactLoaded) {
        this.handleThirdScroll(event);
      } else if (this.contactLoaded) {
        this.handleFourthScroll(event);
      }
    });
  },
  methods: {
    handleFirstScroll(event) {
      if (!this.homeLoaded) {
        setTimeout(() => {
          this.homeLoaded = true;
        }, 3000);
      } else {
        const screenHeight = parseInt(document.body.scrollHeight);
        var projects = document.getElementById("projects");
        var height = parseInt(window.getComputedStyle(projects).height);
        var padding = parseInt(window.getComputedStyle(projects).padding);
        var top = parseInt(window.getComputedStyle(projects).top);

        projects.classList.add("projects");
        projects.classList.remove("projects-hidden");

        // to prevent element from moving when nothing is on screen
        if (padding <= 2 && height < 50) {
          projects.style.top = 45 + "%";
          projects.style.height = 0;
        } else if (height >= 50) {
          // manage top position of projects section
          if (parseInt(window.getComputedStyle(projects).top) > 0) {
            if (event.wheelDelta > 0) {
              projects.style.top = top + 25 + "px";
            } else {
              projects.style.top = top - 25 + "px";
            }
          }
        }

        // manage height of projects section
        if (height < screenHeight - 1) {
          if (event.wheelDelta > 0) {
            projects.style.height = height - 50 + "px";
          } else {
            projects.style.height = height + 50 + "px";
          }
        }

        // manage padding of projects section
        if (padding < 30) {
          if (event.wheelDelta < 0) {
            projects.style.padding = padding + 1 + "px";
          } else {
            projects.style.padding = padding - 1 + "px";
          }
        } else if (padding === 30 && height < screenHeight) {
          if (event.wheelDelta > 0) {
            projects.style.padding = padding - 1 + "px";
          }
        }

        if (height >= screenHeight) {
          projects.style.height = "100vh";
          projects.style.top = "0px";
          projects.style.backgroundColor = "#8C8C8C";
          this.loadProjects();
        }
      }
    },

    handleSecondScroll(event) {
      const screenWidth = parseInt(document.body.scrollWidth);
      var skills = document.getElementById("skills");
      var width = parseInt(window.getComputedStyle(skills).width);
      var padding = parseInt(window.getComputedStyle(skills).padding);
      var left = parseInt(window.getComputedStyle(skills).left);

      skills.classList.add("skills");
      skills.classList.remove("skills-hidden");

      if (padding <= 2 && width < 50) {
        skills.style.left = 50 + "%";
        skills.style.width = 0;
      } else {
        // manage left position of skills section
        if (parseInt(window.getComputedStyle(skills).left) > 0) {
          if (event.wheelDelta > 0) {
            skills.style.left = left + 25 + "px";
          } else {
            skills.style.left = left - 25 + "px";
          }
        }
      }

      // manage height of skills section
      if (width < screenWidth - 1) {
        if (event.wheelDelta > 0) {
          skills.style.width = width - 50 + "px";
        } else {
          skills.style.width = width + 50 + "px";
        }
      } else {
        if (event.wheelDelta < 0) {
          skills.style.width = width + 50 + "px";
        }
      }

      // manage padding of skills section
      if (padding < 30) {
        if (event.wheelDelta < 0) {
          skills.style.padding = padding + 1 + "px";
        } else {
          skills.style.padding = padding - 1 + "px";
        }
      } else if (padding === 30 && width < screenWidth) {
        if (event.wheelDelta > 0) {
          skills.style.padding = padding - 1 + "px";
        }
      }

      if (width >= screenWidth) {
        skills.style.width = "100vw";
        skills.style.left = "0px";
        skills.style.backgroundColor = "black";

        this.loadSkills();
      }
    },

    handleThirdScroll(event) {
      const screenHeight = parseInt(document.body.scrollHeight);
      var contact = document.getElementById("contact");
      var height = parseInt(window.getComputedStyle(contact).height);
      var padding = parseInt(window.getComputedStyle(contact).padding);
      var top = parseInt(window.getComputedStyle(contact).top);

      contact.classList.add("contact");
      contact.classList.remove("contact-hidden");

      // manage height of contact section
      if (height < screenHeight - 1) {
        if (event.wheelDelta > 0) {
          contact.style.height = height - 20 + "px";
        } else {
          contact.style.height = height + 20 + "px";
        }
      } else {
        if (event.wheelDelta < 0) {
          contact.style.height = height + 20 + "px";
        }
      }

      // manage padding of contact section
      if (padding < 30) {
        if (event.wheelDelta < 0) {
          contact.style.padding = padding + 1 + "px";
        } else {
          contact.style.padding = padding - 1 + "px";
        }
      } else if (padding === 30 && height < screenHeight) {
        if (event.wheelDelta > 0) {
          contact.style.padding = padding - 1 + "px";
        }
      }

      // to prevent element from moving when nothing is on screen
      if (height === 0) {
        contact.style.top = 50 + "%";
      } else {
        // manage top position of contact section
        if (parseInt(window.getComputedStyle(contact).top) > 0) {
          if (event.wheelDelta > 0) {
            contact.style.top = top + 10 + "px";
          } else {
            contact.style.top = top - 10 + "px";
          }
        } else {
          if (event.wheelDelta < 0) {
            contact.style.top = top - 10 + "px";
          }
        }
      }

      if (height >= screenHeight) {
        contact.style.height = "100vh";
        contact.style.top = "0px";
        projects.style.backgroundColor = "#8C8C8C";
        this.loadContact();
      }
    },

    handleFourthScroll(event) {
      if (event.wheelDelta < 0) {
        this.unloadContact();
        this.unloadSkills();
        this.unloadProjects();
      }
    },

    loadProjects() {
      var projects = document.getElementById("projects");

      // add class to load in project elements
      projects.classList.add("animate-projects");

      setTimeout(() => {
        this.projectsLoaded = true;
      }, 16000);
    },

    unloadProjects() {
      this.projectsLoaded = false;

      var projects = document.getElementById("projects");

      projects.style.padding = "";
      projects.style.height = "";
      projects.style.top = "";
      projects.style.backgroundColor = "";

      projects.classList.remove("animate-projects");
      projects.classList.add("projects-hidden");
      projects.classList.remove("projects");
    },

    loadSkills() {
      var skills = document.getElementById("skills");
      skills.classList.add("animate-skills");

      setTimeout(() => {
        if (!this.isVueBarFilled) {
          this.move("vue", 90);
          this.isVueBarFilled = true;
        }
        if (!this.isPhpBarFilled) {
          this.move("php", 80);
          this.isPhpBarFilled = true;
        }
        if (!this.isMySqlBarFilled) {
          this.move("mysql", 75);
          this.isMySqlBarFilled = true;
        }
        if (!this.isHtmlBarFilled) {
          this.move("html", 90);
          this.isHtmlBarFilled = true;
        }
        if (!this.iscssScssBarFilled) {
          this.move("cssScss", 85);
          this.iscssScssBarFilled = true;
        }
        this.skillsLoaded = true;
      }, 7000);
    },

    unloadSkills() {
      this.skillsLoaded = false;
      var skills = document.getElementById("skills");

      skills.style.padding = "";
      skills.style.width = "";
      skills.style.left = "";
      skills.style.backgroundColor = "";

      skills.classList.remove("animate-skills");
      skills.classList.remove("skills");
      skills.classList.add("skills-hidden");
    },

    loadContact() {
      var contact = document.getElementById("contact");
      contact.classList.add("contact");
      contact.classList.add("animate-contact");

      setTimeout(() => {
        this.contactLoaded = true;
      }, 5000);
    },

    unloadContact() {
      var contact = document.getElementById("contact");
      contact.classList.remove("animate-contact");
      contact.classList.add("contact-fade-out");
      this.homeLoaded = false;

      setTimeout(() => {
        this.contactLoaded = false;

        contact.style.opacity = "";
        contact.style.height = "";
        contact.style.top = "";
        contact.style.backgroundColor = "";

        contact.classList.remove("contact");
        contact.classList.remove("animate-contact");
        contact.classList.remove("contact-fade-out");
        contact.classList.add("contact-hidden");
      }, 3000);
    },

    move(barId, percentage) {
      let i = 0;
      if (i == 0) {
        i = 1;
        let elem = document.getElementById(barId);
        let width = 1;
        let id = setInterval(frame, 20);
        function frame() {
          if (width >= percentage) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "resources/sass/portfolio_v3/home.scss";
</style>