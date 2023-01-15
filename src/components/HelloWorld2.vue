<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import { ref, onMounted } from 'vue';

defineProps<{
  msg: string;
  rawHtml: string;
  userId: string;
}>();

const counter3 = ref(0);
const string3 = ref(1);

onMounted(() => {
  console.log(`the initial value of counter3 is ${counter3.value}`)
  console.log(`the initial value of string3 is ${string3.value}`)
});

function increment() {
  counter3.value++;
}

</script>


<template>
  <WelcomeItem>
    <template #heading>Hello World Basic Vue Features</template>
    <div>
      <h3 class="bold">Props</h3>
      <p>{{ msg }}</p>
    </div>
    <div>
      <h3 class="bold">v-html renders raw html</h3>
      <p><span v-html="rawHtml"></span></p>
    </div>
    <div> 
      <h3 class="bold">v-bind pass in dynamic value</h3>
      <p>:id is shorthand for v-bind:id</p>
      <p v-bind:id="userId"></p>
      <p :id="userId"></p>
      <p>myNumber has value {{ myNumber }}</p>
      <button @click="counter++">counter value is {{ counter }}</button>
      <button @click="increment">counter3 value is {{ counter3 }}</button>
    </div>
  </WelcomeItem>
</template>

<script lang="ts">
export default {
  components: {
    WelcomeItem
  }, 

  mount(){

  },
  data(){ 
    return {
      myNumber: 7,
      counter: 0
    };
  },

};
</script>