<template lang="">
  <div class="" id="tradingview-widget-container"></div>
</template>
<script>
export default {
  mounted() {
    // Initialize TradingView widget
    new TradingView.widget({
      "autosize": true,
      "width":"100%",
      "symbol": "BINANCE:BTCUSDT",
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
  },
};
</script>
<style lang=""></style>
