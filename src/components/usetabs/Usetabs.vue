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
    tabs,
    tabGroup
  } from 'vue-strap'
  export default{
    components: {
      tabs,
      tabGroup
    }
  }
</script>
<style scoped>
    .Usetabs {
    }
</style>
