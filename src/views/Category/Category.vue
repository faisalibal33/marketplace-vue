<template>
  <div class="c-container">
    <h2>Category</h2>
    <div class="categoryView">
      <div v-for="category of categories" :key="category.id">
        <CategoryBox :category="category" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CategoryBox from "../../components/category/CategoryBox.vue";
export default {
  name: "Category",
  components: { CategoryBox },
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    async getCategories() {
      await axios
        .get("https://limitless-lake-55070.herokuapp.com/category/")
        .then((res) => (this.categories = res.data))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>

<!-- style -->
<style>
.c-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 1300px;
}

.categoryView {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 20px;
}
</style>
