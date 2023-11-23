<template lang="">
  <v-sheet :height="80" rounded class="w-100 bg-grey-lighten-4">
    <div class="p-4">
      <v-btn variant="text">
        Open Dialog
        <v-dialog v-model="dialog" activator="parent" width="auto">
          <v-card flat title="Futures">
            <template v-slot:text>
              <v-text-field
                v-model="search"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                single-line
                variant="outlined"
                hide-details
              ></v-text-field>
            </template>

            <v-data-table-virtual
              :headers="headers"
              :items="Coins"
              :search="search"
            ></v-data-table-virtual>
          </v-card>
        </v-dialog>
      </v-btn>
    </div>
  </v-sheet>
  <BinanceApi @InfoCoins = "FetchInfo"/>
</template>
<script setup>
    import BinanceApi from "./Fetch api/FetchBinance.vue"
</script>
<script>
export default {
  data() {
    return {
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
            { key: "priceChangePercent", title: "24h changes" }       
        ],
        Coins:""
    };
  },
  methods: {
    FetchInfo(data){
        this.Coins = data
    }
  },
};
</script>
<style lang=""></style>
