<template lang="">
  <div></div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {      
      data: null,
    };
  },
  mounted() {
    setInterval(() => {
      this.fetchdata();
      this.$emit("InfoCoins", this.data);
    }, 500);
  },
  methods: {
    fetchdata() {
      const url = "https://api.binance.com/api/v3/ticker/24hr";
      axios.get(url).then((response) => {
        const dataApi = response.data;
        this.data = dataApi
      });
    },
  },
};
</script>
<style lang=""></style>
