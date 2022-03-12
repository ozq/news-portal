<template>
  <div id="app">
    <v-header>
      <input placeholder="Search news..."/>
    </v-header>
    <main>
      <section id="latest-news">
        <h2>Latest News</h2>
        <news-grid :news="news"/>
      </section>
    </main>
    <v-footer/>
  </div>
</template>

<script>
  import VHeader from '@/components/VHeader';
  import VFooter from '@/components/VFooter';
  import NewsGrid from '@/components/NewsGrid';

  import { mapState } from 'vuex';

  export default {
    name: 'App',
    components: {
      VHeader,
      VFooter,
      NewsGrid,
    },
    computed: {
      ...mapState([
        'news',
      ]),
    },
    created() {
      this.$store.dispatch('fetchNews');
    },
  };
</script>
