<template>
  <div class="main">
    <div class="side-nav">
      <div class="initials">MF</div>
      <div class="button-container">
        <a class="button" @click="scrollToRef('home')"
          ><i class="fas fa-house-user"></i>Home</a
        >
        <a class="button" @click="scrollToRef('about')"
          ><i class="far fa-address-card"></i>About</a
        >
        <a class="button" @click="scrollToRef('skills')"
          ><i class="fas fa-laptop-code"></i>Skills</a
        >
        <a class="button" @click="scrollToRef('education')"
          ><i class="fa fa-graduation-cap"></i>Education</a
        >
        <a class="button" @click="scrollToRef('product')"
          ><i class="fa fa-cubes"></i>Product</a
        >
        <a class="button" @click="scrollToRef('work')"
          ><i class="fas fa-briefcase"></i>Work</a
        >
        <a @click="scrollToRef('contact')" class="button"
          ><i class="fas fa-envelope-open"></i>Contact</a
        >
      </div>
    </div>
    <b-dropdown class="drop-down">
      <b-dropdown-item
        ><a class="button" @click="scrollToRef('home')"
          ><i class="fas fa-house-user"></i>Home</a
        ></b-dropdown-item
      >
      <b-dropdown-item
        ><a class="button" @click="scrollToRef('about')"
          ><i class="far fa-address-card"></i>About</a
        ></b-dropdown-item
      >
      <b-dropdown-item>
        <a class="button" @click="scrollToRef('skills')"
          ><i class="fas fa-laptop-code"></i>Skills</a
        ></b-dropdown-item
      >
      <b-dropdown-item>
        <a class="button" @click="scrollToRef('education')"
          ><i class="fa fa-graduation-cap"></i>Education</a
        ></b-dropdown-item
      >
      <b-dropdown-item>
        <a class="button" @click="scrollToRef('product')"
          ><i class="fa fa-cubes"></i>Product</a
        ></b-dropdown-item
      >
      <b-dropdown-item>
        <a class="button" @click="scrollToRef('work')"
          ><i class="fas fa-briefcase"></i>Work</a
        ></b-dropdown-item
      >
      <b-dropdown-item
        ><a @click="scrollToRef('contact')" class="button"
          ><i class="fas fa-envelope-open"></i>Contact</a
        ></b-dropdown-item
      >
    </b-dropdown>
    <div class="content">
      <div class="home" ref="home">
        <div class="faded-overlay"></div>
        <div class="left">
          <div class="content-container">
            <p class="style">Hi, I'm</p>
            <h1>Mario Fernandez</h1>
            <p class="style">Web Developer</p>
            <p class="description">
              Full-Stack Web Developer passionate about creating interactive
              applications that solve real world problems
            </p>
            <div class="btn-container">
              <!-- <div class="resume-btn">Download CV</div> -->
              <div class="contact-btn" @click="scrollToRef('contact')">
                Contact Me
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="self-img"></div>
        </div>
      </div>
      <!-- <div :class="popOut ? 'fade-in' : 'invisible'" class="pop-out-container">
        <div class="pop-out">
          <div class="left"><span class="client" /> Client Focused</div>
          <div class="center"><span class="stack" /> Full Stack Experience</div>
          <div class="right"><span class="question" /> Support</div>
        </div>
      </div> -->
      <div class="about background-img" ref="about">
        <div class="faded-overlay">
          <div class="about-container">
            <h3 class="header">About Me</h3>
            <div class="description">
              I'm a Full-Stack Developer with professional development
              experience in working with international companies. I offer a wide
              range of services that are aimed at delivering high value products
              for all types of websites. Wheather it's for a small start-up, an
              aspiring artistic venture, or even for a more robust enterpirse
              there's a solution for all. If you're interested below are some
              sample projects that showcase various types of websites. And feel
              free to reach out to me with the contact form below and I'll be
              sure to be in contact shortly.
            </div>
            <!-- <div class="info-container">
              <div class="name">
                <div class="left">Name:</div>
                <div class="right">Mario Fernandez</div>
              </div>
              <div class="phone"></div>
              <div class="email">
                <div class="left">Email:</div>
                <div class="right">jmferna91@gmail.com</div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <div class="skills" ref="skills">
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
      <div class="education-work background-img" ref="education">
        <div class="faded-overlay">
          <h3 class="education-work-header">My Journey</h3>
          <div class="education-work-container">
            <div class="experience">
              <div class="header">Experiences</div>

              <div class="content-container">
                <div class="exp-gradient" id="exp-1"></div>
                <div class="text">RentSync</div>
                <div class="title">Full Stack Web Developer</div>
                <div class="date">2020-2022</div>
              </div>
              <div class="content-container">
                <div class="text">Freelance Developer</div>
                <div class="title">Full Stack Web Developer</div>
                <div class="date">2020</div>
              </div>
              <div class="content-container">
                <div class="text">University Researcher</div>
                <div class="title">Back End Developer</div>
                <div class="date">2018-2020</div>
              </div>
            </div>
            <div class="education">
              <div class="header">Education</div>
              <div class="content-container">
                <div class="text">Code Academy</div>
                <div class="title">Intro to Vue.js</div>
                <div class="date">2020</div>
              </div>
              <div class="content-container">
                <div class="text">Free Code Camp</div>
                <div class="title">Responsive Web Design</div>
                <div class="date">2020</div>
              </div>
              <div class="content-container">
                <div class="text">Western University</div>
                <div class="title">Honors in Computer Science</div>
                <div class="date">2016-2020</div>
              </div>
              <div class="content-container">
                <div class="text">Western University</div>
                <div class="title">Honors in Health Sciences</div>
                <div class="date">2010-2014</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product" ref="product">
        <h3 class="skills-header">What I Offer</h3>
        <div class="content-container">
          <div class="content-a">
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
                  Modern and responsive websites from scratch
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
          <div class="content-b">
            <div class="offer-container">
              <i class="fa fa-eye"></i>
              <div class="offer-box">
                <div class="header">SEO</div>
                <div class="text">
                  Ensure website is able to rate well on modern search engines
                </div>
              </div>
            </div>
            <div class="offer-container">
              <i class="fa fa-headset"></i>
              <div class="offer-box">
                <div class="header">Flexible Support</div>
                <div class="text">
                  Support schedule to fit all business types
                </div>
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
      </div>
      <div class="recent-works background-img" ref="work">
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
      <div class="contact" ref="contact">
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
  BDropdown,
  BDropdownItem,
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
    BDropdown,
    BDropdownItem,
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
    scrollToRef(refName) {
      var element = this.$refs[refName];
      element.scrollIntoView({ behavior: "smooth", inline: "center" });
    },
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