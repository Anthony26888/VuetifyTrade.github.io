<template lang="">
  <div></div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      EmailUser: null,
      MoneyUser: null,
      PositionUser: null,
      OpenUser: null,
      HistoryUser: null,
    };
  },
  mounted() {
    setInterval(() => {
      this.fetchdata();
      this.$emit("EmailUser", this.EmailUser);
      this.$emit("MoneyUser", this.MoneyUser);
      this.$emit("PositionUser", this.PositionUser);
      this.$emit("OpenUser", this.OpenUser);
      this.$emit("HistoryUser", this.HistoryUser);
    }, 500);
  },
  methods: {
    fetchdata() {
      const getUser = localStorage.getItem("user");
      const url = `http://localhost:3000/account/${getUser}`;
      axios.get(url).then((response) => {
        const dataUser = response.data;
        this.EmailUser = dataUser.map((u) => u.email);
        this.MoneyUser = dataUser.map((u) => u.money);
        this.PositionUser = dataUser.map((u) => u.position);
        this.OpenUser = dataUser.map((u) => u.openorder);
        this.HistoryUser = dataUser.map((u) => u.history);
      });
    },
  },
};
</script>
<style lang=""></style>
