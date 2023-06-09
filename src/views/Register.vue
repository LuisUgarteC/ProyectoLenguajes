<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        ¿No tienes una cuenta?
        <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
      </p>
      <h2>Crea tu cuenta en 𐐘❤ඞා</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Nombre" v-model="firstName" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Apellido" v-model="lastName" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Nombre de usuario" v-model="username" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Correo" v-model="email" />
          <email class="icon" />
        </div>
        <div class="input">
          <input type="password" placeholder="Contraseña" v-model="password" />
          <password class="icon" />
        </div>
      </div>
      <button>Registrarse</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import password from "../assets/Icons/lock-alt-solid.svg";
import user from "../assets/Icons/user-alt-light.svg";
export default {
  name: "Register",
  components: {
    email,
    password,
    user
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },  
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>