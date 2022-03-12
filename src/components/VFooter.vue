<template>
  <footer class="footer">
    <small class="footer_copyright">Copyright {{ (new Date()).getFullYear() }} {{ $appName }}</small>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 83px;
    background: $color-background-dark;
    &_copyright {
      font-weight: 700;
      font-size: 16px;
      color: $color-primary-20;
    }
  }
</style>
