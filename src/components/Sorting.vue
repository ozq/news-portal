<template>
  <div class="sorting-wrapper">
    <button class="sorting-wrapper_button">
      <icon-sort @click="toggle"/>
    </button>
    <transition name="fade">
      <ul
        v-show="opened"
        class="sorting-list"
        ref="list">
        <li v-for="option in options"
            :key="option.type"
            class="sorting-list_item"
            @click="$emit('select', option.type)">
          {{ option.label }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
  import IconSort from '@/assets/icons/sort.svg';

  export default {
    data() {
      return {
        opened: false,
        options: [
          { type: 'asc', label: 'Newest to oldest' },
          { type: 'desc', label: 'Oldest to newest' },
        ],
      };
    },
    components: {
      IconSort,
    },
    methods: {
      toggle(event) {
        event.stopPropagation();
        this.opened = !this.opened;
      },
      onGlobalClick(event) {
        if (event.target.parentNode === this.$el) {
          return;
        }
        this.opened = false;
      },
    },
    created() {
      document.addEventListener('click', this.onGlobalClick);
    },
    destroyed() {
      document.removeEventListener('click', this.onGlobalClick);
    },
  };
</script>

<style lang="scss" scoped>
  .sorting-wrapper {
    display: inline-block;
    position: relative;
    &_button {
      @include reset-button();
    }
  }
  .sorting-list {
    @include reset-list();
    position: absolute;
    top: 32px;
    right: 0;
    min-width: 150px;
    padding: 8px 16px;
    background: $color-background;
    z-index: 9999;
    border-radius: 8px;
    border: solid 1px $color-primary-20;
    &_item {
      cursor: pointer;
      user-select: none;
      font-family: $font-family-secondary;
      padding: 8px 0;
      border-bottom: solid 1px $color-primary-20;
      color: $color-primary-40;
      transition: color 0.15s ease-in-out;
      &:hover {
        color: $color-primary;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
</style>
