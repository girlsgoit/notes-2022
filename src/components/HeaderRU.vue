<template>
  <header>
    <nav>
      <ul id="firstNavList">
        <li>
          <a class="NavLinkAnchor" href="#"> {{ user }} </a>
        </li>
      </ul>

      <img src="/assets/logo.svg" alt="logo1" id="logoIMG" />

      <ul id="secondNavList">
        <li>
          <a class="NavLinkAnchor" href="#" @click="changeLang($event)">RO</a>
        </li>
        <li><a class="NavLinkAnchor" href="#">ПОМОЩЬ</a></li>
        <li><a class="NavLinkAnchor" href="#" @click="signOut()">ВЫХОД</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderRU",
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
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0 10px;
}
body {
  font-family: "Roboto", sans-serif;
  margin: 0;
}

header {
  max-width: 970px;
  margin: 0 auto;
  height: 100%;
  padding: 33px 0;
}

.NavLinkAnchor {
  color: #393939;
  text-decoration: none;
  font-size: 20px;
}
#firstNavList {
  text-align: center;
  list-style: none;
}

#secondNavList {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  list-style: none;
  gap: 30px;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
}

#logoIMG {
  padding: 0 15px;
}
/*Adapt*/
/* №1 */
@media (max-width: 1140px) {
}
/* №2 */
@media (max-width: 991.98px) {
}
/*№3 */
@media (max-width: 767.98px) {
  #secondNavList {
    justify-content: flex-end;
    flex-wrap: wrap;
  }
}
@media (max-width: 560px) {
  #secondNavList {
    gap: 10px;
  }
}

@media (max-width: 670px) {
  #logoIMG {
    display: none;
  }
}
</style>
