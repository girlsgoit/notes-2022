<template>
  <section>
    <div class="container container_forms">
      <img src="/assets/logo.svg" alt="" />
      <form action="" name="log_in" class="form_container">
        <input
          type="text"
          name="userName"
          placeholder="Имя пользователя"
          v-model="userName"
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          v-model="password"
        />
        <br />
        <div class="buttons">
          <button name="login" @click.prevent="startLogin()">Вход</button>
          <a href="#" @click.prevent="goToRegistration()">Регистрация</a>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginRU",
  data: function () {
    return {
      userName: "",
      password: "",
      users: [],
      user: {},
      response: {},
    };
  },

  methods: {
    startLogin: async function () {
      if (this.userName === "" && this.password === "") {
        alert("Заполните логин и пароль!");
      } else if (this.userName === "" && this.password !== "") {
        alert("Заполните логин!");
      } else if (this.userName !== "" && this.password === "") {
        alert("Заполните пароль!");
      } else {
        const data = {
          username: this.userName,
          password: this.password,
        };
        console.log(data);
        await this.getInfo(data);
      }
    },
    getInfo(dataExample) {
      const that = this;
      axios
        .post("https://notes-api.girlsgoit.org/login/", dataExample)
        .then(function (response) {
          console.log(response);
          window.localStorage.setItem("notes-user-key", response.data.token);
          that.$router.push("/ru/dashboard");
        })
        .catch((error) => {
          alert("Пользователь не найден. Можете зарегистрироваться!");
          console.log(error.message);
        });
    },
    goToRegistration() {
      this.$router.push("/ru/register");
    },
  },
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}
a {
  text-decoration: none;
}

section {
  height: 100vh;
  background-color: #eff3f6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.container {
  background-color: #fff;
  width: 352px;
  height: 338px;
}
.container > img {
  margin: 25px 0px 9.5px 0px;
}

.form_container {
}
form > input {
  margin: 9.5px 0px 9.5px 0px;
  padding-left: 21px;
  width: 270px;
  height: 54px;
  border: solid 1px #dfdfdf;
  border-radius: 5px;
  /* color: #a9a9a9; */
}
.buttons {
  text-transform: uppercase;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin-top: 20px;
}
.buttons > button {
  text-transform: uppercase;
  background-color: #2ea1f8;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 12px 16px 11px 17px;
  width: 140px;
}
.buttons > a {
  color: #278df6;
  font-size: 13px;
}
</style>