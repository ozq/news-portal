<template>
  <header class="header">
    <div class="header_content">
      <logo/>
    </div>
    <div class="header_aside">
      <slot></slot>
    </div>
  </header>
</template>

<script>
  import Logo from '@/components/Logo';

  export default {
    components: {
      Logo,
    },
  };
</script>

<style lang="scss" scoped>
    .header {
      display: flex;
      align-items: center;
      padding: 32px 0;
      height: fit-content;
      justify-content: space-between;
      &_content {
        flex-shrink: 0;
      }
    }
</style>
