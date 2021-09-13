<template>
  <div
    class="container"
  >
    <Switch
      title="Dark Mode"
      class="switch"
    />
    <div class="content"
      :class="{dark: darkMode}"
    >
      <span class="previous"
        v-if="selectedCardIndex > 0"
        @click='changeCard("previous")'
      />

      <Card
        :imageName="cards[selectedCardIndex].image"
        :firstParagraph="cards[selectedCardIndex].firstParagraph"
        :secondParagraph="cards[selectedCardIndex].secondParagraph"
        :imageColor="cards[selectedCardIndex].imageColor"
        :anchor="cards[selectedCardIndex].anchor"
        :imageWidth="cards[selectedCardIndex].imageWidth"

      >
        <template v-slot:icon>
          <Component
            :is="cards[selectedCardIndex].icon"
          />
        </template>
      </Card>

      <span
        class="next"
        v-if="selectedCardIndex < cards.length - 1"
        @click='changeCard("next")'
      /> 
    </div>
  </div>
</template>

<script>
import Switch from '@/components/Switch.vue';
import Card from '@/components/Card.vue';
import {cardData} from '@/data/staticData.js';
import AcquamanLogo from '@/assets/svg/logo_acquaman.svg';
import BatmanLogo from '@/assets/svg/logo_batman.svg';
import CyborgLogo from '@/assets/svg/logo_cyborg.svg';
import FlashLogo from '@/assets/svg/logo_flash.svg';
import SupermanLogo from '@/assets/svg/logo_superman.svg';
import WonderWomanLogo from '@/assets/svg/logo_wonder_woman.svg';
import {mapGetters} from 'vuex';

export default {
  name: 'Home',
  components: {
    Switch,
    Card,
    AcquamanLogo,
    BatmanLogo,
    CyborgLogo,
    FlashLogo,
    SupermanLogo,
    WonderWomanLogo,
  },
  data(){
    return{
      cards: cardData,
      selectedCardIndex: 0,
    };
  },
  computed: {
    ...mapGetters({
      darkMode: 'theme/darkMode'
    })
  },
  methods: {
    changeCard(indicator){
      if(indicator === 'previous'){
        this.selectedCardIndex -= 1;
      }

      if(indicator === 'next'){
        this.selectedCardIndex += 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container{
  position: relative;

  .switch{
    position: absolute;
    top: 60px;
    right: 100px;
  }

  .content{
    height: 100vh;
    background-image: url("../assets/images/background-light.png");
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &.dark{
      background-image: url("../assets/images/background-dark.png");
    }

    .previous{
      background-color: #c4c4c4;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 30%;

      &::before{
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;

        border-top: 30px solid transparent;
        border-bottom: 30px solid transparent; 
        border-right: 30px solid black;

        margin-left: 25px;
        margin-top: 15px;
      }
    }

    .next{
      background-color: #c4c4c4;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 70%;

      &::before{
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;

        border-top: 30px solid transparent;
        border-bottom: 30px solid transparent; 
        border-left: 30px solid black;

        margin-left: 35px;
        margin-top: 15px;
      }
    }
  }
}
</style>