<template>
<div class="container">

    <!-- <div >
        <JOINBOX />
    </div> -->

    <div >
        <CHATBOX />
    </div>
</div>
</template>

<script>
// import JOINBOX from '../components/chat-box/setName.vue'

import CHATBOX from "../components/chat-box/index.vue"

import {
    ACCOUNT
} from "../const/index.js"

export default {

    data() {
        // status: "",
        return {
          account: ACCOUNT,
        }
    },

    components: {
        // JOINBOX,
        CHATBOX,
    }
}
</script>

<style>

/* cái này dùng để test chức năng send messenger */
.container {  
    float: none !important;
    margin-left: 1vw !important;
}
</style>
