<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input type="text" v-model="name" placeholder="Name" />
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Register</button>
      <button @click="goToLogin">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

@Component
export default class Register extends Vue {
  name: string = ''
  email: string = ''
  password: string = ''

  register() {
    // Your register logic here
  }

  goToLogin() {
    this.$router.push('/login')
  }
}
</script>
