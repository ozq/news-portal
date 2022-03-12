<template>
  <a href="/">
    <h1 class="logo">
      <span>News</span>
      <span>Portal</span>
    </h1>
  </a>
</template>

<style lang="scss" scoped>
  .logo {
    user-select: none;
    & > span {
      display: inline-block;
      padding: 8px;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 700;
      &:first-child {
        background: $color-primary;
        color: $color-background;
      }
    }
  }
</style>
