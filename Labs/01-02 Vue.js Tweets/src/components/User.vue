<template>
<span class="user">
<span class="name"> {{userTweet}} </span>
<span class="handle"> {{userHandle}} </span>
</span>
</template>

<script setup>

defineProps({
    userTweet: String,
    userHandle: String
});

</script>

<style scoped></style>