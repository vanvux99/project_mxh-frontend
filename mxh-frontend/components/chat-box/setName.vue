<template>
<div class="card text-center" id="card-right">
    <div class="card-header" id="card-header-right">
        Information
    </div>
    <div class="card-body">
        <form>
            <!-- <div class="form-group">
                <input type="text"  class="form-control" id="name" v-model="account.Name" placeholder="Enter your name">
                <small id="nameHelp" class="form-text text-muted">Everyone wants to see your name...</small>
            </div> -->
            <div class="form-group">
                <input type="text" class="form-control" id="name" placeholder="Enter your name">
            </div>
            <button type="button" class="btn btn-primary " @click="setName()">Login</button>
            <hr>
            <div class="form-group">
                <!-- Your Name: {{setName(account.Name).Name}}
                <hr>
                Avatar: {{setName(account.Name).Avatar}} -->
            </div>
        </form>
    </div>
    <div class="card-footer text-muted" id="card-footer-right">

    </div>
</div>
</template>

<script>
import axios from "axios";

import {
    ACCOUNT
} from "../../const/index.js";

export default {
    data() {
        return {
            account: ACCOUNT,
            infomation: [],
        }
    },

    // mounted() {
    //     this.setName()
    // },

    // truyền vào component cha 1 cái tên ...
    methods: {
        getName() {
            let nameValid = document.querySelector("#name")
            console.log(nameValid.value);
            // if (nameValid.value) {
            //     axios
            //         .get("https://localhost:44367/api/Account?name=" + nameValid.value)
            //         .then((response) => {
            //             this.infomation = response.data
            //             console.log(this.infomation);
            //         })
            //         .catch((err) => {
            //             //console.log(err);
            //         });
            // } else {
            //     return ""
            // }
        },

        // setName(name) {
        //     this.infomation.find( item => item.)
        // }
    }
}
</script>

<style>
#card-right {
    float: right;
    height: 600px;
    width: 200px;
}
</style>
