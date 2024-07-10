<template>
  <div>
    <div id="headerWrapper" :class="{ 'portrait': isPortrait }">
      <Logo :class="{ 'small': isPortrait }"/>
      <AddAlarm @add-alarm="addAlarm"/>
    </div>

    <AlarmContainer :alarms='alarms' @deleteAlarm="deleteAlarm"/>
  </div>
</template>

<script>
import Logo from "./components/Logo.vue"
import AlarmContainer from "./components/AlarmContainer.vue";
import AddAlarm from "./components/AddAlarm.vue";
import WeekPicker from "./components/WeekPicker.vue";

export default {
  components: { Logo,  AlarmContainer, AddAlarm, WeekPicker},

  data() {
    return {
      alarms: [],
      isPortrait: false
    }
  },

  methods: {
    addAlarm(data){
      this.alarms.push(data)
    },

    deleteAlarm(data){
      this.alarms = this.alarms.filter((alarm) => {
        return !(alarm.time === data.time && alarm.days === data.days && alarm.repeatable === data.repeatable)
      })
    },

    parseAlarms(data) {
      if (!data || !data.alarms) {
        console.error('Invalid data format');
        return [];
      }

      return data.alarms.map(alarm => ({
        time: `${this.padZero(alarm.hour)}:${this.padZero(alarm.minute)}`,
        days: alarm.days,
        repeatable: alarm.isRepeatable
      }));
    },

    padZero(num) {
      return num.toString().padStart(2, '0');
    },

    getAlarms() {
      fetch("http://192.168.1.216/getAlarm", {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            console.log('Raw data:', data);
            this.alarms = this.parseAlarms(data);
            console.log('Parsed alarms:', this.alarms);
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
    },

    checkOrientation() {
      this.isPortrait = window.innerWidth < window.innerHeight;
    }
  },

  created() {
    this.getAlarms();
  },

  mounted() {
    this.checkOrientation();
    window.addEventListener('resize', this.checkOrientation);
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkOrientation);
  }
}
</script>

<style>
#app{
  text-align: center;
}

#headerWrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}

#headerWrapper.portrait {
  justify-content: space-between;
  padding: 0 1rem;
}
</style>