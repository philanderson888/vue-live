<template>
  <div>
    <!-- #region navbar -->
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/about">About</router-link>
          <a href="https://philanderson.uk" class="navbar-item">Blog</a>
          <router-link class="navbar-item" to="/displaycards">Display Cards</router-link>
          <router-link class="navbar-item" to="/shufflecards">Shuffle Cards</router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Teaching Materials</a>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="https://github.com/philanderson888/course-notes">Course Notes</a>
              <hr class="navbar-divider" />
              <router-link class="navbar-item" to="/vuetutorials">Vue Tutorials</router-link>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/bulmatestpage">Bulma Test Page</router-link>
              <hr class="navbar-divider" />
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class = "button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- #endregion navbar -->

    <router-view />
    <HelloWorld msg = "Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<!-- #region typscript -->
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component ({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>
<!-- #endregion typescript -->

<!-- #region global css -->
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#coffeeMug {
  width: 30vw;
}
.first-paragraph-upper-margin {
  margin-top: 5vh;
  font-size:1.5em;
  font-weight: 300;
}
.slightly-strong {
  font-weight: 500;
}
</style>

<!-- #endregion -->
