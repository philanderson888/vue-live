<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    
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

    <nav class="navbar" role="navigation" aria-label="main navigation">

      <div id="navbarBasicExample" class="navbar-menu">

        <div class="navbar-start">

          <RouterLink class="navbar-item navbar-bold" to="/">Home</RouterLink>
          <RouterLink class="navbar-item navbar-bold" to="/about3">About</RouterLink>
          <RouterLink class="navbar-item navbar-bold" to="/viewtutorials">View Tutorials</RouterLink>
          <a class="navbar-item navbar-bold" href="https://philanderson.uk" >Blog</a>
          <RouterLink class="navbar-item navbar-bold" to="/helloWorld">Basic Features</RouterLink>
          
          <hr class="navbar-divider" />

          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-dropdown">
              <a class="navbar-link navbar-item navbar-bold" href="https://gifted-haibt-065acd.netlify.app">Learning</a>
              <a class="navbar-item" href="https://gifted-haibt-065acd.netlify.app">HTML Learning</a>
              <a class="navbar-item" href="https://gifted-haibt-065acd.netlify.app/#sectionCSS">CSS Learning</a>
              <a class="navbar-item" href="https://gifted-haibt-065acd.netlify.app/#sectionJavascript">Javascript Learning</a>
              <a class="navbar-item" href="https://gifted-haibt-065acd.netlify.app/#sectionCanvas">Canvas Learning</a>
              <a class="navbar-item" href="https://gifted-haibt-065acd.netlify.app/#sectionSVG">SVG Learning</a>
              <a class="navbar-item" href="https://htmlpreview.github.io/?https://github.com/philanderson888/bootstrap/blob/master/bootstrap_01.htm">Bootstrap Learning</a>

              <hr class="navbar-divider" />
              <a class="navbar-item navbar-bold" href="https://mevn-students-app.netlify.app">MEVN</a>
              <a class="navbar-item" href="https://mevn-students-app.netlify.app">Mongo Students App</a>
              <a class="navbar-item" href="https://mevn-login-app.netlify.app">MEVN Full Stack App with Mongo Database, JWT User Registration And Login with full CRUD Todo List</a>    
              <a class="navbar-item" href="https://mevn-login-api.netlify.app">MEVN Mongo Back End API with NodeJS</a>    

              <hr class="navbar-divider" />
              <a class="navbar-item navbar-bold" href="https://nervous-pare-b73c83.netlify.app/blog">Testimonies</a>
              <a class="navbar-item" href="https://nervous-pare-b73c83.netlify.app/blog">Testimony App (built in NuxtJS)</a>

              <hr class="navbar-divider" />
              <a class="navbar-item navbar-bold" href="https://jesusislord.uk">Shopping</a>
              <a class="navbar-item" href="https://jesusislord.uk">Jesus Is Lord Shopping Site (built by my daughter aged 11)</a>

              <hr class="navbar-divider" />
              <a class="navbar-item navbar-bold">Node</a>
              <a class="navbar-item" href="  <li className = {styles.navigationItem}><a href='https://vue-js-demo.netlify.app'>VueJS with Bulma CSS</a></li>">VueJS with Bulma CSS (This site)</a>
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
            <hr class="navbar-divider" />
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-dropdown">
              <a class="navbar-item navbar-bold">Serverless</a>
              <a class="navbar-item" href="https://github.com/philanderson888/serverless-test">Serverless Functions On Netlify - GitHub Code - One I Built From Scratch</a>
              <a class="navbar-item" href="https://serverless-api-demo.netlify.app/.netlify/functions/api">Serverless Functions On Netlify - Live API Endpoint - One I Built From Scratch</a>
              <a class="navbar-item" href="https://github.com/philanderson888/netlify-express">Serverless Functions On Netlify - GitHub Code - Sample Cloned From The Internet</a>
              <a class="navbar-item" href="https://netlify-express-serverless.netlify.app/.netlify/functions/server">Serverless Functions On Netlify - Live Site - Sample Cloned From The Internet</a>
              <hr class="navbar-divider" />
              <a class="navbar-item navbar-bold">Bulma CSS</a>
              <router-link class="navbar-item" to="/bulmatestpage">Bulma Test Page</router-link>
              <hr class="navbar-divider" />
            </div>
          </div>
          <div>
            <RouterLink class="navbar-item" to="/about2">About2</RouterLink>
            <RouterLink class="navbar-item" to="/about">About</RouterLink>  
          </div>
          <hr class="navbar-divider" />
        </div>       
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>

    </nav>

    
  </header>

  <RouterView />
</template>




<style>

#coffeeMug {
  width: 10vw;
}

.slightly-strong {
  font-weight: 500;
}

.navbar-bold{
  font-weight: bold;
}


/* from my old app so some of this may be irrelevant or wrong! */

/*
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.first-paragraph-upper-margin {
  margin-top: 5vh;
  font-size:1.5em;
  font-weight: 300;
}



*/

</style>






<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>


