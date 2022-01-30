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
        <div class="image"></div>
        <div class="content">
          <p>HI THERE! I'M</p>
          <p>Mario Fernandez</p>
          <p>
            A <span>Full-Stack Developer</span> passionate about creating
            interactive applications that solve real world problems
          </p>
        </div>
      </div>
      <div class="about"></div>
      <div class="skills"></div>
      <div class="works"></div>
      <div class="contact"></div>
    </div>
    <!-- <div class="banner" :class="checked ? 'dark' : ''">
      <div class="logo"><i class="fas fa-code"></i></div>
      <div class="name">Jorge Mario Fernandez</div>
      <div class="titles">
        {{ currentTitle }}
      </div>
      <div class="theme-btn">
        <i
          v-if="checked"
          class="fas fa-toggle-on"
          @click="checked = !checked"
        ></i>
        <i v-else class="fas fa-toggle-off" @click="checked = !checked"></i>
      </div>
    </div>
    <div class="description" :class="checked ? 'dark' : ''">
      <div class="photo accent"></div>
      <div class="text accent"></div>
    </div>
    <div class="projects" :class="checked ? 'dark' : ''">
      <div class="header">Projects</div>
      <div class="content">
        <div class="project accent"></div>
        <div class="project accent"></div>
        <div class="project accent"></div>
      </div>
    </div>
    <div class="skills" :class="checked ? 'dark' : ''">
      <div class="header">Skills</div>
      <div class="content">
        <div class="skill accent">Vue</div>
        <div class="skill accent">Laravel</div>
        <div class="skill accent">MySQL</div>
        <div class="skill accent">PHP</div>
        <div class="skill accent">SCSS</div>
        <div class="skill accent">HTML</div>
      </div>
    </div>
    <div class="experiences" :class="checked ? 'dark' : ''">
      <div class="header">Experience</div>
      <div class="content experience">
        <div class="row">
          <div class="col">
            <div class="row">
              <div class="circle"></div>
            </div>
            <div class="row"></div>
            <div class="row">
              <div class="circle"></div>
            </div>
          </div>
          <div class="vertical-line"></div>
          <div class="col">
            <div class="row"></div>
            <div class="row">
              <div class="circle"></div>
            </div>
            <div class="row"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-medias" :class="checked ? 'dark' : ''"></div> -->
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
    };
  },

  mounted: function () {
    const timer = setInterval(() => {
      this.scrollTitles();
    }, 2000);

    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  },

  methods: {
    scrollTitles() {
      if (this.counter === 0) {
        this.counter++;
        this.currentTitle = this.titles.fullStack;
      } else if (this.counter === 1) {
        this.counter++;
        this.currentTitle = this.titles.web;
      } else {
        this.counter = 0;
        this.currentTitle = this.titles.passion;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "resources/sass/home.scss";
</style>