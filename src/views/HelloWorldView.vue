<script setup lang="ts">
import HelloWorld2 from "../components/HelloWorld2.vue";



</script>

<template>
  <main>   
  <HelloWorld2 
    msg="This is a prop passed in to the component" 
    rawHtml='<span style="color: red">This text is red</span>'
    userId='57'
  />
  </main>
</template>
