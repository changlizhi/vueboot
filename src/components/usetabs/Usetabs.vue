<template>
    <tabs>
        <tab header='one'>
            ...ssssssssss
        </tab>
        <tab header='two'
             disabled>
            ...
        </tab>
        <tab-group header='group1'>
            <tab header='three'>
                ...
            </tab>
            <tab header='four'
                 disabled>
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
  import * as Vstrap from 'src/components/vstrap/Tabset.vue'
  export default{
    components: {
      tabs: Vstrap.Tabset,
      tabGroup: Vstrap.TabGroup,
      tab: Vstrap.Tab
    }
  }
</script>
<style scoped>
    .Usetabs {
    }
</style>
