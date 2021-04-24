<template>
  <div class="card text-center" id="card">
    <!-- title -->
    <titleComponent />

    <!-- mess -->
    <mess/>

    <!-- send -->
    <send />
    <div></div>
  </div>
</template>

<script>
import titleComponent from "./title";
import mess from "./messenger.vue";
import send from "./send.vue";

export default {
  data() {
    return {
      mess: "",
    };
  },

  components: {
    titleComponent,
    mess,
    send,
  },

  methods: {
    
  },
};
</script>

<style>
#card {
  width: 90vw;
  height: 90vh;
  /* float: left; */
}
</style>
