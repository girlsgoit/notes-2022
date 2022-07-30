<template>
  <section>
    <div class="container container_forms">
      <img src="/assets/logo.svg" alt="logo" />
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
          v-model="confirmpassword"
        />
        <br />
        <div class="buttons">
          <button
            name="register"
            type="submit"
            @click.prevent="startRegister()"
          >
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
      username: "",
      fullname: "",
      password: "",
      confirmpassword: "",
      users: [],
      user: {},
    };
  },

  methods: {
    async startRegister() {
      if (
        this.username === "" ||
        this.fullname === "" ||
        this.password === "" ||
        this.confirmpassword === ""
      ) {
        alert("Completați toate golurile!");
        return;
      } else if (this.confirmpassword !== this.password) {
        alert("Parolele nu se potrivesc!");
        return;
      } else {
        const data = {
          username: this.username,
          password: this.password,
          first_name: this.fullname,
        };
        const login_data = {
          username: this.username,
          password: this.password,
        };
        console.log(data);
        try {
          const profile = await axios.post(
            "https://notes-api.girlsgoit.org/register/",
            data
          );
          const login_response = await axios.post(
            "https://notes-api.girlsgoit.org/login/",
            login_data
          );
          console.log(profile);
          console.log(login_response);
          window.localStorage.setItem(
            "notes-user-key",
            login_response.data.token
          );
          this.$router.push("/ro/dashboard");
        } catch (e) {
          console.error(e);
          alert("Utilizatorul deja exista");
        }
      }
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