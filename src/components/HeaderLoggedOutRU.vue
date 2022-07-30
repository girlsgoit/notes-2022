<template>
  <header>
    <nav>
      <ul id="firstNavList">
        <li>
          <a class="NavLinkAnchor" href="#" @click="goToLogin($event)">ВХОД</a>
        </li>
      </ul>

      <img src="/assets/logo.svg" alt="logo1" id="logoIMG" />

      <ul id="secondNavList">
        <li>
          <a class="NavLinkAnchor" href="#" @click="changeLang($event)">РО</a>
        </li>
        <li>
          <a class="NavLinkAnchor" href="#" @click="goToRegister($event)"
            >РЕГИСТРАЦИЯ</a
          >
        </li>
      </ul>
    </nav>
  </header>

  <hr />
</template>

<script>
export default {
  name: "HeaderLoggedOutRU",
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
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0 10px;
}

header {
  max-width: 970px;
  margin: 0 auto;
  padding: 15px;
}

.NavLinkAnchor {
  color: #393939;
  text-decoration: none;
  font-size: 20px;
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  text-transform: uppercase;
}

#firstNavList {
  text-align: center;
}

#secondNavList {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  gap: 30px;
}

#logoIMG {
  padding: 0 15px;
}
</style>
