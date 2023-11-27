<template lang="">
  <div class="tv_chart_container ms-2" id="tradingview-widget-container"></div>
</template>
<script>
export default {
  methods: {
    data() {
      return {       
        selectedSymbol: 'BTCUSDT',
        widget: null,
      };
    },
  },

  mounted() {
    this.initTradingViewWidget();
  },
  methods: {
    initTradingViewWidget() {
      const coin = "BTCUSDT";
      this.widget = new TradingView.widget({
        symbol: this.selectedSymbol, // Set the initial trading pair or symbol
        interval: "H", // Set the initial interval (D for daily, 1 for 1 minute, etc.)
        timezone: "Asia/Ho_Chi_Minh",
        theme: "light",
        style: "1",
        locale: "en",
        enable_publishing: false,
        hide_top_toolbar: true,
        hide_legend: true,
        allow_symbol_change: true,
        autosize: true,
        container_id: "tradingview-widget-container",
      });
    },
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
