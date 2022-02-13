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
        <div class="home-content">
          <p>HI THERE! I'M</p>
          <p><span>Mario</span> Fernandez</p>
          <p>
            A <span>Full-Stack Developer</span> passionate about creating
            interactive applications that solve real world problems
          </p>
        </div>
      </div>
      <div class="about">
        <div class="header">
          <hr />
          About
        </div>
        <div class="card">
          I'm a Full-Stack Developer with close to 2 years of professional
          development experience. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div class="skills"></div>
      <div class="works"></div>
      <div class="contact"></div>
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