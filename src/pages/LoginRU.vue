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
          <button name="login" type="" @click="startLogin($event)">Вход</button>
          <a href="#" @click="goToRegistration($event)">Регистрация</a>
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
    };
  },

  methods: {
    async startLogin(event) {
      if (this.userName == "" && this.password == "") {
        alert("Заполните логин и пароль!");
      } else if (this.userName == "" && this.password !== "") {
        alert("Заполните логин!");
      } else if (this.userName !== "" && this.password == "") {
        alert("Заполните пароль!");
      } else {
        const profile = await axios.get("api");
        this.users = profile.data;
        const isFound = this.users.some((element) => {
          if (element.username === this.userName) {
            this.user = element;
            return true;
          }
          return false;
        });
        if (isFound) {
          if (this.user.password === this.password) {
            this.$router.push(`/ru/note/${this.user.id}`);
          } else {
            alert("Неверный пароль!");
          }
        } else {
          alert("Пользователь не найден .Можете зарегистрироваться!");
        }
      }
    },
    async goToRegistration(event) {
      this.$router.push(`/ru/register`);
    },
  },
};
</script>

<style>
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
