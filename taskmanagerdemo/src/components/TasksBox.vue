<template>
    <div class="wrapper">
        <TaskElement v-for="task in tasks" :title="task.title" :description="task.description"></TaskElement>
    </div>
</template>

<script>
import TaskElement from './TaskElement.vue';

export default {
    props: ["tasks"],

    components: { TaskElement },
}
</script>

<style scoped>
    .wrapper {
        width: 50vw;
        height: 70vh;
        background-color: bisque;
        padding: 8px;
        margin: auto;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
    }

    ul {
        height:200px; 
        width:18%;
        overflow:hidden; 
        overflow-y:scroll;
    }
</style>