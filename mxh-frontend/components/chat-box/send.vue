<template>
<div class="card-footer text-muted" id="card-footer">
    <div class="input-group mb-3">
        <input type="text" id="okee" class="form-control" placeholder="Recipient's messengers ...">
        <div class="input-group-append">
            <button class="btn btn-outline-primary" type="button" @click="setMessenger()">Send</button>
        </div>
    </div>
</div>
</template>

<script>
// const textMessenger = document.querySelector("input[type=text]");

export default {
    // face data, mặc định là tài khoản vũ

    data() {
        return {
            messenger: "",
        }
    },

    methods: {

        setMessenger() {
            const textMessenger = document.querySelector("#okee")
            this.messenger = textMessenger.value
            console.log(this.messenger);
            this.$emit("sendMessenger", this.messenger)
        },
    },
}
</script>

<style>

</style>
