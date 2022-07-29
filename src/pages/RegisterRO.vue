<template>
  <section>
    <div class="container container_forms">
      <!-- <img src="./assets/notes.png" alt="logo" /> -->
      <form action="" name="register" class="form_container">
        <input
          type="text"
          name="userName"
          placeholder="Nume de utilizator"
          v-model="username"
        />
        <input
          type="text"
          name="fullName"
          placeholder="Numele Prenumele"
          v-model="fullname"
        />
        <input
          type="password"
          name="password"
          placeholder="Parola"
          v-model="password"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Repetă parola"
          v-model="confirmpass"
        />
        <br />
        <div class="buttons">
          <button name="register" type="submit" @click="startRegister()">
            Înregistrare
          </button>
          <a href="#/ro/login">Logare</a>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "RegisterRO",
  data: function () {
    return {
      username: String,
      fullname: String,
      password: String,
      confirmpassword: String,
      users: [],
      user: Object,
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
        alert("Completați toate golurile!");
      } else if (this.confirmpassword !== this.password) {
        alert("Parolele nu se potrivesc!");
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
        alert("Acest utilizator exista deja!");
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

<style scoped>
body {
  font-family: "Roboto", sans-serif, Lobster;
  background-color: #f2f2f2;
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 125px;
}
.register {
  text-align: center;
  max-width: 400px;
  border-radius: 20px;
  border: 1.5px solid #4567ff;
  background: white;
  box-sizing: border-box;
  padding: 30px;
  box-shadow: 5px 10px #bccacc;
}
.register h2 {
  font-family: Lobster;
  text-align: center;
  color: #1b81e0;
  font-size: 40px;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  margin: 7px auto;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 12px 5px;
  outline: none;
  border: 1px solid #666666;
  color: black;
}
.register-button {
  display: inline-block;
  font-size: 17px;
  padding: 10px;
  margin-top: 20px;
  margin-left: 45px;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 3px;
  background-color: #1b81e0;
  color: white;
  transition: 0.7s;
}
.login-button {
  display: inline-block;
  font-size: 17px;
  padding: 10px;
  margin-top: 20px;
  margin-left: 45px;
  margin-right: 30px;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #2876bf;
  transition: 0.5s;
}
</style>