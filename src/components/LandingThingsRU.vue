<template>
  <body>
    <section style="background-color: aliceblue" id="Completely">
      <div>
        <h1 style="margin: 0">Следуйте прямо за расширением</h1>
        <p>
          Используйте гибкие интегрированные системы для обеспечения мощного
          краткого обзора для проведения анализа на высоком уровне.
        </p>
      </div>
    </section>

    <section id="aboutUsSection">
      <div>
        <h2>О приложении «Заметки»</h2>
        <p>
          Фосфлуоресцентно задействуйте мировые методологии с помощью
          веб-технологий. Интерактивно координируйте опереждающую электронную
          коммерцию с помощью процессно-ориентированного мышления. Полностью
          реализуйте масштабируемое обслуживание клиентов за счет устойчивых
          возможностей
        </p>
      </div>
    </section>

    <section id="featuresSections">
      <div class="container">
        <h2>Особенности</h2>

        <p>
          Человек в поисках комфортного, удобного, безопасного существования
          создает технические средства.
        </p>
      </div>
      <div id="textSection">
        <ul>
          <li>
            <img src="img/Shape (1).png" alt="" class="featuresListIMG" />
            <span class="name">Первая особенность</span>
            <p class="text">
              Погружение в нанотехнологии вдоль информационной магистрали
              замкнет петлю фокусирования исключительно на конечном результате.
            </p>
          </li>
          <li>
            <img src="img/Shape Copy.png" alt="" class="featuresListIMG" />
            <span class="name">Вторая особенность</span>
            <p class="text">
              Извлечение выгоды из легко-доступных материалов для определения
              приблизительно добавленную стоимость бета-теста. Преодоление
              цифрового разрыва.
            </p>
          </li>
          <li>
            <img src="img/Shape.png" alt="" class="featuresListIMG" />
            <span class="name">Робототехника</span>
            <p class="text">
              Внесение беспроигрышного вклада в групповую работу для стратегии
              выживания и обеспечения упреждающего доминирования. Итог- движение
              вперед.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="gallerySection">
      <div id="mainContainer">
        <div class="container_img img-1"></div>
        <div class="container_img img-2"></div>
        <div class="container_img img-3"></div>
        <div class="container_img img-4"></div>
        <div class="container_img img-5"></div>
        <div class="container_img img-6"></div>
        <div class="container_img img-7"></div>
        <div class="container_img img-8"></div>
      </div>
    </section>

    <section>
      <div class="group-1">
        <img src="img/1.png" />
        <img src="img/2.png" />
        <img src="img/3.png" class="crunchyroll" />
        <img src="img/3-3.png" class="crunchyroll_3-3" alt="" />
        <img src="img/4.png" />
        <img src="img/5.png" />
        <img src="img/6-6.png" />
        <img src="img/7.png" />
        <img src="img/8.png" />
        <img src="img/9.png" />
      </div>
    </section>
  </body>
</template>

<script>
export default {
  name: "LandingThingsRU",
};
</script>

<style>
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  width: 100%;
}

#aboutUsSection {
  position: relative;
  height: 450px;
  padding: 20px 15px;
}
#aboutUsSection > div > p {
  font-size: 25px;

  color: #6A6A6A;
  line-height: 28px;
  font-size: 18px;
}

#aboutUsSection > div > h2 {
  font-size: 40px;
  font-weight: 700;
}
#aboutUsSection > div {
  padding: 20px 0;
  text-align: center;
  max-width: 70%;
  margin: 0 auto;
}

#gallerySection {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding: 80px 15px;
}

#gallerySection > h1 {
  margin-bottom: 24px;
  font-size: 2.5rem;
  font-family: "Playfair Display", serif;
}

#gallerySection > p {
  margin-bottom: 64px;
  text-align: center;
  width: 740px;
  font-family: "Work Sans", sans-serif;
}

#mainContainer {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  margin: 0;
  padding: 0 15px;
}

.container_img {
  height: 240px;
  width: 25%;
}

.img-1 {
  background-image: url(./img/IMG_3818.jpg);
  background-position: center;
  background-size: cover;
}
.img-2 {
  background-image: url(./img/IMG_3712.jpg);
  background-position: center;
  background-size: cover;
}
.img-3 {
  background-image: url(./img/IMG_20220728_120034.jpg);
  background-position: center;
  background-size: cover;
}
.img-4 {
  background-image: url(./img/IMG_3822.jpg);
  background-position: center;
  background-size: cover;
}

.img-5 {
  background-image: url(./img/66.jpg);
  background-position: center;
  background-size: cover;
}

.img-6 {
  background-image: url(./img/99.jpg);
  background-position: center;
  background-size: cover;
}
.img-7 {
  background-image: url(./img/1010.jpg);
  background-position: center;
  background-size: cover;
}
.img-8 {
  background-image: url(./img/77.jpg);
  background-position: center;
  background-size: cover;
}

#Completely > div > img {
  height: 100%;
  width: 100%;
}

#Completely > div > h1 {
  font-size: calc(20px + 36 * (100vw / 1100));

  color: #FFFFFF;
}

#Completely {
  height: 575px;
  background-image: url(./img/Bitmap.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

#Completely > div {
  position: absolute;
  transform: translate(50%, 50%);
  right: 50%;
  bottom: 50%;
  text-align: center;
}

#Completely > div > p {
  font-weight: 300;
  font-size: calc(16px + 4 * (100vw / 1100));
  padding: 0 15%;
  color: #FFFFFF;
}

#featuresSections {
  background-color: #FAFAFA;
  text-align: center;
  padding: 0 15px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
}

/* #featuresList{
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-between;
   
} */

#textSection > ul > li > img {
  padding: 0 0 20px 0;
}

#textSection > ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
  max-width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 10px 0;
}

#textSection > ul > li {
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

#headingDIV {
  height: 300px;
}

#headingDIV > h2 {
  margin-bottom: 50px;
  font-size: 25px;
  font-weight: 1000px;
}

.name {
  font-size: 20px;
  font-weight: bolder;
}
.crunchyroll_3-3 {
  display: none;
}

.group-1 {
  padding: 80px 15px 90px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 69px;
  justify-items: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
}

/* №1 */
@media (max-width: 1140px) {
}
/* №2 */
@media (max-width: 991.98px) {
  .crunchyroll_3-3 {
    display: block;
  }
  .crunchyroll {
    display: none;
  }
}
/*№3 */
@media (max-width: 767.98px) {
  #textSection > ul > li {
    flex: 1 1 auto;
  }
  .group-1 {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  .img-1,
  .img-3 {
    display: none;
  }
  .container_img {
    width: 33.333%;
  }
}

@media (max-width: 560px) {
  body {
    min-width: 520px;
  }
  .img-7,
  .img-5 {
    display: none;
  }
  .container_img {
    width: 50%;
  }
  .group-1 {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>