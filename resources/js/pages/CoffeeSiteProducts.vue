<template>
  <div class="main">
    <header class="header">
      <h2>Taste the world</h2>
      <h1>A Coffee Company</h1>
    </header>
    <nav class="nav">
      <ul>
        <li @click="navigate('/coffee-site')">Home</li>
        <li @click="navigate('/coffee-site')">About</li>
        <li @click="navigate('/coffee-site/products')">Products</li>
        <li @click="navigate('/coffee-site/products')">store</li>
      </ul>
    </nav>
    <section class="products-checkout-container">
      <section class="products-container">
        <div class="inner-container">
          <div class="products-header">Products</div>
          <div class="product-1">
            <div class="left"><div class="img-container img-1"></div></div>
            <div class="center">
              <div class="title">{{ checkoutList[0].name }}</div>
              <div class="desc">{{ checkoutList[0].description }}</div>
              <div class="weight">Weight: 300g</div>
            </div>
            <div class="right">
              <div class="button">
                <div class="subtract" @click="subtractProduct(0)">-</div>
                <div class="total">{{ checkoutList[0].quantity }}</div>
                <div class="add" @click="addProduct(0)">+</div>
              </div>
              <div class="price">${{ checkoutList[0].price }}</div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="product-2">
            <div class="left"><div class="img-container img-2"></div></div>
            <div class="center">
              <div class="title">{{ checkoutList[1].name }}</div>
              <div class="desc">{{ checkoutList[1].description }}</div>
              <div class="weight">Weight: 300g</div>
            </div>
            <div class="right">
              <div class="button">
                <div class="subtract" @click="subtractProduct(1)">-</div>
                <div class="total">{{ checkoutList[1].quantity }}</div>
                <div class="add" @click="addProduct(1)">+</div>
              </div>
              <div class="price">${{ checkoutList[1].price }}</div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="product-3">
            <div class="left"><div class="img-container img-3"></div></div>
            <div class="center">
              <div class="title">{{ checkoutList[2].name }}</div>
              <div class="desc">{{ checkoutList[2].description }}</div>
              <div class="weight">Weight: 300g</div>
            </div>
            <div class="right">
              <div class="button">
                <div class="subtract" @click="subtractProduct(2)">-</div>
                <div class="total">{{ checkoutList[2].quantity }}</div>
                <div class="add" @click="addProduct(2)">+</div>
              </div>
              <div class="price">${{ checkoutList[2].price }}</div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="product-4">
            <div class="left"><div class="img-container img-4"></div></div>
            <div class="center">
              <div class="title">{{ checkoutList[3].name }}</div>
              <div class="desc">{{ checkoutList[3].description }}</div>
              <div class="weight">Weight: 300g</div>
            </div>
            <div class="right">
              <div class="button">
                <div class="subtract" @click="subtractProduct(3)">-</div>
                <div class="total">{{ checkoutList[3].quantity }}</div>
                <div class="add" @click="addProduct(3)">+</div>
              </div>
              <div class="price">${{ checkoutList[3].price }}</div>
            </div>
          </div>
        </div>
      </section>
      <section class="checkout-container" v-if="totalPrice() > 0">
        <div class="inner-container">
          <div class="checkout-header">Order Summary</div>
          <div class="subheader">Items</div>
          <div class="divider"></div>
          <div class="product-list">
            <div v-for="(item, index) in checkoutList" :key="index" class="product">
              <div class="name" v-if="item.quantity > 0">
                {{ item.name }} {{ item.quantity > 0 ? " x " + item.quantity : "" }}
              </div>
              <div class="price" v-if="item.quantity > 0">
                {{ fixPrice(item.price * item.quantity) }}
              </div>
            </div>
          </div>
          <div class="total">
            <div class="text">Total:</div>
            <div class="price">{{ totalPrice() }}</div>
          </div>
          <div class="divider"></div>
          <div class="btn">
            <div class="button" @click="showActivationModal()">Checkout</div>
          </div>
        </div>
      </section>
    </section>
    <footer class="footer">Copyright © Coffee Company 2022</footer>
    <b-modal
      id="activation_modal"
      ref="activation_modal"
      centered
      modal-class="credit-card-modal activation-modal"
      size="lg"
      hide-backdrop
      :hide-header="true"
      :hide-footer="true"
    >
      <div class="content-container">
        <div class="title">Payment Details</div>
        <div class="row-1">
          <div class="header">Credit Card Number</div>
          <div class="input"><input /></div>
        </div>
        <div class="row-2">
          <div class="left">
            <div class="header">Expiry Date</div>
            <div class="input"><input /></div>
          </div>
          <div class="right">
            <div class="header">CVV</div>
            <div class="input"><input /></div>
          </div>
        </div>
        <div class="row-3">
          <div class="header">Address</div>
          <div class="input"><input /></div>
        </div>
        <div class="row-4">
          <div class="left">
            <div class="header">City</div>
            <div class="input"><input /></div>
          </div>
          <div class="right">
            <div class="header">Province</div>
            <div class="input"><input /></div>
          </div>
        </div>
        <div class="sub-tax">
          <div class="sub">
            <div class="text">Subtotal:</div>
            <div class="amount">$ {{ totalPrice() }}</div>
          </div>
          <div class="tax">
            <div class="text">Tax:</div>
            <div class="amount">15%</div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="total-container">
          <div class="text">Total Amount:</div>
          <div class="total">${{ fixPrice(totalPrice() * 1.15) }}</div>
        </div>
        <div class="btn">
          <div class="button" @click="hideActivationModal()">Make Payment</div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { BModal, VBModal } from "bootstrap-vue";

