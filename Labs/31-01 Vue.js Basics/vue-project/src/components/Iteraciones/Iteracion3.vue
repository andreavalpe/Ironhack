<script setup>
import { ref, reactive } from "vue";

let showScreen = ref(true); 
</script>

<template>
    <div>
        <section>
            <p v-if="showScreen"> Uau! Pues ahora las matemáticas me parecen más divertidas. </p>
            <p v-else> A mi no me siguen sin gustar. </p>
        </section>
    </div>
</template>

<style scoped>

</style>