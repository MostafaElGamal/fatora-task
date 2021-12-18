<template>
  <div class="favroite-page">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="page-title">Favroite Gifs</h1>
        </div>
        <div class="col-md-12" v-if="gifsData.length">
          <GifsGrid :gifsArray="gifsData" />
        </div>
        <div class="col-md-12" v-else>
          <h1 class="text-center">No Data Found</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import GifsGrid from "@/components/Partials/GifsGrid";
  export default {
    name: "favroite-page",
    components: {
      GifsGrid,
    },
    data() {
      return {
        gifsData: [],
      };
    },
    mounted() {
      this.getData();
    },

    methods: {
      async getData() {
        try {
          const gifsIds = localStorage.getItem("fav_gifs_ids");
          if (gifsIds) {
            const gifsRes = await this.$api.get("/gifs", {
              params: {
                ids: gifsIds,
              },
            });
            const gifsArray = gifsRes.data.data;

            gifsArray.map((ele) => {
              this.gifsData.push(ele);
            });
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
</script>
<style lang="scss">
  .favroite-page {
    margin-top: 1.4rem;
    color: white;
  }
</style>
