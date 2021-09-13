<template>
  <div class="container">
    <div class="card">
      <div class="card-header" :class="{dark:darkMode}">
        <div class="card-header-background" :style="{backgroundColor:imageColor}"></div>
        <img
          :src="require(`../assets/images/${imageName}.png`)"
          :alt="imageName"
          :style="{bottom:anchor.bottom,left:anchor.left,width:imageWidth}"
        />  
      </div>
      <div class="card-body" :style="{backgroundColor:imageColor}">
        <div class="card-body-background" :class="{dark:darkMode}">
          <h1>História</h1>
          <p>{{firstParagraph}}</p>
          <p>{{secondParagraph}}</p>
        </div>
      </div>
      <div class="card-footer" :class="{dark:darkMode}">
        <slot name="icon"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Card',
  props: {
    firstParagraph: {
      type: String,
      required: true,
    },
    secondParagraph: {
      type: String,
      required: true,
    },
    imageName: {
      type: String,
      required: true,
    },
    imageColor: {
      type: String,
      required: true,
    },
    anchor: {
      type: Object,
      required: true,
    },
    imageWidth: {
      type: String,
      required: true,
    }
  },
  computed: {
    ...mapGetters({
      darkMode: 'theme/darkMode'
    }),
  },
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
.container{
  display: inline-block;
  
  .card{
    width: 450px;
    display: flex;
    flex-direction: column;

    &-header{
      height: 300px;
      width: 100%;
      position: relative;
      background-color: white;
      z-index: 1;

      &.dark{
        background-color: $dark-mode-color;
      }

      &-background{
        top: -50px;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        z-index: -2;
        border: 1px solid transparent;
        border-radius: 50px;
        border-bottom-right-radius: 0;
      }

      &::before{
        content: '';
        top: 140px;
        left: 214px;
        right: 0;
        bottom: 0;
        z-index: -1;
        position: absolute;
        width: 0px;
        height: 0px;
        background-color: white;
        border-radius: 50%;
        box-shadow: 0 0 100px 90px #ccc;
      }

      img{
        position: absolute;
        width: 100%;
        height: auto;
        z-index: 2;
        user-select: none;
      }
    }

    &-body{
      min-height: 250px;
      width: 100%;
      position: relative;
      display: flex;

      &-background{
        background-color: white;
        border-top-right-radius: 50px;
        padding-left: 40px;
        padding-right: 56px;
        user-select: none;

        &.dark{
          background-color: $dark-mode-color;
          color: white;
        }

        p{
          margin: 0;

          &:nth-child(2){
            padding-bottom: 16px;
          }
        }
      }
    }

    &-footer{
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      z-index: 1;
      background-color: white;
      height: 25px;
      width: 100%;
      border-bottom-right-radius: 50px;
      border-bottom-left-radius: 50px;
      padding-right: 20px;
      padding-bottom: 10px;

      &.dark{
        background-color: $dark-mode-color;
      }
    }
  }
}
</style>