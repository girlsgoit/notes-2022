<template>
  <center>
    <section class="partners-section">
      <ul class="partners-list">
        <li class="partner-element">
          <a href="https://mec.gov.md/">
            <img src="Rectangleministerul.png" alt="indisponibil" />
          </a>
        </li>
        <!-- 1 -->
        <li class="partner-element">
          <a href="https://www.facebook.com/LTembassyMD">
            <img src="Rectangle1.png" alt="indisponibil" />
          </a>
        </li>
        <!-- 2 -->
        <li class="partner-element">
          <a href="https://www.crunchyroll.com/en-gb">
            <img
              src="2e76526192a0bb876bff22dc73f245c31658415763_main.png"
              alt="indisponibil"
            />
          </a>
        </li>
        <!-- 3 -->
        <li class="partner-element">
          <a href="https://youngfeministfund.org/">
            <img src="frida-logo.jpg" alt="indisponibil" />
          </a>
        </li>
        <!-- 4 -->
        <li class="partner-element">
          <a href="https://www.facebook.com/atelier99.org/">
            <img src="download.png" alt="indisponibil" />
          </a>
        </li>
        <!-- 5 -->
        <li class="partner-element">
          <a href="https://tekedu.org/">
            <img class="tekedu-logo" src="haha.png" alt="indisponibil" />
          </a>
        </li>
        <!-- 6 -->
        <li class="partner-element">
          <a href="https://www.orange.md/">
            <img src="download (1).png" alt="indisponibil" />
          </a>
        </li>
        <!-- 7 -->
        <li class="partner-element">
          <a href="https://www.facebook.com/goparrotmd/">
            <img src="aaab.webp" alt="indisponibil" />
          </a>
        </li>
        <!-- 8 -->
        <li class="partner-element">
          <a class="bla" href="https://atomate.net/contact-us/">
            <img src="atomate.png" alt="indisponibil" />
          </a>
        </li>
        <!-- 9      -->
      </ul>
    </section>
  </center>
  <hr size="1" width="1000px" />
  <br />
  <br />
</template>

<script>
export default {
  name: "LandingThingsRO",
};
</script>

<style>
.parters-section {
  width: 1440px;
  height: 770px;
  left: 0px;
  top: 2245px;
}
ul.partners-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
}

li.partner-element {
  position: relative;
  list-style: none;
  flex-basis: 33.3%;
  max-width: 20%;
  padding: 50px;
  display: flex;
  align-content: space-around;
}

.partner-element img {
  object-fit: cover;
  width: 100%;
  height: auto;
  vertical-align: middle;
  margin: 10px;
}
.partner-element a.bla img {
  padding: 10px;
}
hr {
  color: #979797;
}
</style>