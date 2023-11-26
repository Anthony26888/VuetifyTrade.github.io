<template lang="">
  <div class="tv_chart_container ms-2"  id="tradingview-widget-container"></div>
</template>
<script>
export default { 
  mounted() {   
    this.Chart()
  },
  methods: {

    Chart(){
      const select = localStorage.getItem("SelectCoin")
      const Coins = `BINANCE:${select}`
      new TradingView.widget({
        "autosize": true,
        "width": "100%",
        "symbol": `${Coins}`,
        "interval": "60",
        "timezone": "Asia/Ho_Chi_Minh",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "gridColor": "rgba(216, 216, 216, 0.06)",
        "save_image": false,
        "container_id": 'tradingview-widget-container',
      });
    }
  },
};
</script>
<style scoped>
@media only screen and (min-width: 350px) {
  .tv_chart_container {
    height: 390px;
  }
}

@media only screen and (min-width: 400px) {
  .tv_chart_container {
    height: 500px;
  }
}

@media only screen and (min-width: 600px) {
  .tv_chart_container {
    height: 350px;
  }
}

@media only screen and (min-width: 900px) {
  .tv_chart_container {
    height: 850px;
  }
}

@media only screen and (min-width: 1000px) {
  .tv_chart_container {
    height: 500px;
  }
}

@media only screen and (min-width: 1200px) {
  .tv_chart_container {
    height: 350px;
  }

}

@media only screen and (min-width: 1350px) {
  .tv_chart_container {
    height: 350px;
  }
}

@media only screen and (min-width: 1600px) {
  .tv_chart_container {
    height: 550px;
  }
}

@media only screen and (min-width: 1900px) {
  .tv_chart_container {
    height: 650px;
  }

}
</style>
