<template xmlns:v-el='http://www.w3.org/1999/xhtml'>
    <span v-el:trigger>
        <slot></slot>
        <div v-el:popover
             v-if='show'
             style='display:block;'
             :class='["tooltip",placement]'
             :transition='effect'>
            <div class='tooltip-arrow'></div>
            <div class='tooltip-inner'>
                <slot name='content'>
                    {{{content}}}
                </slot>
            </div>
        </div>
    </span>
</template>

<script>
  import PopoverMixin from './utils/popoverMixins.js'

  export default {
    mixins: [PopoverMixin],
    props: {
      trigger: {
        type: String,
        default: 'hover'
      },
      effect: {
        type: String,
        default: 'scale'
      }
    }
  }
</script>

<style>
    .tooltip.top,
    .tooltip.left,
    .tooltip.right,
    .tooltip.bottom {
        opacity: .9
    }

    .fadein-enter {
        animation: fadein-in 0.3s ease-in;
    }

    .fadein-leave {
        animation: fadein-out 0.3s ease-out;
    }

    @keyframes fadein-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: .9;
        }
    }

    @keyframes fadein-out {
        0% {
            opacity: .9;
        }
        100% {
            opacity: 0;
        }
    }
</style>
