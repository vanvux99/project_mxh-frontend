<template>
<div class="card text-center" id="card">
    <!-- title -->
    <titleComponent />

    <!-- mess -->
    <mess />

    <!-- send -->
    <send @sendMessenger="messenger"/>
    <div>
        
    </div>
</div>
</template>

<script>
import titleComponent from "./title";
import mess from "./messenger.vue";
import send from "./send.vue";

export default {
    data() {
        return {
            messenger: "",
        }
    },
    components: {
        titleComponent,
        mess,
        send,
    }
}
</script>

<style>
#card{
    width: 900px;
    height: 600px;
    float: left;
}
</style>
