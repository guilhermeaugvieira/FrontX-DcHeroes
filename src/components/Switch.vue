<template>
  <div class="container">
    <div class="switch-group">
      <span class="title">{{title}}</span>
      <label
        class="switch"
        :class="{checked: darkMode}"
        @click="setTheme(!darkMode)"
      >
        <span class="slider round"></span>
      </label>
    </div>
  </div>  
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "Switch",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      setTheme: 'theme/changeTheme',
    }),
  },
  computed: {
    ...mapGetters({
      darkMode: 'theme/darkMode',
    }),
  },
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.container{
  display: inline-block;

  .switch-group{
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
    z-index: 2;

    .title{
      font-size: 16px;
      user-select: none;
    }

    .switch{
      width: 48px;
      height: 24px;
      position: relative;
      cursor: pointer;
      display: inline-block;

      &.checked .slider{
        background-color: $switch-enabled-color;

        &::before{
          -webkit-transform: translateX(23px);
          -ms-transform: translateX(23px);
          transform: translateX(23px);
        }
      }

      .slider{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000;
        -webkit-transition: .4s;
        transition: .4s;

        &.round {
          border-radius: 24px;

          &::before{
            border-radius: 50%;
          }
        }

        &::before{
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          -webkit-transition: .4s;
          transition: .4s;
        }
      }
    }
  }
}
</style>