<template>
  <section
    class="main__top-charts"
    v-if="topChartsSongs && topChartsSongs.length > 0"
  >
    <h2 class="main__top-charts__title">Top Charts</h2>
    <div
      class="main__top-charts__charts-container"
      v-for="chart in topChartsSongs"
      :key="chart.id"
    >
      <top-charts-item
        :chart="chart"
      ></top-charts-item>
    </div>
  </section>
</template>

<script>
import TopChartsItem from "./TopChartsItem.vue";

export default {
  components: {
    TopChartsItem,
  },
  created() {
    this.loadTopChartsSongs();
  },
  computed: {
    topChartsSongs() {
      return this.$store.getters["topCharts/topChartsSongs"];
    },
  },
  methods: {
    async loadTopChartsSongs() {
      await this.$store.dispatch("topCharts/loadTopChartsSongs");
    },
  },
};
</script>

<style scoped>
.main__top-charts {
  background-color: #202026;
  border-radius: 0.3rem;
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  color: #fff;
  margin-top: 1.5rem;
  overflow: auto;
}

.main__top-charts__title {
  font-size: 1.2rem;
  padding-bottom: 1.6rem;
}

.main__top-charts__charts-container {
  display: flex;
  flex-direction: column;
}
</style>
