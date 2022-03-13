<template>
  <div class="sorting-wrapper">
    <button class="sorting-button" @click="toggle">
      <span v-if="value" class="sorting-button_label">
        {{ value === 'asc' ? 'Oldest' : 'Newest' }}
      </span>
      <icon-sort/>
    </button>
    <transition name="fade">
      <ul
        v-show="opened"
        class="sorting-list"
        ref="list">
        <li v-for="option in options"
          :key="option.type"
          class="sorting-list_item"
          :class="{ '-active': value === option.type }"
          @click="onSelect(option)">
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
          { type: 'desc', label: 'Newest to oldest' },
          { type: 'asc', label: 'Oldest to newest' },
        ],
      };
    },
    props: {
      value: {
        type: String,
        default: 'desc',
      },
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
      onSelect(option) {
        this.$emit('input', option.type);
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
    display: flex;
    position: relative;
    align-items: center;
    height: 24px;
  }
  .sorting-button {
    @include reset-button();
    display: inline-flex;
    align-items: center;
    max-height: 100%;
    &_label {
      font-weight: 700;
      font-family: $font-family-secondary;
      margin-right: 16px;
      @media (max-width: $breakpoint-mobile) {
        font-size: 14px;
        margin-right: 8px;
      }
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
      &.-active, &:hover {
        color: $color-primary;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
</style>
