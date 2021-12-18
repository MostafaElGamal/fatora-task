<template>
  <div class="search-page">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="page-title">
            {{ searchText }}
          </h1>
        </div>
        <div class="col-md-12 text-center" v-if="loadingStatus">
          <img src="@/assets/loading.gif" alt="" />
        </div>
        <div class="col-md-12" v-else-if="gifsData.length">
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
    name: "search-page",

    components: {
      GifsGrid,
    },

    data() {
      return {
        gifsData: [],
        loadingStatus: true,
      };
    },

    computed: {
      paramSearchText() {
        return this.$router.history.current.params.text;
      },
      searchText() {
        return this.$store.getters.getSearchText || this.paramSearchText;
      },
    },

    mounted() {
      this.getData();
      this.onScrollEvent();
    },

    methods: {
      async getData() {
        try {
          this.loadingStatus = true;
          const gifsRes = await this.$api.get("/gifs/search", {
            params: {
              q: this.searchText,
            },
          });
          const gifsArray = gifsRes.data.data;
          gifsArray.map((ele) => {
            this.gifsData.push(ele);
          });
          this.loadingStatus = false;
        } catch (error) {
          console.log(error);
        }
      },
      scrollFunHandler() {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.currentPage = this.currentPage + 25;
          this.getData();
        }
      },
      onScrollEvent() {
        window.addEventListener("scroll", this.scrollFunHandler);
      },
    },

    watch: {
      searchText: function () {
        this.getData();
      },
    },

    beforeDestroy() {
      window.removeEventListener("scroll", this.scrollFunHandler);
    },
  };
</script>
