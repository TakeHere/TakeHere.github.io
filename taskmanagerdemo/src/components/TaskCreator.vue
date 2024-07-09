<template>
    <div @click.self="close" id="backdrop">
        <form id="creationMenu" @submit.prevent="close">
            <h1>Création d'une tâche</h1>

            <div>
                <p>Titre:</p>
                <input type="input" v-model="title" required>
            </div>

            <div>
                <p>Description:</p>
                <input type="input" v-model="description" required>
            </div>

            <br>

            <button type="submit" id="creationButton">Valider</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            description: ""
        }
    },

    methods: {
        close(){
            this.$emit("closeTaskCreator")
            this.$parent.$emit("addTask", {title: this.title, description: this.description})
        }
    },
}
</script>

<style scoped>

    #backdrop{
        background-color: rgba(77, 77, 77, 0.465);
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }


    #backdrop:hover {
        cursor: auto;
    }

    #creationMenu{
        background-color: #333A73;
        width: 50%;
        margin: auto;
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
    }

    #creationMenu div{
        display: flex;
        margin: 0 10px 20px;
    }

    #creationMenu div p{
        padding-right: 10px;
        font-size: 25px;
    }

    input {
        flex: 1;
        height: fit-content;
        margin: auto;
    }

    #creationButton{
        width: 30%;
        height: 3em;
        margin: auto;
        background-color: #50C4ED;
        border: none;
        margin-bottom: 20px;
    }
    
    #creationButton:hover {
        background-color: #43a9ce;
    }
</style>