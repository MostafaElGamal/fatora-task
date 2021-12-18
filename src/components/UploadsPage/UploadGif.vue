<template>
  <form class="uploaded-gif" id="uploadForm">
    <input type="file" id="upload" hidden @change="uploadContent" name="file" />
    <label
      for="upload"
      class="uploaded-gif__input-label"
      :class="{ 'uploaded-gif__input-label--success': uploadStatus }"
    >
      {{ uploadStatus ? "Uploaded Successfully" : "Upload Your Gif" }}
    </label>
    <p class="uploaded-gif__errors">
      {{ errors.description }}
    </p>
  </form>
</template>

<script>
  export default {
    name: "uploaded-gif",
    data() {
      return {
        errors: {},
        uploadStatus: false,
      };
    },
    methods: {
      async uploadContent() {
        try {
          this.uploadStatus = false;
          const uploadForm = document.getElementById("uploadForm");
          const formData = new FormData(uploadForm);
          formData.append("username", "fatora-app");
          const uploadRes = await this.$uploadApi.post("/gifs", formData);
          this.uploadStatus = true;
          this.$storeArrayInLocalStorage(
            uploadRes.data.data.id,
            "uploaded_gifs_ids",
          );
          this.errors = {};
        } catch (errors) {
          this.errors = errors.response.data.meta;
        }
      },
    },
  };
</script>
<style lang="scss">
  .uploaded-gif {
    margin: 2rem 0;
    &__input-label {
      display: block;
      background: var(--default-color);
      margin: 0 auto;
      color: white;
      width: 50%;
      padding: 0.8rem;
      border-radius: 0.5rem;
      cursor: pointer;
      margin-top: 1rem;
      font-size: 2rem;
      text-align: center;
      &--success {
        background: #d4edda;
        color: #155724;
      }
    }
    &__errors {
      text-align: center;
      color: red;
      font-size: 1.4rem;
      margin: 0;
    }
  }
</style>
