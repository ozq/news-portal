<template>
  <div class="news-grid">
    <span>news grid content</span>
    {{ news }}
  </div>
</template>

<script>
  export default {
    props: {
      news: {
        type: Array,
        default: () => [],
      },
    },
  };
</script>
