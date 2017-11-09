<template>
    <div class='Useslider'>
        <carousel>
            <slider>
                <img src="https://placehold.it/1200x400?text=one">
                <div class="carousel-caption">
                    ...
                </div>
            </slider>
            <slider>
                <img src="https://placehold.it/1200x400?text=two">
            </slider>
            <slider>
                <img src="https://placehold.it/1200x400?text=three">
            </slider>
        </carousel>
    </div>
</template>
<script type='text/ecmascript-6'>
  import {
    carousel,
    slider
  } from 'vue-strap'
  export default{
    components: {
      carousel,
      slider
    }
  }
</script>
<style scoped>
    .Useslider {
    }
</style>
