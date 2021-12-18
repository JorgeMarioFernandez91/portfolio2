<template>
  <div class="main">
    <div class="banner" :class="checked ? 'dark' : ''">
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