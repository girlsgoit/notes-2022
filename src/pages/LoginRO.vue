<template>
  <input type="text" placeholder="Username" v-model="userName" />
  <input type="password" placeholder="password" v-model="password" />
  <button @click="startLogin()">Login</button>
  <button @click="goToRegistration()">Register</button>
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

<style scoped>
</style>


