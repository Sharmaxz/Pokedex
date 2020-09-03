<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: { }
}
</script>

<style>

@font-face {
  font-family: "Pokemon";
  src: url("~@/assets/fonts/Pokemon-Solid.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

body {
  background-color: #282828;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

input::-webkit-input-placeholder{
  color:white;
  opacity: .5;
}

.loader {
  border: 10px solid #282828;
  border-radius: 50%;
  border-top: 12px solid red;
  width: 80px;
  height: 80px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


</style>
