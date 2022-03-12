<template>
  <div class="search-area">
    <transition name="fade">
      <input
        v-show="opened"
        ref="input"
        type="search"
        class="search-area_input"
        placeholder="Search news..."
        :value="value"
        @input="$emit('input', $event.target.value)"/>
    </transition>
    <button class="search-area_button" @click="toggle">
      <icon-search/>
    </button>
  </div>
</template>

<script>
  import IconSearch from '@/assets/icons/search.svg';

  export default {
    components: {
      IconSearch,
    },
    props: {
      value: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        opened: false,
      };
    },
    methods: {
      toggle() {
        this.opened = !this.opened;
        if (this.opened) {
          this.$nextTick(() => {
            this.$refs.input.focus();
          });
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .search-area {
    display: flex;
    align-items: center;
    &_input {
      margin-left: auto;
      max-width: 100%;
      @media (max-width: 420px) {
        width: 55%;
      }
    }
    &_button {
      @include button-reset();
      margin-left: 16px;
    }
  }
</style>
