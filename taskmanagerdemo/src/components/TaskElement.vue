<template>
    <div id="taskElementWrapper">
        <div id="taskTitle">
            <p>{{ title }}</p>
        </div>

        <div id="taskDescription">
            <p>{{ description }}</p>
        </div>

        <div id="taskActions" @click="deleteTask">
            <img id="validationImg" src="https://static.vecteezy.com/system/resources/thumbnails/014/455/871/small/green-check-mark-icon-on-transparent-background-free-png.png">
        </div>
    </div>
</template>

<script>
export default {
    props: ["title", "description"],

    methods: {
        deleteTask(){
            this.$parent.$emit("deleteTask", {title: this.title, description: this.description})
        }
    },
}
</script>

<style scoped>
    #validationImg{
        height: 100%;
        width: 100%;
        object-fit: cover;
        max-width: 50px;
        max-height: 50px;
    }

    p {
        color: black;
        word-wrap: break-word;
    }

    #taskElementWrapper div{
        padding: 0 10px;
        min-width: 0;
        min-width: 0;
        display: flex;
        align-items: center;
        border: 1px solid black;
    }

    #taskTitle{
        background-color: #C08C8C;
    }

    #taskDescription{
        flex: 1;
        background-color: #D8C4A4;
    }

    #taskActions{
        background-color: #C8C8C8;
        min-width: fit-content;
    }

    #taskElementWrapper{
        background-color: #88C8CB;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px;
        display: flex;
        margin-bottom: 5px;
        box-sizing: border-box;
    }
</style>