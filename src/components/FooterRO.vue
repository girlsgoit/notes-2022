<template>
  <footer class="footer-app">
    <center>
      <p>
        Aplicația a fost dezvoltată în cadrul evenimentului
        <span>Tabăra de vară 2022</span>
      </p>
      <br />
    </center>

    <ul>
      <li>
        <a href="https://ro-ro.facebook.com/GirlsGoIT/">Facebook</a>
      </li>
      <li>
        <a href="https://www.youtube.com/c/GirlsGoIT">YouTube</a>
      </li>
      <li>
        <a href="https://www.instagram.com/explore/tags/girlsgoit/"
          >Instagram</a
        >
      </li>
    </ul>
  </footer>
  <br />
  <br />
</template>

<script>
export default {
  name: "FooterRO",
};
</script>

<style>
span {
  font-weight: 700;
}
.footer-app p {
  width: 618px;
  height: 28px;
  left: 411px;
  top: 3092px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #919191;
  text-align: center;
  justify-content: center;
}
.footer-app ul {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: center;
}
.footer-app ul li {
  padding: 0 10px;
  color: #919191;
}
a {
  text-decoration: none;
  color: #919191;
}
footer p {
  text-align: center;
}

@media screen and (min-width: 400px) and (max-width: 950px) {
  [class*="body"] {
    max-width: 950px;
  }
}

@media screen and (min-width: 700px) and (max-width: 1200px) {
  [class*="body"] {
    max-width: 1200px;
  }
}
</style>