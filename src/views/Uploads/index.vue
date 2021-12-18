<template>
  <div class="upload-page">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="page-title">Uploade Gif Here</h1>
        </div>
        <div class="col-md-12">
          <UploadGif />
        </div>
        <div class="col-md-12">
          <hr class="upload-page__separator-line" />
        </div>
        <div class="col-md-12">
          <h1 class="page-title">Uploaded Gifs</h1>
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
  import UploadGif from "@/components/UploadsPage/UploadGif";
  export default {
    name: "upload-page",
    components: {
      GifsGrid,
      UploadGif,
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
          const gifsIds = localStorage.getItem("uploaded_gifs_ids");
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
  .upload-page {
    margin-top: 1.4rem;
    color: white;
    &__separator-line {
      margin: 1rem 0;
      border-color: white;
    }
  }
</style>
