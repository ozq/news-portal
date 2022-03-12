<template>
  <div class="news-card">
    <img
      class="news-card_image"
      :src="data.image"
      :alt="data.title">
    <h2 class="news-card_title">{{ data.title }}</h2>
    <div class="news-card-meta">
      <span class="news-card-meta_date">{{ data.published_at }}</span>
      <span class="news-card-meta_source">{{ data.source }}</span>
    </div>
    <div class="news-card_text-wrapper">
      <p class="news-card_text">{{ data.text }}</p>
      <a class="news-card_link" :href="`/article/${data.id}`">read more</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .news-card {
    &_image {
      border-radius: 8px;
      margin-bottom: 16px;
      width: 100%;
      height: 176px;
      object-fit: cover;
      @media (max-width: $breakpoint-tablet) {
        height: 128px;
      }
      @media (max-width: $breakpoint-mobile) {
        height: 96px;
        margin-bottom: 8px;
      }
    }
    &_title {
      font-weight: 700;
      font-size: 24px;
      line-height: 1.33;
      margin-bottom: 16px;
      @media (max-width: $breakpoint-tablet) {
        font-size: 18px;
      }
      @media (max-width: $breakpoint-mobile) {
        font-size: 16px;
        margin-bottom: 12px;
      }
    }
    &_text-wrapper {
      font-size: 14px;
      line-height: 1.8;
      @media (max-width: $breakpoint-mobile) {
        font-size: 12px;
        line-height: 1.5;
      }
    }
    &_text {
      @include truncate(7);
      @media (max-width: $breakpoint-tablet) {
        @include truncate(6);
      }
      @media (max-width: $breakpoint-mobile) {
        @include truncate(4);
      }
    }
    &_link {
      text-decoration: none;
      display: block;
      &:hover {
        text-decoration: underline;
      }
    }
    &-meta {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: $color-primary-20;
      margin-bottom: 16px;
      column-gap: 16px;
      font-family: $font-family-secondary;
      @media (max-width: $breakpoint-mobile) {
        font-size: 8px;
        margin-bottom: 8px;
      }
    }
  }
</style>
