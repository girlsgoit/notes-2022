<template>
  <header>
    <div class="header-section">
      <div class="USERNAME">
        <a href="#">
          <span> {{ userName }} </span>
        </a>
      </div>
      <div class="LOGO">
        <a href="#">
          <img src="/assets/logo.svg" alt="image" />
        </a>
      </div>
      <div class="MENU">
        <nav>
          <ul>
            <li class="menu_item1">
              <a href="#" @click="changeLang($event)">RU</a>
            </li>
            <li class="menu_item2"><a href="#">AJUTOR</a></li>
            <li class="menu_item3">
              <a href="#" @click="signOut($event)">DELOGARE</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderRO",
  methods: {
    changeLang(event) {
      event.preventDefault();
      this.$emit("change-lang");
    },
    signOut(event) {
      event.preventDefault();
      this.$emit("sign-out");
    },
  },
  props: {
    userName: String,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");

body {
  margin: 0;
}

header {
  box-shadow: 0px 0px 27px rgba(230, 230, 230, 0.5);
}

.header-section {
  display: flex;
  flex-direction: row;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
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

span {
  padding: 1rem;
}

@media screen and (max-width: 600px) {
  .header-section {
    display: block;
    position: relative;
  }

  .USERNAME {
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

