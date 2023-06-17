<template>
  <div class="main">
    <header class="header">
      <h2>Taste the world</h2>
      <h1>A Coffee Company</h1>
    </header>
    <nav class="nav">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li @click="navigate()">Products</li>
        <li>store</li>
      </ul>
    </nav>
    <section class="products-container">
      <div class="inner-container">
        <div class="products-header">Products</div>
        <div class="product-1">
          <div class="left"></div>
          <div class="center">
            <div class="title">Product 1</div>
            <div class="desc">Light Roast, Fine Ground</div>
            <div class="weight">Weight: 300g</div>
          </div>
          <div class="right">
            <div class="button">
              <div class="subtract">-</div>
              <div class="total">0</div>
              <div class="add">+</div>
            </div>
            <div class="price"></div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="product-2"></div>
        <div class="product-3"></div>
        <div class="product-4"></div>
      </div>
    </section>
    <section class="checkout-container">
      <div class="inner-container">
        <div class="header"></div>
        <div class="subheader"></div>
        <div class="divider"></div>
        <div class="product-list"></div>
        <div class="total"></div>
        <div class="divider"></div>
        <div class="btn"></div>
      </div>
    </section>
    <footer class="footer">Copyright © Coffee Company 2022</footer>
  </div>
</template>

<script>
export default {
  methods: {
    navigate() {
      this.$router.push({
        path: "/coffee-site/products",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "resources/sass/coffee.scss";

.products-container {
  background-color: #d2974ed4;
  width: 40%;
  margin: 20px;
  height: 700px;
  padding: 20px;
  border-radius: 8px;
  .inner-container {
    background-color: #f6e1c5;
    border-radius: 8px;
    padding: 20px;
    height: 100%;
    .products-header {
      font-size: 32px;
      margin: 10px 0;
    }
    .product-1 {
      display: flex;
      justify-content: space-evenly;
      margin: 20px 0;
      .left {
      }
      .center {
      }
      .right {
        .button {
          display: flex;

          .subtract,
          .add {
            background-color: #e6a756;
            cursor: pointer;
          }
          .subtract,
          .add,
          .total {
            width: 38px;
            padding: 5px;
            text-align: center;
            border: 1px solid #b68546;
          }
          .subtract {
            border-radius: 12px 0 0 12px;
          }

          .add {
            border-radius: 0 12px 12px 0;
          }
          .total {
          }
        }
      }
    }
    .divider {
      margin: 40px 0;
      border-bottom: 1px solid #613a2e;
    }
  }
}
</style>