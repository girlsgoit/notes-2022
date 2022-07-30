<template>
  <div class="logare">
    <img src="../assets/notes.png" />
    <input
      type="text"
      placeholder="Nume de utilizator"
      v-model="userName"
      required
    />
    <input type="password" placeholder="Parola" v-model="password" required />
    <a class="login-button" href="#" @click="startLogin()">Logare</a>
    <a class="register-button" href="#" @click="goToRegistration()"
      >Înregistrare</a
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginRO",
  data: function () {
    return {
      userName: "",
      password: "",
      users: [],
      user: {},
    };
  },

  methods: {
    async startLogin() {
      if (this.userName == "" && this.password == "") {
        alert("Completați login-ul și parola!");
      } else if (this.userName == "" && this.password !== "") {
        alert("Completați login-ul!");
      } else if (this.userName !== "" && this.password == "") {
        alert("Completați parola!");
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
            this.$router.push(`/ro/note/${this.user.id}`);
          } else {
            alert("Parolă greșită!");
          }
        } else {
          alert("User-ul nu există! Vă puteți înregistra.");
        }
      }
    },
    async goToRegistration() {
      this.$router.push(`/ro/register`);
    },
  },
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif, Lobster;
  background-color: #f2f2f2;
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 125px;
}

.logare {
  text-align: center;
  max-width: 370px;
  border-radius: 20px;
  border: 1.5px solid #4567ff;
  background: white;
  box-sizing: border-box;
  padding: 30px;
  box-shadow: 5px 10px #bccacc;
}
.logare h2 {
  font-family: Lobster;
  text-align: center;
  color: #1b81e0;
  font-size: 40px;
}
input[type="text"],
input[type="password"] {
  width: 90%;
  margin: 7px auto;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 12px 5px;
  outline: none;
  border: 1px solid #666666;
  color: black;
}
.login-button {
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
.register-button {
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


