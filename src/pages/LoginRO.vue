<template>
  <div class="logare">
    <img src="/assets/logo.svg" />
    <input
      type="text"
      placeholder="Nume de utilizator"
      v-model="userName"
      required
    />
    <input type="password" placeholder="Parola" v-model="password" required />
    <a class="login-button" href="#" @click.prevent="startLogin()">Logare</a>
    <a class="register-button" href="#" @click.prevent="goToRegistration()"
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
      response: {},
    };
  },

  methods: {
    startLogin: async function () {
      if (this.userName === "" && this.password === "") {
        alert("Completați numele de utilizator și parola!");
      } else if (this.userName === "" && this.password !== "") {
        alert("Completați numele de utilizator!");
      } else if (this.userName !== "" && this.password === "") {
        alert("Completați parola!");
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
          that.$router.push("/ro/dashboard");
        })
        .catch((error) => {
          alert("Utilizatorul nu este găsit. Vă puteți înregistra!");
          console.log(error.message);
        });
    },
    goToRegistration() {
      this.$router.push("/ro/register");
    },
  },
};
</script>

<style scope>
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
  max-width: 360px;
  border-radius: 5px;
  background: white;
  box-sizing: border-box;
  padding: 30px;
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
  border-radius: 5px;
  padding: 12px 5px;
  outline: none;
  border: 1px solid #dfdfdf;
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
  border-radius: 4px;
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


