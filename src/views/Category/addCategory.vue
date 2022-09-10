<template>
  <div class="containerCategory">
    <div class="addCategory">
      <div class="titleCategory">
        <h3>Add Category</h3>
      </div>
      <div class="formWrapper">
        <form class="formWrapper">
          <div class="formInput">
            <input
              type="text"
              class="f-input"
              placeholder="Category Name"
              v-model="categoryName"
            />
          </div>
          <div class="formInput">
            <textarea
              type="text"
              class="f-textArea"
              placeholder="Category Description"
              v-model="description"
            />
          </div>
          <div class="formInput">
            <input
              type="text"
              class="f-input"
              placeholder="Category Image"
              v-model="imageUrl"
            />
          </div>
          <div class="buttonWrapper">
            <button type="submit" class="button-c" @click="addCategory">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import sweetalert from "sweetalert";
import axios from "axios";

export default {
  data() {
    return {
      categoryName: "",
      description: "",
      imageUrl: "",
    };
  },
  methods: {
    addCategory(e) {
      e.preventDefault();
      console.log(this.categoryName, this.description, this.imageUrl);
      const newCategory = {
        categoryName: this.categoryName,
        description: this.description,
        imageUrl: this.imageUrl,
      };

      const urlBase = "https://limitless-lake-55070.herokuapp.com";
      axios
        .post(`${urlBase}/category/create`, newCategory)
        .then(() => {
          sweetalert({
            text: "Category Added Succesfully",
            icon: "success",
          });
        })
        .catch((err) => {
          console.log("adayang salah");
          console.log(err);
        });
    },
  },
};
</script>

<style>
.containerCategory {
  max-width: 1400;
  height: 100vh;
  position: relative;
}

.addCategory {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid #aaaaaa;
  width: 500px;
  padding: 20px;
  top: 50%;
  transform: translateY(50%);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.formWrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  width: 500px;
  height: fit-content;
  justify-content: center;
  align-items: center;
}

.formInput {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
}

.f-input {
  border-radius: 5px;
  height: 40px;
  border: 1px solid #aaaaaa;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.f-textArea {
  border-radius: 5px;
  border: 1px solid #aaaaaa;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.f-input:hover {
  border: 1px solid rgb(75, 75, 197);
}

.buttonWrapper {
  height: 50px;
}

.button-c {
  position: absolute;
  justify-content: flex-end;
  border-radius: 3px;
  border: 1px solid rgb(75, 75, 197);
  background-color: rgb(75, 75, 197);
  font-size: 15px;
  padding: 7px 20px;
  color: white;
  border: none;
  bottom: 10px;
  right: 100px;
  transition: 0.3s all ease;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.button-c:hover {
  background-color: white;
  color: rgb(75, 75, 197);
  border: 1px solid rgb(75, 75, 197);
}
</style>
