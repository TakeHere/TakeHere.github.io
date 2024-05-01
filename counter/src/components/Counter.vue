<template>
    <div id="bg">
        <h1>Compteur</h1>

        <p>{{ count }}</p>

        <div>
            <button @click="modifyCounter(1)">+</button>
            <button @click="modifyCounter(-1)">-</button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },

  methods: {
    modifyCounter: function (toAdd) {
      this.count += toAdd
      this.count = Math.max(0, this.count)
    }
  }
}
</script>

<style scoped>
#bg{
    background: #3aa464;
    margin: 0 auto;
    text-align: center;
    width: fit-content;
    padding: 0px 20px;
    box-shadow: 5px 5px 15px 5px rgba(119,255,97,0.44);
}

button{
    background: #3A45A4;
    border: none;
    margin: 5px;
    padding: 30px;
    font-size: 50px;
    aspect-ratio: 16/9;
}

button:hover{
    background: #404cb5;
}

button:active{
    background: #313a8b;
}

p{
    font-size: 30px;
}
    
</style>