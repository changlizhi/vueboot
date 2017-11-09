<template>
  <navbar placement="top" type="default">
  <a slot="brand" href="javascript:" title="Home" class="navbar-brand">VueStrap</a>
  <dropdown text="Dropdown">
    <li><a href="javascript:">Option</a></li>
  </dropdown>
  <li class="dropdown">
    <a href="javascript:" class="dropdown-toggle">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a href="javascript:">Option</a></li>
    </ul>
  </li>
  <li slot="right">
    <a href="https://github.com/yuche/vue-strap" target="_blank">Fork...</a>
  </li>
</navbar>
</template>
<script>
  import { navbar, dropdown } from 'vue-strap'
  export default{
    components: {
      navbar,
      dropdown
    }
  }
</script>
<style scoped>
</style>