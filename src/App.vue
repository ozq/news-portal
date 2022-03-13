<template>
  <div class="app">
    <v-header class="app_header">
      <search-input @input="search"/>
    </v-header>
    <main class="app_main">
      <p class="app_message app_loader" v-if="loading">Loading news...</p>
      <transition name="fade">
        <section class="section" id="latest-news" v-if="loading === false">
          <div class="section_title-wrapper">
            <h2 class="section_title">Latest News</h2>
            <sorting @select="sort"/>
          </div>
          <p v-show="filteredNews.length === 0" class="app_message">News not found<br>👀</p>
          <news-grid :news="filteredNews"/>
        </section>
      </transition>
    </main>
    <v-footer class="app_footer"/>
  </div>
</template>

<script>
  import VHeader from '@/components/VHeader';
  import VFooter from '@/components/VFooter';
  import NewsGrid from '@/components/NewsGrid';
  import SearchInput from '@/components/SearchInput';
  import Sorting from '@/components/Sorting';

  import { mapState } from 'vuex';

  export default {
    name: 'App',
    metaInfo: {
      titleTemplate: function (subTitle) {
        return subTitle ? `${subTitle} — ${this.$appName}` : this.$appName;
      },
    },
    data() {
      return {
        filteredNews: [],
      };
    },
    components: {
      VHeader,
      VFooter,
      NewsGrid,
      SearchInput,
      Sorting,
    },
    computed: {
      ...mapState([
        'news',
        'loading',
      ]),
    },
    methods: {
      search(value) {
        const query = value.toLowerCase();
        if (query.length === 0) {
          this.filteredNews = this.news;
        }
        this.filteredNews = this.news.filter(item => {
          return item.title.toLowerCase().includes(query) || item.text.toLowerCase().includes(query);
        });
      },
      sort(type) {
       this.filteredNews = this.filteredNews.sort((left, right) => {
          return type === 'asc' ?
            left.published_at > right.published_at ? -1 : 1 :
            right.published_at > left.published_at ? -1 : 1;
        });
      },
    },
    watch: {
      news: {
        immediate: true,
        handler(news) {
          this.filteredNews = news;
        },
      },
    },
    created() {
      this.$store.dispatch('fetchNews');
    },
  };
</script>

<style lang="scss" scoped>
  .app {
    display: grid;
    grid-template-areas:
      "header"
      "main"
      "footer";
    grid-template-rows:
      auto
      1fr
      auto;
    height: 100%;
    &_header {
      grid-area: header;
      margin-bottom: 40px;
      @media (max-width: $breakpoint-tablet) {
        margin-bottom: 16px;
      }
      @media (max-width: $breakpoint-mobile) {
        margin-bottom: 8px;
      }
    }
    &_main {
      grid-area: main;
    }
    &_footer {
      grid-area: footer;
      grid-column-start: 1;
      margin-top: 10vh;
    }
    &_message {
      height: 100%;
      justify-content: center;
      align-items: center;
      display: flex;
      font-weight: 700;
      text-align: center;
      line-height: 1.5;
    }
    &_loader {
      @keyframes loading {
        50% {
          opacity: 0.35;
        }
      }
      animation: loading 2s infinite;
    }
    --layout-x-padding: 0;
    --layout-width: 1170px;
    @media (max-width: $breakpoint-tablet) {
      --layout-x-padding: 35px;
    }
    @media (min-width: $breakpoint-tablet) {
      --layout-x-padding: 60px;
    }
    &_header, &_main {
      box-sizing: border-box;
      width: 100%;
      padding-left: var(--layout-x-padding);
      padding-right: var(--layout-x-padding);
      margin-left: auto;
      margin-right: auto;
      max-width: calc(var(--layout-width) + var(--layout-x-padding) * 2);
    }
  }
  .section {
    height: 100%;
    &_title-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
    }
    &_title {
      font-family: $font-family-secondary;
      font-size: 36px;
      margin: 0;
      @media (max-width: $breakpoint-tablet) {
        font-size: 24px;
      }
    }
  }
</style>
