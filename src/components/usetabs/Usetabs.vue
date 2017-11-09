<template>
    <tabset>
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
    </tabset>
</template>
<script>
  import Accordion from 'src/components/vstrap/Accordion.vue'
  import Affix from 'src/components/vstrap/Affix.vue'
  import Alert from 'src/components/vstrap/Alert.vue'
  import Aside from 'src/components/vstrap/Aside.vue'
  import buttonGroup from 'src/components/vstrap/buttonGroup.vue'
  import Carousel from 'src/components/vstrap/Carousel.vue'
  import Checkbox from 'src/components/vstrap/Checkbox.vue'
  import Datepicker from 'src/components/vstrap/Datepicker.vue'
  import Dropdown from 'src/components/vstrap/Dropdown.vue'
  import FormGroup from 'src/components/vstrap/FormGroup.vue'
  import Input from 'src/components/vstrap/Input.vue'
  import Modal from 'src/components/vstrap/Modal.vue'
  import Navbar from 'src/components/vstrap/Navbar.vue'
  import Option from 'src/components/vstrap/Option.vue'
  import Panel from 'src/components/vstrap/Panel.vue'
  import Popover from 'src/components/vstrap/Popover.vue'
  import Progressbar from 'src/components/vstrap/Progressbar.vue'
  import Radio from 'src/components/vstrap/Radio.vue'
  import Select from 'src/components/vstrap/Select.vue'
  import Slider from 'src/components/vstrap/Slider.vue'
  import Spinner from 'src/components/vstrap/Spinner.vue'
  import Tab from 'src/components/vstrap/Tab.vue'
  import TabGroup from 'src/components/vstrap/TabGroup.vue'
  import Tabset from 'src/components/vstrap/Tabset.vue'
  import Tooltip from 'src/components/vstrap/Tooltip.vue'
  import Typeahead from 'src/components/vstrap/Typeahead.vue'
  export default{
    components: {
      accordion: Accordion,
      affix: Affix,
      alert: Alert,
      aside: Aside,
      buttonGroup: buttonGroup,
      carousel: Carousel,
      checkbox: Checkbox,
      datepicker: Datepicker,
      dropdown: Dropdown,
      formGroup: FormGroup,
      input: Input,
      modal: Modal,
      navbar: Navbar,
      option: Option,
      panel: Panel,
      popover: Popover,
      progressbar: Progressbar,
      radio: Radio,
      select: Select,
      slider: Slider,
      spinner: Spinner,
      tab: Tab,
      tabGroup: TabGroup,
      tabset: Tabset,
      tooltip: Tooltip,
      typeahead: Typeahead
    }
  }
</script>
<style scoped>
    .Usetabs {
    }
</style>
