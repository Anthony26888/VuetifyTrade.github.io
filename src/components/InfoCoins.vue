<template lang="">
  <v-sheet :height="80" rounded class="w-100 bg-grey-lighten-4">
    <v-row>
      <v-col cols="2" >
        <v-select class="ms-2"  
          v-model="select"       
          :items="[
            'BTCUSDT',
            'ETHUSDT',
            'BNBUSDT',
            'XPRUSDT',
            'SOLUSDT',
            'ADAUSDT',
          ]"
          variant="underlined"
        ></v-select>
      </v-col>
    </v-row>
  </v-sheet>
  <BinanceApi @InfoCoins="FetchInfo" />
</template>
<script>
export default {
  data() {
    return {
      select:'BTCUSDT',
      dialog: false,
      search: "",
      headers: [
        {
          align: "start",
          key: "symbol",
          sortable: false,
          title: "Coins",
        },
        { key: "lastPrice", title: "Last Price" },
        { key: "priceChangePercent", title: "24h changes" },
      ],
      Coins: "",
    };
  },
  mounted() {
    setInterval(() => {
      this.SelectCoins()
    }, 200);
    
  },
  methods: {
    FetchInfo(data) {
      this.Coins = data;
    },
    SelectCoins(){
      localStorage.setItem("SelectCoin", this.select)
    }
  },
};
</script>
<style lang=""></style>
