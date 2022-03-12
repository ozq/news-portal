<template>
  <div class="app">
    <v-header class="app_header">
      <search-input @input="filterNews"/>
    </v-header>
    <main class="app_main">
      <section id="latest-news">
        <h2>Latest News</h2>
        <news-grid :news="news"/>
      </section>
    </main>
    <v-footer class="app_footer"/>
  </div>
</template>

<script>
  import VHeader from '@/components/VHeader';
  import VFooter from '@/components/VFooter';
  import NewsGrid from '@/components/NewsGrid';
  import SearchInput from '@/components/SearchInput';

  import { mapState } from 'vuex';

  export default {
    name: 'App',
    metaInfo: {
      title: 'News Portal',
    },
    components: {
      VHeader,
      VFooter,
      NewsGrid,
      SearchInput,
    },
    computed: {
      ...mapState([
        'news',
      ]),
    },
    methods: {
      filterNews() {
        // TODO: filter logic...
      },
    },
    created() {
      this.$store.dispatch('fetchNews');
    },
  };
</script>

<style lang="scss" scoped>
  .app {
    --layout-width: 1170px;
    display: grid;
    grid-template-areas:
      "header"
      "main"
      "footer";
    grid-template-rows:
      auto
      1fr
      auto;
    min-height: 100vh;
    &_header {
      grid-area: header;
      margin-bottom: 40px;
    }
    &_main {
      grid-area: main;
      overflow: hidden;
    }
    &_footer {
      grid-area: footer;
      grid-column-start: 1;
      margin-top: 93px;
    }
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
      max-width: var(--layout-width);
      margin: 0 auto;
    }
  }
</style>
