<template>
  <hr />
  <footer>
    <div id="container">
      <div class="footer-text">
        Приложение было разработано во время мероприятия
        <span> Summer Camp 2022 </span>
      </div>
      <div class="links">
        <a href="https://ro-ro.facebook.com/GirlsGoIT/"> Facebook </a>
        <a href="https://www.youtube.com/c/girlsgoit"> YouTube </a>
        <a href="https://www.instagram.com/girlsgoit/"> Instagram </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterRU",
};
</script>

<style>
body {
  margin: 0px;
  font-family: "Roboto", sans-serif;
}
a {
  text-decoration: none;
  color: #919191;
}

footer {
  font-size: 16px;

  background-color: #FAFAFA;

  padding: 74px 10px 84px;
  position: relative;
}

.footer-text {
  color: #919191;
  text-align: center;
}
#container {
  display: flex;
  flex-direction: column;
}
.footer-text span {
  margin-left: 7px;
  font-weight: 700;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 30px;
}

p {
  text-align: center;
  color: #919191;
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
  .wrapper {
    max-width: 700px;
  }
  .heading {
    font-size: 46px;
  }
  .buttons {
    justify-content: center;
  }
}

@media (max-width: 560px) {
  .heading {
    font-size: 36px;
  }
  .wrapper {
    max-width: none;
  }
}
</style>