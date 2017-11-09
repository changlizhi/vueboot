<template>
  <tabs>
    <tab-group>
      <tab header='one'>
        ...ssssssssss
      </tab>
    </tab-group>
    <tab header='two' disabled>
      ...
    </tab>
    <tab-group header='group1'>
      <tab header='three'>
        ...
      </tab>
      <tab header='four' disabled>
        ...
      </tab>
    </tab-group>
    <tab-group header='group2'>
      <tab header='five'>
        ...
      </tab>
    </tab-group>
  </tabs>
</template>
<script>
  import {
    tabGroup,
    tabset,
    tab
  } from 'vue-strap'
  export default{
    components: {
      tabs: tabset,
      tabGroup: tabGroup,
      tab: tab
    }
  }
</script>
<style scoped>
    .Usetabs {
    }
</style>
