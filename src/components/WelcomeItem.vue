<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <h3 class="bold">
        <slot name="heading3"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">

export default {
 setup2() {
  const myNumber = 17;
  return myNumber;
 } 
}

</script>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.bold{
  font-weight: bold;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

</style>