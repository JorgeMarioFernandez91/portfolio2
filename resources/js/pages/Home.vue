<template>
  <div class="main">
    <div class="side-nav">
      <div class="initials">MF</div>
      <div class="button-container">
        <div class="button"><i class="fas fa-house-user"></i> Home</div>
        <div class="button"><i class="far fa-address-card"></i> About</div>
        <div class="button"><i class="fas fa-laptop-code"></i> Skills</div>
        <div class="button"><i class="fas fa-briefcase"></i> Work</div>
        <div class="button"><i class="fas fa-envelope-open"></i> Contact</div>
      </div>
    </div>
    <div class="content">
      <div class="home">
        <div class="left">
          <p class="style">Hi, I'm</p>
          <h1>Mario Fernandez</h1>
          <p class="style">Web Developer</p>
          <p>
            A Full-Stack Web Developer passionate about creating interactive
            applications that solve real world problems
          </p>
          <div class="btn-container">
            <div class="resume-btn">Download CV</div>
            <div class="contact-btn">Contact Me</div>
          </div>
        </div>
        <div class="right"></div>
      </div>
      <div
        :class="isScrollOver65 ? 'fade-in' : 'invisible'"
        class="pop-out-container"
      >
        <div class="pop-out">
          <div class="left">Several Years Experience</div>
          <div class="center">Multiple Clients Satisified</div>
          <div class="right">Constant Support</div>
        </div>
      </div>
      <div class="about background-img">
        <div class="faded-overlay">
          <div class="left">photo</div>
          <div class="right">
            <h3 class="header">About Me</h3>
            <div class="description">
              I'm a Full-Stack Developer with close to 2 years of professional
              development experience. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </div>
            <div class="info-container">
              <div class="name">
                <div class="left">Name:</div>
                <div class="right">Mario Fernandez</div>
              </div>
              <div class="phone"></div>
              <div class="email">
                <div class="left">Email:</div>
                <div class="right">jmferna91@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="skills">
        <h3 class="skills-header">My Expertise Areas</h3>
        <div class="skills-container">
          <div class="left">
            <div class="skill-container">
              <div class="header">Vue.js <span>90%</span></div>
              <div id="barBackground">
                <div id="vue" class="bar"></div>
              </div>
            </div>
            <div class="skill-container">
              <div class="header">PHP <span>80%</span></div>
              <div id="barBackground">
                <div id="php" class="bar"></div>
              </div>
            </div>
            <div class="skill-container">
              <div class="header">MySQL <span>80%</span></div>
              <div id="barBackground">
                <div id="mysql" class="bar"></div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="skill-container">
              <div class="header">HTML <span>90%</span></div>
              <div id="barBackground">
                <div id="html" class="bar"></div>
              </div>
            </div>
            <div class="skill-container">
              <div class="header">CSS/SCSS <span>85%</span></div>
              <div id="barBackground">
                <div id="cssScss" class="bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="education-work background-img">
        <div class="faded-overlay">
          <h3 class="education-header">My Awesome Journey</h3>
          <div class="education-container">
            <div class="education">
              <div class="header">Education</div>
              <div class="content-container">
                <div class="left">
                  <i class="fa fa-graduation-cap"></i>
                </div>
                <div class="right">Honors in Computer Science</div>
              </div>
              <div class="content-container">
                <div class="left">
                  <i class="fa fa-graduation-cap"></i>
                </div>
                <div class="right">Honors in Health Sciences</div>
              </div>
              <div class="content-container">
                <div class="left">
                  <i class="fa fa-graduation-cap"></i>
                </div>
                <div class="right">Secondary School Certificate</div>
              </div>
            </div>
            <div class="experience">
              <div class="header">Experiences</div>
              <div class="content-container">
                <div class="left">
                  <i class="fa fa-briefcase"></i>
                </div>
                <div class="right">RentSync</div>
              </div>
              <div class="content-container">
                <div class="left">
                  <i class="fa fa-briefcase"></i>
                </div>
                <div class="right">Freelance Developer</div>
              </div>
              <div class="content-container">
                <div class="left">
                  <i class="fa fa-briefcase"></i>
                </div>
                <div class="right">
                  University Researcher
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="offer">
        <h3 class="skills-header">What I Offer</h3>
        <div class="top">
          <div class="offer-container">
            <i class="fa fa-code"></i>
            <div class="offer-box">
              <div class="header">Web Design</div>
              <div class="text">
                Modern web layouts to best showcase your products
              </div>
            </div>
          </div>
          <div class="offer-container">
            <i class="fa fa-laptop-code"></i>
            <div class="offer-box">
              <div class="header">Full Web Development</div>
              <div class="text">
                Implement all aspects of modern and responsive websites
              </div>
            </div>
          </div>
          <div class="offer-container">
            <i class="fa fa-pen-fancy"></i>
            <div class="offer-box">
              <div class="header">UI/UX Updates</div>
              <div class="text">Breath new life into existing websites</div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="offer-container">
            <i class="fa fa-eye"></i>
            <div class="offer-box">
              <div class="header">SEO</div>
              <div class="text">
                Ensure website is able to rate well in modern search engines
              </div>
            </div>
          </div>
          <div class="offer-container">
            <i class="fa fa-headset"></i>
            <div class="offer-box">
              <div class="header">Flexible Support</div>
              <div class="text">Support schedule to fit all business types</div>
            </div>
          </div>
          <div class="offer-container">
            <i class="fa fa-comments-dollar"></i>
            <div class="offer-box">
              <div class="header">Flixible Plans</div>
              <div class="text">
                Plans that are catered to everyones needs and budgets
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="recent-works background-img">
        <div class="faded-overlay">
          <h3 class="header">Recent Works</h3>
          <div class="works-container">
            <div class="top">
              <div class="work"></div>
              <div class="work"></div>
              <div class="work"></div>
            </div>
            <div class="bottom">
              <div class="work"></div>
              <div class="work"></div>
              <div class="work"></div>
            </div>
          </div>
        </div>
        <div class="contact">
          <h3 class="heading">Get in Touch</h3>
          <div class="contact-container">
            <div class="left">
              <i class="fa fa-envelope"></i>
              <div class="link">jmferna91@gmail.com</div>
              Email Me
            </div>
            <div class="right">
              <i class="fa fa-calendar"></i>
              <div class="link">A Link</div>
              Schedule a Meeting
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { BFormCheckboxGroup, BFormCheckbox } from "bootstrap-vue";
export default {
  name: "Home",

  // components: { BFormCheckboxGroup, BFormCheckbox },
  data() {
    return {
      checked: false,
      titles: {
        fullStack: "Full Stack Developer",
        web: "Web Developer",
        passion: "Loves to Travel",
      },
      counter: 1,
      currentTitle: "Full Stack Developer",
      isVueBarFilled: false,
      isPhpBarFilled: false,
      isMySqlBarFilled: false,
      isHtmlBarFilled: false,
      iscssScssBarFilled: false,
      resetProgressBars: false,
      canReset: true,
    };
  },

  mounted() {
    // Setup the event listener and execute it once in case we are already scrolled
    window.addEventListener("scroll", this.scrollHandler);
    this.scrollHandler();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollHandler);
  },
  methods: {
    scrollHandler(e) {
      if (
        this.canReset &&
        (window.pageYOffset < 250 || window.pageYOffset > 1800)
      ) {
        this.isVueBarFilled = false;
        this.isPhpBarFilled = false;
        this.isMySqlBarFilled = false;
        this.isHtmlBarFilled = false;
        this.iscssScssBarFilled = false;
        this.canReset = false;
      }

      if (window.pageYOffset > 570 && window.pageYOffset < 1700) {
        if (!this.isVueBarFilled) {
          this.move("vue", 90);
          this.isVueBarFilled = true;
        }
        if (!this.isPhpBarFilled) {
          this.move("php", 80);
          this.isPhpBarFilled = true;
        }
        if (!this.isMySqlBarFilled) {
          this.move("mysql", 80);
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
        if (
          this.isVueBarFilled &&
          this.isPhpBarFilled &&
          this.isMySqlBarFilled &&
          this.isHtmlBarFilled &&
          this.iscssScssBarFilled
        ) {
          this.canReset = true;
        }
      }
    },

    move(barId, percentage) {
      var i = 0;
      if (i == 0) {
        i = 1;
        var elem = document.getElementById(barId);
        var width = 1;
        var id = setInterval(frame, 20);
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
@import "resources/sass/home.scss";
</style>