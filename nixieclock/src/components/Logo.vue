<template>
  <div :class="{ 'small': $parent.isPortrait }">
    <h1>Réveil à tubes nixieeeee</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
  font-family: "Toon Around", serif;
  font-size: 5vh;
  margin: auto;
  width: auto;
  text-align: center;
  transition: all 0.3s ease;
}

.small h1 {
  font-size: 3vh;
  text-align: left;
}
</style>