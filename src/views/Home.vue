<template>
  <div class="container">
    <Switch
      title="Dark Mode"
      class="switch"
    />
    <div class="content"
      :class="{dark: darkMode}"
    >
      <div v-for="(card, index) of cards" :key="index" class="card-content">
        <span class="previous"/>

        <Card
          :imageName="card.image"
          :firstParagraph="card.firstParagraph"
          :secondParagraph="card.secondParagraph"
        >
          <template v-slot:icon>
            <Component
              :is="card.icon"
            />
          </template>
        </Card>

        <span class="next"/>
      </div>      
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
    };
  },
  computed: {
    ...mapGetters({
      darkMode: 'theme/darkMode'
    })
  }
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

    &.dark{
      background-image: url("../assets/images/background-dark.png");
    }

    .card-content{
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 60px;
    }

    .previous{
      background-color: #c4c4c4;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      cursor: pointer;

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