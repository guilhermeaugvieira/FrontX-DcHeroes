<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <img
          :src="require(`../assets/images/${imageName}.png`)"
          :alt="imageName"/>
      </div>
      <div class="card-body">
        <h1>História</h1>
        <p>{{firstParagraph}}</p>
        <p>{{secondParagraph}}</p>
      </div>
      <div class="card-footer">
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
.container{
  display: inline-block;
}
</style>