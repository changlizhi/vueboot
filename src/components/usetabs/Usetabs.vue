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
  import Tabset from 'src/components/vstrap/Tabset.vue'
  import TabGroup from 'src/components/vstrap/TabGroup.vue'
  import Tab from 'src/components/vstrap/Tab.vue'
  export default{
    components: {
      tabs: Tabset,
      tabGroup: TabGroup,
      tab: Tab
    }
  }
</script>
<style scoped>
    .Usetabs {
    }
</style>
