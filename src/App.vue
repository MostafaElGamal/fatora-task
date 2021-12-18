<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
  import Navbar from "@/components/Layout/Navbar";

  export default {
    name: "App",
    components: {
      Navbar,
    },
  };
</script>

<style lang="scss">
  :root {
    --default-color: linear-gradient(
      45deg,
      rgb(153, 51, 255) 0%,
      rgb(255, 102, 102) 100%
    );
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    background-color: #121119 !important;
  }
  input:focus {
    outline: 0;
  }
  .page-title {
    margin: 2rem 0;
    color: white;
    font-weight: bold;
  }
</style>
