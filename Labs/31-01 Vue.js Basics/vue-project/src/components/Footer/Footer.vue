<script setup>
import { ref, reactive } from "vue";

const mathLogo = reactive({
    imgRoute: "https://blogs.elespectador.com/wp-content/uploads/2020/07/9BCB14A2-FCF0-43F5-917C-73391A973A93_4_5005_c.jpeg"
});

</script>

<template>
    <header>
        <nav>
            <img :src="mathLogo.imgRoute" />
        </nav>
    </header>
</template>

<style scoped>
nav {
    background-color: #4cbbbb;
    justify-items: center;
}

nav img {
    width: 100px;
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>