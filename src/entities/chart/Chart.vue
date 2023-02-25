<template>
  <Line
    class="chart"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js'

import colors from "@/shared/config/colors";
import gradient from 'chartjs-plugin-gradient';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  gradient,
)

export default defineComponent({
  name: 'Chart',
  components: {
    Line
  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            data: [40, 39, 10, 40, 39, 180, 40],
            gradient: {
              backgroundColor: {
                axis: 'y',
                colors: {
                  0: 'transparent',
                  100: colors.green[5]
                }
              },
            },
          },
        ]
      },
      chartOptions: {

        borderColor: colors.green[5],
        pointRadius: 0,
        responsive: true,
        tension: 0.5,
        fill: true,
        plugins: {
          filler: {
            propagate: true
          },
          gradient,
        }
      },
    }
  }
})
</script>

<style scoped lang='scss'>
.chart {
  //width: 400px !important;
}
</style>
