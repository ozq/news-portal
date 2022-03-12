<template>
  <div class="news-grid">
    <news-card
      v-for="item in news"
      class="news-grid_item"
      :key="item.id"
      :data="item"/>
  </div>
</template>

<script>
  import NewsCard from '@/components/NewsCard';

  export default {
    components: {
      NewsCard,
    },
    props: {
      news: {
        type: Array,
        default: () => [],
      },
    },
  };
</script>

<style lang="scss" scoped>
  .news-grid {
    --column-count: 4;
    --row-gap: 72px;
    display: grid;
    column-gap: 30px;
    row-gap: var(--row-gap);
    grid-template-columns: repeat(var(--column-count), 1fr);
    @media (max-width: $breakpoint-tablet) {
      --column-count: 3;
      --row-gap: 48px;
    }
    @media (max-width: $breakpoint-mobile) {
      --column-count: 2;
      --row-gap: 32px;
    }
    &_item {
      overflow: hidden;
    }
  }
</style>
