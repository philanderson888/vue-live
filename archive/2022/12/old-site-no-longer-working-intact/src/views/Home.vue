<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Phil Anderson's live VueJS Teaching App ..</h1>
      </div>
      <img
        id="coffeeMug"
        alt="I love Vue"
        src="https://images-na.ssl-images-amazon.com/images/I/71%2BeQA4PwhL._SL1500_.jpg"
      />
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <p>
        This site uses
        <strong>Bulma</strong> for CSS styling
      </p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
