<template>
  <Switch
    @input="selected = $event"
    title="Modo escuro"
    :value="selected"/>
</template>

<script>
import Switch from '@/components/Switch.vue';

export default {
  name: 'App',
  components: {
    Switch,
  },
  data(){
    return{
      selected: true,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
