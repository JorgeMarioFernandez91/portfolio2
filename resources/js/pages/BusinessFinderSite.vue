<template>
  <div class="main">
    <nav class="nav">
      <div class="left">
        <ul>
          <li>Business Finder Pro</li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li>Home</li>
          <li>Pages</li>
          <li>Products</li>
          <li>Documentation</li>
          <li>
            <div class="btn-container">
              <div class="btn">Buy Now</div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="master-header">
      <div class="content-container">
        <h1>Find the best business in town</h1>
        <div class="subtitle">
          Search for restaurants, contractors, and other local businesses in
          your area to find out which ones are the best!
        </div>
        <div class="input-container">
          <b-form-input
            id="search"
            v-model="search"
            placeholder="Find a local business..."
          ></b-form-input>
          <div class="btn-container">
            <div class="btn">Get Started</div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-1">
      <div class="header-container">
        <div class="title-1">Browse Local Businesses</div>
        <div class="title-2">
          Not sure what you're looking for? Here are some popoular business near
          you!
        </div>
      </div>
      <div class="card-container">
        <div class="top">
          <div class="card-item">
            <div class="img-background resto"></div>
            <div class="text">Restaurants</div>
          </div>
          <div class="card-item">
            <div class="img-background coffee"></div>
            <div class="text">Coffee</div>
          </div>
          <div class="card-item">
            <div class="img-background medical"></div>
            <div class="text">Medical</div>
          </div>
          <div class="card-item">
            <div class="img-background auto"></div>
            <div class="text">Auto</div>
          </div>
        </div>
        <div class="bottom">
          <div class="card-item">
            <div class="img-background events"></div>
            <div class="text">Events</div>
          </div>
          <div class="card-item">
            <div class="img-background breweries"></div>
            <div class="text">Breweries</div>
          </div>
          <div class="card-item">
            <div class="img-background gym"></div>
            <div class="text">Gyms</div>
          </div>
          <div class="card-item">
            <div class="img-background marketing"></div>
            <div class="text">Marketing</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-2">
      <div class="content-container">
        <div class="left">
          <div class="title">Want to stay up to date?</div>
          <div class="subtitle">Sign up now to receive the latest news</div>
        </div>
        <div class="right">
          <b-form-input
            id="email"
            v-model="email"
            placeholder="Enter your email..."
          ></b-form-input>
          <div class="btn-container">
            <div class="btn">Sign Up</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-3">
      <div class="content-container">
        <div class="title">Top New Businesses</div>
        <div class="subtitle">Here are the top new businesses in your area</div>
        <div class="card-container">
          <div class="card-item">
            <div class="img-background mexican"></div>
            <div class="business-info">
              <div class="title">Diablo's Corner</div>
              <div class="stars">
                <div class="full-star" />
                <div class="full-star" />
                <div class="full-star" />
                <div class="full-star" />
                <div class="half-star" />
              </div>
              <div class="num-reviews">(15 Reviews)</div>
              <div class="address">402 El Paso Way, CA</div>
            </div>
            <div class="opened-date">
              <div class="house" />
              <div class="text">Opened 3 weeks ago</div>
            </div>
          </div>

          <div class="card-item">
            <div class="img-background burger"></div>
            <div class="business-info">
              <div class="title">Burger Street</div>
              <div class="stars">
                <div class="full-star" />
                <div class="full-star" />
                <div class="full-star" />
                <div class="full-star" />
                <div class="half-star" />
              </div>
              <div class="num-reviews">(12 Reviews)</div>
              <div class="address">473 Martin St., CA</div>
            </div>
            <div class="opened-date">
              <div class="house" />
              <div class="text">Opened 2 weeks ago</div>
            </div>
          </div>

          <div class="card-item">
            <div class="img-background fish"></div>
            <div class="business-info">
              <div class="title">Pesco's</div>
              <div class="stars">
                <div class="full-star" />
                <div class="full-star" />
                <div class="full-star" />
                <div class="full-star" />
                <div class="half-star" />
              </div>
              <div class="num-reviews">(18 Reviews)</div>
              <div class="address">612 Oceania, CA</div>
            </div>
            <div class="opened-date">
              <div class="house" />
              <div class="text">Opened 4 weeks ago</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="top">
        <div class="column">
          <div class="header">Business Finder Pro</div>
          <div class="link">Contact us</div>
          <div class="link"></div>
        </div>
        <div class="column">
          <div class="header">Product</div>
          <div class="link">Landing</div>
          <div class="link">Pages</div>
          <div class="link">Sections</div>
          <div class="link">Documentation</div>
          <div class="link">Changelog</div>
        </div>
        <div class="column">
          <div class="header">Tech</div>
          <div class="link">Documentation</div>
          <div class="link">Changelog</div>
          <div class="link">Theme Customizer</div>
        </div>
        <div class="column">
          <div class="header">Includes</div>
          <div class="link">Utilities</div>
          <div class="link">Components</div>
          <div class="link">Layouts</div>
          <div class="link">Code Snippets</div>
          <div class="link">Updates</div>
        </div>
        <div class="column">
          <div class="header">Legal</div>
          <div class="link">Privacy Policy</div>
          <div class="link">Terms and Conditions</div>
        </div>
      </div>
      <div class="bottom">
        <div class="column">
          <div class="link">Copyright © 2022</div>
        </div>
        <div class="column" />
        <div class="column" />
        <div class="column" />
        <div class="column"><div class="link">Terms and Conditions</div></div>
      </div>
    </footer>
  </div>
</template>

<script>
import { BFormInput } from "bootstrap-vue";
export default {
  name: "BusinessFinderSite",
  components: { BFormInput },

  props: {},

  data() {
    return {
      search: null,
      email: null,
    };
  },

  methods: {},
};
</script>
<style lang="scss" scoped>
@import "resources/sass/business-finder.scss";
</style>