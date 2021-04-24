<template>
  <div class="card-body" id="card">
    <div v-for="(mess, index) in messengers" :key="index" :value="mess">
      <label class="col" id="nameLablel" for="name"
        >{{ changeAccountByID(mess.AccountsID) }} said:</label
      >
      <input
        class="form-control col"
        id="form-control"
        type="text"
        :value="mess.Content"
        readonly
      />
      <br /> 
    </div>

  </div>
</template>

<script>
import axios from "axios";

import { getAllAccounts } from "../../const/index.js";

export default {
  // props: ["returnMess"],
  data() {
    return {
      messengers: [],
      accounts: [],
    };
  },

  mounted() {
    this.getMessengers();
    this.getAccounts();
  },

  methods: {
    getMessengers() {
      axios
        .get("https://localhost:44367/api/Messenger")
        .then((response) => {
          this.messengers = response.data;
          // console.log(this.messengers.Content);
        })
        .catch((err) => {
          //console.log(err);
        });
    },

    getAccounts() {
      axios
        .get("https://localhost:44367/api/Account")
        .then((response) => {
          this.accounts = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    changeAccountByID(id) {
      const findAccount = this.accounts.find((item) => item.ID === id);
      // console.log(findAccount);
      return findAccount ? findAccount.Name : "";
    },
  },
};
</script>

<style>
#form-control {
  border: none;
}

#card {
  overflow: auto;
  height: 70vh;
  /* width: 900px; */
}

#nameLablel {
  text-align: left;
}
</style>
