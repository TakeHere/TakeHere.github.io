<template>
  <div>
    <Logo/>

    <h1>Todo list</h1>

    <TasksBox :tasks='tasks' @deleteTask="deleteTask"/>

    <AddTask @addTask="addTask"/>
  </div>
</template>

<script>
import Logo from "./components/Logo.vue"
import TasksBox from "./components/TasksBox.vue";
import AddTask from "./components/AddTask.vue";



export default {
    components: { Logo, TasksBox, AddTask },

    data() {
      return {
        tasks: []
      }
    },

    methods: {
      addTask(data){
        this.tasks.push(data)
      },

      deleteTask(data){
        this.tasks = this.tasks.filter((task) => {
          return ! (task.title === data.title && task.description === data.description)
        })
      }
    },
}
</script>

<style>
  #app{
    text-align: center;
  }

  .taskText{
    color: black;
  }
</style>