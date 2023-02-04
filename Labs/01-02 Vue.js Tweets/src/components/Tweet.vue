<template>
  <div class="tweet">
    <ProfileImg :imageTweet = tweet.user.image />
    

    <div class="body">
      <div class="top">
        <User :userTweet = "tweet.user.name"
             :userHandle = "tweet.user.handle" />

        <Timestamp :userTimeStamp = "tweet.timestamp" />
      </div>

      <Message :userMessage ="tweet.message" />
      <Actions :actions ="tweet.actions" />
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<style scoped>

a {
  color: #42b983;
}

.tweet img {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin: 0 10px;
}
</style>

<script setup>

import ProfileImg from './ProfileImg.vue';
import User from './User.vue';
import Timestamp from './Timestamp.vue';
import Message from './Message.vue';
import Actions from './Actions.vue';

const props= defineProps ({
  tweet: Object
});

</script>
