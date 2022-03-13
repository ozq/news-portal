<template>
  <div class="news-card">
    <a :href="url">
      <figure class="news-card_image-wrapper">
        <img
          class="news-card_image"
          :src="data.image"
          :alt="data.title"
          loading="lazy"
          width="460px"
          height="300px">
      </figure>
      <h3 class="news-card_title">{{ data.title }}</h3>
    </a>
    <div class="news-card-meta">
      <span class="news-card-meta_date">{{ data.published_at | date }}</span>
      <span class="news-card-meta_source">{{ data.source }}</span>
    </div>
    <div class="news-card_text-wrapper">
      <p class="news-card_text">{{ data.text }}</p>
      <a class="news-card_link" :href="url">read more</a>
    </div>
  </div>
</template>

<script>
  const TIMESTAMP_POWER = 1000;

  export default {
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    computed: {
      url() {
        return `/article/${this.data.id}`;
      },
    },
    filters: {
      date(value) {
        return new Date(value * TIMESTAMP_POWER).toLocaleDateString();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .news-card {
    a {
      text-decoration: none;
    }
    &_image-wrapper {
      margin-bottom: 16px;
      width: 100%;
      height: 176px;
      overflow: hidden;
      border-radius: 8px;
      @media (max-width: $breakpoint-tablet) {
        height: 128px;
      }
      @media (max-width: $breakpoint-mobile) {
        height: 96px;
        margin-bottom: 8px;
      }
    }
    &_image {
      margin-bottom: 16px;
      object-fit: cover;
      width: inherit;
      max-width: 100%;
      height: inherit;
      transition: transform 0.35s ease-in-out;
      &:hover {
        transform: scale(1.3);
      }
    }
    &_title {
      font-size: 24px;
      line-height: 1.33;
      margin-bottom: 16px;
      text-decoration: none;
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
      color: $color-primary-60;
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
      color: $color-primary;
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
      &_source {
        @include truncate();
      }
    }
  }
</style>
