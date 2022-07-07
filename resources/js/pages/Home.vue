<template>
  <div class="main">
    <div class="side-nav">
      <div class="initials">MF</div>
      <div class="button-container">
        <a href="#home" class="button"
          ><i class="fas fa-house-user"></i> Home</a
        >
        <a href="#about" class="button"
          ><i class="far fa-address-card"></i> About</a
        >
        <a href="#skills" class="button"
          ><i class="fas fa-laptop-code"></i> Skills</a
        >
        <a href="#education" class="button"
          ><i class="fa fa-graduation-cap"></i> Education</a
        >
        <a href="#product" class="button"
          ><i class="fa fa-cubes"></i> Product</a
        >
        <a href="#work" class="button"><i class="fas fa-briefcase"></i>Work</a>
        <a href="#contact" class="button"
          ><i class="fas fa-envelope-open"></i> Contact</a
        >
      </div>
    </div>
    <div class="content">
      <div class="home" id="home">
        <div class="left">
          <p class="style">Hi, I'm</p>
          <h1>Mario Fernandez</h1>
          <p class="style">Web Developer</p>
          <p>
            Full-Stack Web Developer passionate about creating interactive
            applications that solve real world problems
          </p>
          <div class="btn-container">
            <div class="resume-btn">Download CV</div>
            <div class="contact-btn">Contact Me</div>
          </div>
        </div>
        <div class="right"></div>
      </div>
      <div :class="popOut ? 'fade-in' : 'invisible'" class="pop-out-container">
        <div class="pop-out">
          <div class="left"><span class="client" /> Client Focused</div>
          <div class="center"><span class="stack" /> Full Stack Experience</div>
          <div class="right"><span class="question" /> Support</div>
        </div>
      </div>
      <div class="about background-img" id="about">
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
      <div class="skills" id="skills">
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
      <div class="education-work background-img" id="education">
        <div class="faded-overlay">
          <h3 class="education-work-header">My Awesome Journey</h3>
          <div class="education-work-container">
            <div class="experience">
              <div class="header">Experiences</div>

              <div class="content-container">
                <i class="fa fa-circle"></i>
                <div class="text">RentSync</div>
                <div class="date">2020-2022</div>
              </div>
              <div class="content-container">
                <i class="fa fa-circle"></i>
                <div class="text">Freelance Developer</div>
                <div class="date">2020</div>
              </div>
              <div class="content-container">
                <i class="fa fa-circle"></i>
                <div class="text">University Researcher</div>
                <div class="date">2018-2020</div>
              </div>
            </div>
            <div class="education">
              <div class="header">Education</div>

              <div class="content-container">
                <i class="fa fa-circle"></i>
                <div class="text">Honors in Computer Science</div>
                <div class="date">2016-2020</div>
              </div>
              <div class="content-container">
                <i class="fa fa-circle"></i>
                <div class="text">Honors in Health Sciences</div>
                <div class="date">2010-2014</div>
              </div>
              <div class="content-container">
                <i class="fa fa-circle"></i>
                <div class="text">Secondary School Certificate</div>
                <div class="date">2005-2010</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product" id="product">
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
      <div class="recent-works background-img" id="work">
        <div class="faded-overlay">
          <h3 class="header">Recent Works</h3>
          <div class="works-container">
            <div class="work coffee" @click="toSite('coffee-site')"></div>
            <div
              class="work black-white"
              @click="toSite('black-white-site')"
            ></div>
            <div
              class="work finder"
              @click="toSite('business-finder-site')"
            ></div>
          </div>
        </div>
      </div>
      <div class="contact">
        <h3 class="header">Get in Touch</h3>
        <div class="contact-container">
          <b-form @submit="onSubmit">
            <b-form-group id="group-contact">
              <b-form-input
                id="name"
                v-model="form.name"
                placeholder="Your Name*"
                :state="nameState"
                required
              ></b-form-input>
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="Your Email*"
                :state="emailState"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="group-message">
              <b-form-input
                id="subject"
                v-model="form.subject"
                placeholder="Subject*"
                :state="subjectState"
                required
              ></b-form-input>
              <b-form-textarea
                id="message"
                v-model="form.message"
                placeholder="Your Message*"
                :state="messageState"
                rows="3"
                max-rows="4"
                required
              ></b-form-textarea>
            </b-form-group>
            <div class="btn-container">
              <b-button variant="primary" @click="onSubmit()">Submit</b-button>
            </div>
          </b-form>
        </div>
      </div>
      <div class="footer">&copy; Mario Fernandez 2022</div>
    </div>
    <b-modal
      id="modal"
      title="Message Received"
      ref="contactModal"
      hide-footer
      centered
    >
      <h3 class="my-4">Thank you for your message!</h3>
      <p class="my-4">We'll get in touch with you soon.</p>
    </b-modal>
  </div>
</template>

<script>
import {
  BFormGroup,
  BFormInput,
  BForm,
  BButton,
  BFormTextarea,
  BModal,
} from "bootstrap-vue";
import API from "../../../routes/api/api";
export default {
  name: "Home",

  components: {
    BFormGroup,
    BFormInput,
    BForm,
    BButton,
    BFormTextarea,
    BModal,
    API,
  },
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
      popOut: false,
      nameState: null,
      emailState: null,
      subjectState: null,
      messageState: null,
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
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
    onSubmit() {
      let allFilled = true;
      for (const key in this.form) {
        if (this.form[key] === "") {
          this[key + "State"] = false;
          allFilled = false;
        } else {
          this[key + "State"] = null;
        }
      }
      if (allFilled) {
        try {
          API.mail(this.form);
          this.$refs.contactModal.show();
        } catch (error) {}
      }
    },

    toSite(route) {
      this.$router.push({
        path: route,
      });
    },
    scrollHandler(e) {
      if (window.pageYOffset > 65) {
        this.popOut = true;
      } else {
        this.popOut = false;
      }

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