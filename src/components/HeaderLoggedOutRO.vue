<template>
  <header>
    <div class="header-section">
      <div class="LOGIN">
        <a href="#" @click="goToLogin($event)"><span> LOGARE </span></a>
      </div>
      <div class="LOGO">
        <a href="#"><img src="/assets/logo.svg" alt="image" /></a>
      </div>
      <div class="MENU">
        <nav>
          <ul>
            <li class="menu_item1">
              <a href="#" @click="changeLang($event)">RU</a>
            </li>
            <li class="menu_item2">
              <a href="#" @click="goToRegister($event)"
                ><span>ÎNREGISTRARE</span></a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <hr />
</template>

<script>
export default {
  name: "HeaderLoggedOutRO",
  methods: {
    changeLang(event) {
      event.preventDefault();
      this.$emit("change-lang");
    },

    goToLogin(event) {
      event.preventDefault();
      this.$emit("go-to-login");
    },
    goToRegister(event) {
      event.preventDefault();
      this.$emit("go-to-register");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");

body {
  margin: 0;
}

.header-section {
  display: flex;
  flex-direction: row;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400px;
  line-height: 28px;
  letter-spacing: 0px;
  max-width: 960px;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #393939;
}

div nav ul li {
  display: inline-block;
  margin: 0.5rem;
}

@media screen and (max-width: 600px) {
  .header-section {
    display: block;
    position: relative;
  }

  .LOGIN {
    display: block;
    text-align: center;
    position: absolute;
    top: 65px;
    margin-top: 14px;
    padding-top: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .LOGO {
    display: block;
    text-align: center;
  }

  .MENU {
    padding-top: 20px;
    display: block;
    text-align: center;
  }

  .MENU nav ul {
    margin: 0;
    padding: 0;
  }

  .MENU nav ul li {
    display: block;
  }

  .LOGO {
    order: 0;
  }
}
</style>