export default {
  name: "CoffeeProductsPage",
  components: { BModal, VBModal },
  data() {
    return {
      checkoutList: [
        {
          name: "Morning Start",
          description: "Light Roast, Fine Ground",
          price: 14.99,
          quantity: 0,
        },
        {
          name: "Red Sun",
          description: "Medium Roast, Medium Ground",
          price: 16.99,
          quantity: 0,
        },
        {
          name: "Night Sky",
          description: "Dark Roast, Fine Ground",
          price: 16.99,
          quantity: 0,
        },
        {
          name: "Auburn Fall",
          description: "Medium - Dark Roast, Fine Ground",
          price: 18.99,
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    navigate(site) {
      this.$router.push({
        path: site,
      });
    },
    subtractProduct(index) {
      if (this.checkoutList[index].quantity !== 0) {
        this.checkoutList[index].quantity--;
      }
    },
    addProduct(index) {
      this.checkoutList[index].quantity++;
    },
    fixPrice(price) {
      return (Math.round(price * 100) / 100).toFixed(2);
    },
    totalPrice() {
      let total = 0;
      for (let i = 0; i < this.checkoutList.length; i++) {
        if (this.checkoutList[i].quantity > 0) {
          total += this.checkoutList[i].price * this.checkoutList[i].quantity;
        }
      }
      return this.fixPrice(total);
    },
    showActivationModal() {
      this.$refs.activation_modal.show();
    },

    hideActivationModal() {
      this.$refs.activation_modal.hide();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "resources/sass/coffee.scss";

.products-checkout-container {
  display: flex;
  justify-content: center;
  height: 870px;
  align-items: flex-start;
  .products-container,
  .checkout-container {
    background-color: #d2974ed4;
    padding: 20px;
    border-radius: 8px;
    margin: 20px;
    max-width: 600px;
    .inner-container {
      background-color: #f6e1c5;
      border-radius: 8px;
      padding: 20px;
    }
  }

  .products-container {
    width: 45%;
    .inner-container {
      height: 100%;
      .products-header {
        font-size: 32px;
        margin: 10px 0;
      }
      .product-1,
      .product-2,
      .product-3,
      .product-4 {
        display: flex;
        justify-content: space-evenly;
        margin: 20px 0;
        .left {
          width: 100px;
          height: 100px;
          .img-1 {
            background-image: url("/images/coffee-image-1.jpg");
          }
          .img-2 {
            background-image: url("/images/coffee-image-2.jpg");
          }
          .img-3 {
            background-image: url("/images/coffee-image-3.jpg");
          }
          .img-4 {
            background-image: url("/images/coffee-image-4.jpg");
          }
          .img-container {
            width: auto;
            height: 100%;
            border-radius: 8px;
            background-size: cover;
          }
        }
        .center {
          max-width: 155px;
          .desc,
          .weight {
            color: #7b7b7b;
            font-size: 14px;
          }
        }
        .right {
          width: 115px;
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

          .price {
            margin-top: 40px;
            text-align: center;
          }
        }
      }
      .divider {
        margin: 40px 0;
        border-bottom: 1px solid #613a2e;
      }
    }
  }

  .checkout-container {
    width: 35%;
    max-width: 460px;
    .checkout-header {
      font-size: 32px;
      margin: 10px 0;
    }
    .subheader {
      font-size: 24px;
    }

    .product-list {
      padding: 0 50px;
      .product {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        font-size: 22px;
      }
    }

    .total {
      display: flex;
      justify-content: center;
      font-size: 32px;
    }

    .divider {
      margin: 30px 0;
      border-bottom: 1px solid #613a2e;
    }

    .btn {
      display: flex;
      justify-content: center;
      .button {
        border-radius: 8px;
        padding: 5px 20px;
        background-color: #e6a756;
        font-size: 24px;
        margin-bottom: 10px;
      }
    }
  }
}
::v-deep .modal {
  background-color: #000000c4;

  .modal-body {
    padding: 50px !important;
  }
  .title {
    font-size: 24px;
  }
  .header {
    color: #353535;
    font-size: 14px;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #bcbcbc;
    height: 40px;
    padding: 0 10px;
  }

  [class*="row"] {
    margin: 15px 0;
  }

  .row-2,
  .row-4 {
    display: flex;
    justify-content: space-between;
    .left,
    .right {
      width: 48%;
    }
  }

  .sub-tax,
  .total-container {
    display: flex;
    justify-content: space-between;
    width: 180px;
  }

  .sub-tax {
    flex-direction: column;

    .sub,
    .tax {
      display: flex;
      justify-content: space-between;
    }
  }

  .divider {
    margin: 20px 0;
    border-bottom: 1px solid #cdcdcd;
  }

  .btn {
    display: flex;
    justify-content: center;
    .button {
      border-radius: 8px;
      padding: 5px 20px;
      background-color: #225ccd;
      font-size: 24px;
      margin-bottom: 10px;
      color: white;
    }
  }
}
</style>