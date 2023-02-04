<template>

<p class="message">{{ userMessage }} </p>

</template>

<script setup>

defineProps({
    userMessage: String
});

</script>

<style scoped></style>