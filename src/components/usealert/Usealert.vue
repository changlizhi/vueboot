<template>
    <div class='Usealert'>
        <alert type='success/info/danger/warning'>
            commmmm
        </alert>

        <alert :show.sync='showRight'
               placement='top-right'
               duration='3000'
               type='success'
               width='400px'
               dismissable>
            <span class='icon-ok-circled alert-icon-float-left'></span>
            <strong>Well Done!</strong>
            <p>You successfully read this important alert message.</p>
        </alert>

        <alert :show.sync='showTop'
               placement='top'
               duration='3000'
               type='danger'
               width='400px'
               dismissable>
            <span class='icon-info-circled alert-icon-float-left'></span>
            <strong>Heads up!</strong>
            <p>This alert needs your attention.</p>
        </alert>
    </div>
</template>
<script type='text/ecmascript-6'>
  import Alert from 'src/components/vstrap/Alert.vue'
  export default{
    components: {
      alert: Alert
    }
  }
</script>
<style scoped>
    .Usealert {
    }
</style>
