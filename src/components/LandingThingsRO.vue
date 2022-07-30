<template>
  <section class="sectiune">
    <!-- <section class="hero"> -->
    <div class="container">
      <img src="images/Bitmap.png" alt="hero" />
      <div class="centered">
        <h2>Urmărește complet scalabil</h2>
        <p>
          Utilizați cadrele agile pentru a oferi un rezumat solid pentru
          prezentări de ansamblu la nivel înalt.
        </p>
      </div>
    </div>
    <!-- </section> -->

    <section class="notes">
      <h1>Despre aplicația Notițe</h1>
      <p>
        Implementați în mod fosfluorescent metodologiile din întreaga lume cu
        tehnologie activată web. Coordonați interactiv comerțul electronic
        proactiv prin gândire centrată pe proces. Urmăriți complet servicii
        scalabile pentru clienți prin potențialități sustenabile
      </p>
    </section>

    <section class="caracteristici">
      <div>
        <div class="paragraf">
          <h1>Caracteristici</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            error blanditiis debitis pariatur deserunt sapiente eius
            repudiandae. Laboriosam doloribus unde officiis, consequatur
            expedita at sunt eligendi culpa deserunt molestiae voluptas.
          </p>
        </div>
      </div>

      <div class="features">
        <ul class="list">
          <div class="box">
            <li class="box1">
              <img src="images/features1.png" />
              <h4>Prima Caracteristica</h4>
              <p>
                Imersiunea în nanotehnologie de-a lungul autostrăzii
                informaționale va închide bucla concentrându-se doar pe linia de
                jos.
              </p>
            </li>
          </div>
          <div class="box">
            <li class="box2">
              <img src="images/feature2.png" />
              <h4>A Doua Caracteristica</h4>
              <p>
                Valorificați fructele care nu se potrivesc pentru a identifica o
                activitate cu valoare adăugată la testul beta. Depășiți
                decalajul digital.
              </p>
            </li>
          </div>
          <div class="box">
            <li class="box3">
              <img src="images/features3.png" />
              <h4>Robotica</h4>
              <p>
                Aduceți la masă strategii de supraviețuire câștig-câștig pentru
                a asigura dominația proactivă. La sfârșitul zilei, mergi mai
                departe.
              </p>
            </li>
          </div>
        </ul>
      </div>
    </section>

    <section class="project-images">
      <ul>
        <li><img src="images/images1.png" alt="1" /></li>
        <li><img src="images/images2.png" alt="2" /></li>
        <li><img src="images/images3.png" alt="3" /></li>
        <li><img src="images/images4.png" alt="4" /></li>
        <li><img src="images/images5.png" alt="5" /></li>
        <li><img src="images/images10.png" alt="6" /></li>
        <li><img src="images/images7.png" alt="7" /></li>
        <li><img src="images/images8.png" alt="8" /></li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

body {
  margin: 0;
}

.notes h1 {
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
}
.notes p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: #6a6a6a;
  max-width: 720px;
  margin: 0 auto;
}

.project-images ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}

.project-images ul li {
  flex-basis: 25%;
  max-height: 238px;
  position: relative;
  list-style-type: none;
}

.project-images ul li img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

.container {
  position: relative;
  text-align: center;
  color: white;
  /* background-image: url("images/Bitmap.png"); */
  /* background-color: black; */

  font-family: "Roboto";
  font-style: normal;
}
.container img {
  width: 100%;
}

.container h2 {
  height: 67px;
  left: 0%;
  right: 0%;
  top: calc(50% - 67px / 2 - 61px);
  font-size: 56px;

  font-weight: 700;
  line-height: 68px;
}
.container p {
  font-weight: 300;
  font-size: 24px;
  position: relative;
  display: inline-block;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.features li {
  list-style-type: none;
}
.box1 {
  text-align: center;
  flex-wrap: nowrap;
}
.box3 {
  text-align: center;
  flex-wrap: nowrap;
}
.box2 {
  text-align: center;
  flex-wrap: nowrap;
}
.box img {
  max-width: auto;
  max-height: 45px;
}
.box {
  list-style-type: none;
  display: inline-block;
  flex-direction: row;
  max-width: 300px;
  margin: 21px;
  justify-content: flex-start;
  align-items: center;
}

.box p {
  max-width: 200px;
  text-align: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.7;
}
.paragraf h1 {
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  padding-top: 50px;
}
.paragraf p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: #6a6a6a;
  max-width: 720px;
  margin: 0 auto;
}
.caracteristici {
  background-color: #fafafa;
}
.features {
  max-width: 780px;
  margin: 0 auto;
}

@media screen and (min-width: 320px) and (max-width: 675px) {
  .notes p,
  .caracteristici p {
    padding: 0 20px;
  }
  div.centered h2 {
    font-size: 0.75rem;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  .centered p {
    font-size: 0.7rem;
    padding-bottom: 10px;
  }
}
ul {
  padding: 0;
  margin: 0;
  text-align: center;
}
.container img {
  max-height: 0 auto;
  max-width: 1890px;
}
</style>