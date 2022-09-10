<template>
  <div class="categoryCard">
    <div class="cardImg">
      <img :src="category.imageUrl" alt="" />
    </div>
    <div class="categoryName">
      <h1>{{ category.categoryName }}</h1>
    </div>
    <div class="categoryDesc">
      <p>{{ category.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryBox",
  props: ["category"],
  methods: {},
};
</script>

<style>
.categoryCard {
  border: 1px solid blue;
  height: 300px;
  width: 300px;
}

.cardImg {
  width: 100%;
  height: 50%;
}

.cardImg img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
