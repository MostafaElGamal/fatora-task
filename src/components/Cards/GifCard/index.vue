<template>
  <div class="gif-card">
    <picture class="gif-card__picture">
      <source type="image/webp" :srcset="gifData.images.downsized.url" />
      <img
        class="gif-card__img"
        :width="gifData.images.downsized.width"
        :height="gifData.images.downsized.height"
        :style="{ background: `#${randomColor}` }"
      />
    </picture>
    <button
      class="gif-card__add-to-fav"
      :class="{ 'gif-card__add-to-fav--active': checkIfFav || activeFav }"
      @click="addToFav"
    >
      <i class="fas fa-heart"></i>
    </button>
  </div>
</template>

<script>
  export default {
    name: "gif-card",
    props: {
      gifData: {
        type: Object,
        default: () => [],
      },
    },
    data() {
      return {
        activeFav: false,
      };
    },
    computed: {
      checkIfFav() {
        const favGifsIds = localStorage.getItem("fav_gifs_ids");
        if (favGifsIds) {
          return favGifsIds.includes(this.gifData.id);
        }
      },
      randomColor() {
        return Math.floor(Math.random() * 16777215).toString(16);
      },
    },
    methods: {
      addToFav() {
        this.activeFav = true;
        if (!this.checkIfFav) {
          this.$storeArrayInLocalStorage(this.gifData.id, "fav_gifs_ids");
        }
      },
    },
  };
</script>
<style lang="scss">
  .gif-card {
    margin-bottom: 1rem;
    position: relative;
    break-inside: avoid-column;
    &:hover {
      .gif-card__add-to-fav {
        opacity: 1;
      }
    }
    &__img {
      width: 100%;
      object-fit: cover;
    }
    &__add-to-fav {
      position: absolute;
      top: 10px;
      right: 10px;
      border: 0;
      background: transparent;
      color: white;
      font-size: 1.7rem;
      opacity: 0;
      transition: all 0.3s;
      &--active,
      &:hover {
        color: red;
      }
    }
  }
</style>
