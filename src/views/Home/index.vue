<template>
  <div class="home-page">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <header class="home-page__header">
            <h1 class="home-page__title">Trending Gifs</h1>
            <div class="home-page__dropdown">
              <button
                class="home-page__dropdown-btn"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span> Sort By:</span>
                <span class="home-page__dropdown-value">
                  {{ sortType }}
                </span>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#" @click="sortType = 'newest'">
                  Newest
                </a>
                <a class="dropdown-item" href="#" @click="sortType = 'oldest'">
                  Oldest
                </a>
              </div>
            </div>
          </header>
        </div>
        <div class="col-md-12">
          <GifsGrid :gifsArray="sortedGifsData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import GifsGrid from "@/components/Partials/GifsGrid";
  export default {
    name: "home-page",

    components: {
      GifsGrid,
    },

    data() {
      return {
        gifsData: [],
        sortType: "newest",
        currentPage: 25,
      };
    },

    mounted() {
      this.getData();
      this.onScrollEvent();
    },

    computed: {
      sortedGifsData() {
        return this.sortData(this.gifsData);
      },
    },

    methods: {
      async getData() {
        try {
          const gifsRes = await this.$api.get("/gifs/trending", {
            params: {
              offset: this.currentPage,
            },
          });
          const gifsArray = gifsRes.data.data;

          gifsArray.map((ele) => {
            this.gifsData.push(ele);
          });
        } catch (error) {
          console.log(error);
        }
      },

      sortData(array) {
        let sortedArray;
        if (this.sortType == "newest") {
          sortedArray = array.sort((a, b) => {
            return new Date(b.import_datetime) - new Date(a.import_datetime);
          });
        } else {
          sortedArray = array.sort((a, b) => {
            return new Date(a.import_datetime) - new Date(b.import_datetime);
          });
        }
        sortedArray.map((ele) => {
          console.log(ele.import_datetime);
        });
        return sortedArray;
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
      sortType: function (val) {
        this.getData();
      },
    },

    beforeDestroy() {
      window.removeEventListener("scroll", this.scrollFunHandler);
    },
  };
</script>
<style lang="scss">
  .home-page {
    margin-top: 1.4rem;
    &__title {
      margin: 2rem 0;
      color: white;
      font-weight: bold;
    }
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__dropdown-value {
      text-transform: capitalize;
    }
    &__dropdown-btn {
      border: 0;
      background: transparent;
      color: rgb(166, 166, 166);
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
</style>
