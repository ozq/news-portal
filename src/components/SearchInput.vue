<template>
  <div class="search-area">
    <transition name="fade">
      <input
        v-show="opened"
        ref="input"
        type="search"
        class="search-area_input"
        placeholder="Search news..."
        @input="onInput"/>
    </transition>
    <button class="search-area_button" @click="toggle">
      <icon-search/>
    </button>
  </div>
</template>

<script>
  import IconSearch from '@/assets/icons/search.svg';
  import _throttle from 'lodash/throttle';

  export default {
    components: {
      IconSearch,
    },
    props: {
      value: {
        type: String,
        default: '',
      },
      delay: {
        type: Number,
        default: 250,
      },
    },
    data() {
      return {
        opened: false,
        onInput: null,
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
    created() {
      this.onInput = _throttle((...args) => {
        this.$emit('input', args[0].target.value);
      }, this.delay);
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
      @media (max-width: $breakpoint-mobile) {
        width: 55%;
      }
    }
    &_button {
      @include reset-button();
      margin-left: 16px;
    }
  }
</style>
