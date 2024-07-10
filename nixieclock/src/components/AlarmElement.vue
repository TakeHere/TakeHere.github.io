<template>
    <div id="taskElementWrapper">
        <div id="leftContainer">
          <p id="time">{{ time }}</p>
          <p id="repeatableInfo"> {{ repeatableStr }}</p>
        </div>

        <div id="alarmDays">
            <p id="daysInfo">{{ availableDayString }}</p>
        </div>

        <div id="alarmDelete" @click="deleteAlarm">
          <v-icon id="cross" color="rgba(255, 0, 0, 1.0)" icon="mdi mdi-close"></v-icon>
        </div>
    </div>
</template>

<script>
export default {
    props: ["time", "days", "repeatable"],

    data() {
      return {
        daysLookupTable: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
      };
    },

    methods: {
      deleteAlarm(){
        this.$parent.$emit("deleteAlarm", {time: this.time, days: this.days, repeatable: this.repeatable})
      }
    },

    computed: {
      repeatableStr() {
        return this.repeatable ? 'Répétable' : 'Une fois'
      },

      selectedDays(){
        let selectedDays = []

        for (let i = 0; i < this.days.length; i++) {
          if(this.days[i]){
            selectedDays.push(this.daysLookupTable[i])
          }
        }

        return selectedDays;
      },

      availableDayString: function(){
        let isWeekendsChecked = (this.selectedDays.indexOf('Samedi') >= 0 && this.selectedDays.indexOf('Dimanche') >= 0);

        if(this.selectedDays.length === 7){
          return 'Toute la semaine';
        }

        if(this.selectedDays.length === 2 && isWeekendsChecked){
          return 'Le weekend';
        }

        if(this.selectedDays.length === 5 && !isWeekendsChecked){
          return 'Du Lundi au Vendredi';
        }

        return this.selectedDays.join(', ');
      },
    },
}
</script>

<style scoped lang="scss">
    #cross{
      font-size: 8vmin;
      margin: auto;
    }

    #leftContainer p{
      font-family: "Toon Around",serif;
    }

    #time{
      font-size: 4.8vmin;
    }

    #repeatableInfo{
      font-size: 2.8vmin;
    }

    #daysInfo{
      font-size: 2.8vmin;
    }

    p {
      font-family: "Helvetica";
      color: black;
      word-wrap: break-word;
      margin: auto;
    }

    #taskElementWrapper div{
        padding: 0 10px;
        min-width: 0;
        min-width: 0;
        display: flex;
        align-items: center;
        border: 1px solid black;
    }

    #leftContainer{
      background-color: #ABC270;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 20vmin;
    }

    #alarmDays{
        flex: 1;
        background-color: #e8ad95;
    }

    #alarmDelete{
      padding-right: 0px;
      padding-left: 0px;
      background-color: #C2B070;
      aspect-ratio: 1/1;
    }

    #taskElementWrapper{
        background-color: #e8ad95;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px;
        display: flex;
        margin-bottom: 5px;
        box-sizing: border-box;
    }
</style>