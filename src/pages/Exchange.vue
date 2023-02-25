<template>
  <WrapContent>
    <template v-slot:left>
      <div class="d-flex flex-row">
        <div>
          <img src="@/app/assets/images/tokens/busd.svg" alt="busd">
          <img src="@/app/assets/images/tokens/usdc.svg" alt="usdc">
        </div>
        <p>BUSD/USDC</p>
        <v-icon icon="$swap"/>
      </div>
      <div>
        1.0005 USDC
      </div>
      <div class="d-flex flex-row align-center justify-space-between">
        <p>
          +227.543364 USDC Past 24 Hours
        </p>
        <v-btn-toggle
          v-model="timeFrameButtons"
          rounded="0"
          color="secondary"
          group
        >
          <v-btn size="small" value="24H">
            24H
          </v-btn>

          <v-btn size="small" value="1W">
            1W
          </v-btn>

          <v-btn size="small" value="1M">
            1M
          </v-btn>
        </v-btn-toggle>
      </div>
      <Chart/>
    </template>
    <template v-slot:right>
      <div></div>
    </template>
  </WrapContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WrapContent from "@/widgets/wrapContent/WrapContent.vue";
import Chart from "@/entities/chart/Chart.vue";

export default defineComponent({
  name: 'ExchangePage',
  components: {
    Chart,
    WrapContent
  },
  data() {
    return {
      timeFrameButtons: '24H'
    }
  }
})
</script>

<style lang="scss">
  @use '@/app/assets/styles/colors.scss';

  .page {
    //background-color: colors.$gray22;
  }
</style>
