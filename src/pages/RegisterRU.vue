<template>
  <section>
    <div class="container container_forms">
      <img src="../assets/notes.png" alt="logo" />
      <form action="" name="register" class="form_container">
        <input
          type="text"
          name="userName"
          placeholder="Имя пользователя"
          v-model="username"
        />
        <input
          type="text"
          name="fullName"
          placeholder="Полное имя"
          v-model="fullname"
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          v-model="password"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Подтвердить пароль"
          v-model="confirmpass"
        />
        <br />
        <div class="buttons">
          <button name="register" type="submit" @click="startRegister()">
            Регистрация
          </button>
          <a href="#/ru/login">Вход</a>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "RegisterRU",
  data: function () {
    return {
      username: "",
      fullname: "",
      password: "",
      confirmpassword: "",
      users: [],
      user: {},
    };
  },

  methods: {
    startRegister() {
      if (
        this.username == "" ||
        this.fullname == "" ||
        this.password == "" ||
        this.confirmpassword == ""
      ) {
        alert("Заполните все пробелы!");
      } else if (this.confirmpassword !== this.password) {
        alert("Пароли не совпадают!");
      }
    },
    async register() {
      const profile = await axios.get("api");
      this.users = profile.data;
      const isFound = this.users.some((element) => {
        if (element.username === this.username) {
          this.user = element;
          return true;
        }
        return false;
      });
      if (isFound) {
        alert(
          "Такой логин уже есть! Выберите другое имя пользователя или войдите в систему!"
        );
      } else {
        const data = { username: this.username, password: this.password };
        const newuser = await axios.post(/*va fi api,*/ data);
        this.users.push(data);
        this.$router.push(`/ro/note/${this.user.id}`);
      }
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
  height: 473px;
}

.container > img {
  margin: 25px 0px 9.5px 0px;
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