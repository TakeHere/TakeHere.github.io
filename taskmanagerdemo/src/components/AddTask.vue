<template>
    <div id="wrapper" @click.self="openTaskCreator">
        <img @click="openTaskCreator" id="plusIcon" src="https://www.freeiconspng.com/thumbs/plus-icon/plus-icon-black-2.png">
        <TaskCreator v-if="displayTaskCreator" @closeTaskCreator="closeTaskCreator"/>
    </div>
</template>

<script>
import TaskCreator from './TaskCreator.vue';

export default {
    data() {
        return {
            displayTaskCreator: false,
        };
    },
    
    methods: {
        openTaskCreator() {
            this.displayTaskCreator = true;
        },

        closeTaskCreator(){
            this.displayTaskCreator = false;
        }
    },
    components: { TaskCreator }
}
</script>

<style scoped>
    #plusIcon{
        width: 100%;
    }

    #wrapper {
        background-color: rgb(30, 212, 133);
        position: absolute;
        top: 10px;
        right: 10px;
        border-radius: 100%;
        aspect-ratio: 1/1;
        display: flex;
        width: 100px;
        align-items: center;
        justify-content: center;
    }

    #wrapper:hover {
        background-color: rgb(19, 136, 85);
        cursor: pointer;
    }
</style>