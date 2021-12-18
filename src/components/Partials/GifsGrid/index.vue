<template>
  <div class="gif-grid">
    <GifCard
      v-for="(gifData, i) in gifsArray"
      :key="`gif_card_${i}`"
      :gifData="gifData"
    />
  </div>
</template>

<script>
  import VueMasonryWall from "vue-masonry-wall";

  import GifCard from "@/components/Cards/GifCard";
  export default {
    name: "gif-grid",
    components: {
      GifCard,
      VueMasonryWall,
    },
    props: {
      gifsArray: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        options: {},
      };
    },
  };
</script>
<style lang="scss">
  .gif-grid {
    columns: 250px;
    column-gap: 20px;
  }
</style>
