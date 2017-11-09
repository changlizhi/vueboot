<template>
    <div class='Usetabs'>
        <tabs>
            <tab header="one">
                ...
            </tab>
            <tab header="two"
                 disabled>
                ...
            </tab>
            <tab-group header="group1">
                <tab header="three">
                    ...
                </tab>
                <tab header="four"
                     disabled>
                    ...
                </tab>
            </tab-group>
            <tab-group header="group2">
                <tab header="five">
                    ...
                </tab>
            </tab-group>
        </tabs>
    </div>
</template>
<script type='text/ecmascript-6'>
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
