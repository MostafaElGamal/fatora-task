<template>
  <div class="nav-bar">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="nav-bar__body">
            <div class="nav-bar__info">
              <router-link to="/">
                <img src="@/assets/logo.svg" alt="" class="nav-bar__logo" />
              </router-link>
              <ul class="nav-bar__links-list">
                <li class="nav-bar__link-item">
                  <router-link to="/favroite" class="nav-bar__link">
                    <span> Favroite </span>
                  </router-link>
                </li>

                <li class="nav-bar__link-item mx-3">
                  <router-link to="/uploads" class="nav-bar__link">
                    <span> Uploads </span>
                  </router-link>
                </li>
              </ul>
            </div>
            <form class="nav-bar__form" @submit.prevent="searchHandler">
              <input
                type="text"
                class="nav-bar__input"
                placeholder="Search Here"
                v-model="searchText"
              />
              <button class="nav-bar__btn">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nav-bar",
    data() {
      return {
        searchText: "",
      };
    },
    methods: {
      searchHandler() {
        this.$store.commit("setSearchText", this.searchText);
        this.$router.push(`/search/${this.searchText}`);
      },
    },
  };
</script>
<style lang="scss">
  .nav-bar {
    width: 100%;
    &__info {
      display: flex;
      align-items: center;
    }
    &__links-list {
      display: flex;
      align-items: center;
      padding: 0;
      list-style: none;
      color: white;
    }
    &__link-item {
      position: relative;
      z-index: 2;
      padding: 0.4rem 1rem;

      span {
        z-index: 3;
        position: relative;
      }
    }
    &__link {
      color: white;
      font-size: 1.5rem;
      font-weight: 600;
      &::after {
        content: "";
        bottom: 0;
        height: 3px;
        z-index: 1;
        transition: all 0.3s;
        width: 100%;
        left: 0;
        position: absolute;
        background: var(--default-color);
      }
      &:hover {
        color: white;
        text-decoration: none;
        &::after {
          height: 100%;
        }
      }
    }
    &__logo {
      height: 6.5rem;
    }
    &__form {
      display: flex;
    }
    &__input {
      width: 100%;
      border: 0;
      margin: 0;
      height: 5.2rem;
      font-size: 1.8rem;
      padding: 0 1rem;
    }
    &__btn {
      background: var(--default-color);
      border: 0;
      color: white;
      font-size: 2rem;
      padding: 0 2rem;
      font-family: 600;
    }
  }

  @media (max-width: 576px) {
    .nav-bar {
      &__logo {
        height: 4.5rem;
      }
    }
  }
</style>
