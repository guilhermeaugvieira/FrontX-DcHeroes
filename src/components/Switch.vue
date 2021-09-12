<template>
  <div class="switch-group">
    <span class="title">{{title}}</span>
    <label
      class="switch"
      :class="{checked: value}"
      @click="changeState"
    >
      <span class="slider round"></span>
    </label>
  </div>
  
</template>

<script>
export default {
  name: "Switch",
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    changeState(){
      console.log(!this.value);
      this.$emit('input', !this.value);
    }
  },
}
</script>

<style lang="scss" scoped>
.switch-group{
  position: relative;
  display: flex;
  gap: 16px;

  .switch{
    width: 60px;
    height: 34px;
    position: relative;
    cursor: pointer;
    display: inline-block;

    &.checked .slider{
      background-color: #690505;

      &::before{
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
    }

    .slider{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;

      &.round {
        border-radius: 34px;

        &::before{
          border-radius: 50%;
        }
      }

      &::before{
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
      }
    }
  }
}
</style>