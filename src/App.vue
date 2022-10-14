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
              <a class="navbar-item" href="https://gifted-haibt-065acd.netlify.app">HTML Learning</a>
              <a class="navbar-item" href="https://gifted-haibt-065acd.netlify.app/#sectionCSS">CSS Learning</a>
              <a class="navbar-item" href="https://gifted-haibt-065acd.netlify.app/#sectionJavascript">Javascript Learning</a>
              <a class="navbar-item" href="https://gifted-haibt-065acd.netlify.app/#sectionCanvas">Canvas Learning</a>
              <a class="navbar-item" href="https://gifted-haibt-065acd.netlify.app/#sectionSVG">SVG Learning</a>
              <a class="navbar-item" href="https://htmlpreview.github.io/?https://github.com/philanderson888/bootstrap/blob/master/bootstrap_01.htm">Bootstrap Learning</a>
              <a class="navbar-item" href="https://mevn-students-app.netlify.app">Mongo Students App</a>
              <a class="navbar-item" href="https://mevn-login-app.netlify.app">MEVN Full Stack App with Mongo Database, JWT User Registration And Login with full CRUD Todo List</a>    
              <a class="navbar-item" href="https://mevn-login-api.netlify.app">MEVN Mongo Back End API with NodeJS</a>    
              <a class="navbar-item" href="https://nervous-pare-b73c83.netlify.app/blog">Testimony App (built in NuxtJS)</a>
              <a class="navbar-item" href="https://jesusislord.uk">Jesus Is Lord Shopping Site (built by my daughter aged 11)</a>
              <hr class="navbar-divider" />
              <a class="navbar-item navbar-bold">Node</a>
              <a class="navbar-item" href="https://epic-hamilton-f35937.netlify.app/">VueJS with Bulma CSS (This site)</a>
              <a class="navbar-item" href="https://strong-lebkuchen-5f4a43.netlify.app">Tailwind CSS</a>
              <hr class="navbar-divider" />
              <a class="navbar-item navbar-bold">Static Site</a>
              <a class="navbar-item" href="https://philanderson.uk">PhilAnderson.uk Contentful Static Site (need to fix build)</a>
              <hr class="navbar-divider" />
              <a class="navbar-item navbar-bold">Demo Sites</a>
              <a class="navbar-item" href="https://philanderson888-deno.deno.dev">Deno Demo Site</a>
              <a class="navbar-item" href="https://svelte-hello-world-01.netlify.app/">Svelte Demo Site</a>
              <hr class="navbar-divider" />
              <a class="navbar-item navbar-bold">GitHub</a>
              <a class="navbar-item" href="https://github.com/philanderson888/course-notes">Course Notes</a>
              <router-link class="navbar-item" to="/vuetutorials">Vue Tutorials</router-link>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>
            <div class="navbar-dropdown">
              <hr class="navbar-divider" />
              <a class="navbar-item navbar-bold">Serverless Functions</a>
              <a class="navbar-item" href="https://github.com/philanderson888/netlify-express">Serverless Functions On Netlify - GitHub Code</a>
              <a class="navbar-item" href="https://netlify-express-serverless.netlify.app/.netlify/functions/server">Serverless Functions On Netlify - Live Site</a>
              <hr class="navbar-divider" />
              <a class="navbar-item navbar-bold">Bulma CSS</a>
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

.navbar-bold{
  font-weight: bold;
}
</style>


.
<!-- #endregion -->
