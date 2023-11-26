<template lang="">
  <div class="tv_chart_container ms-2" ref="chartContainer"></div>
</template>
<script>
import { createChart } from "lightweight-charts";
import axios from "axios";
export default {
  methods: {
    data() {
      return {
        candleSeries: null,
      };
    },
  },

  mounted() {
    const chart = createChart(this.$refs.chartContainer, {
      width: 800,
      height: 400,
    });

    this.candleSeries = chart.addCandlestickSeries({
      upColor: "green", // Color for bullish candles
      downColor: "red", // Color for bearish candles
      borderDownColor: "red", // Border color for bearish candles
      borderUpColor: "green", // Border color for bullish candles
      wickDownColor: "red", // Wick color for bearish candles
      wickUpColor: "green", // Wick color for bullish candles
    });

    this.fetchData(); // Initial data fetch
    setInterval(this.fetchData, 1000); // Fetch new data every minute (adjust interval as needed)
  },
  methods: {
    fetchData() {
      const Coin = localStorage.getItem("SelectCoin")
      axios
        .get(`https://api.binance.com/api/v1/klines?symbol=${Coin}&interval=1h`)
        .then((response) => {
          const data = response.data.map((item) => {
            const [time, open, high, low, close] = item;
            return {
              time: time,
              open: parseFloat(open),
              high: parseFloat(high),
              low: parseFloat(low),
              close: parseFloat(close),
            };
          });

          this.candleSeries.setData(data);
        })
        .catch((error) => {
          console.error("Error fetching Binance data:", error);
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
