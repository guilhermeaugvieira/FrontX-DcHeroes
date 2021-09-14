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
      <div class="dark-clouds" v-if="darkMode"> 
        <span class="dark-cloud cloud-1"/>
        <span class="dark-cloud cloud-2"/>
        <span class="dark-cloud cloud-3"/>
        <span class="dark-cloud cloud-4"/>
        <span class="dark-cloud cloud-5"/>
        <span class="dark-cloud cloud-6"/>
        <span class="dark-cloud cloud-7"/>
      </div>
      <div class="light-clouds" v-else>
        <span class="light-cloud cloud-1"/>
        <span class="light-cloud cloud-2"/>
        <span class="light-cloud cloud-3"/>

      </div>
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

    .dark-clouds{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      
      .dark-cloud{
        &::before{
          position: absolute;
          width: 1px;
          height: 1px;
          background-color: white;
          border-radius: 50%;
          content: '';
        }

        &.cloud-1{
          &::before{
            left: -50px;
            top: -50px;
            box-shadow: 0 0 400px 300px rgba(255,255,255,0.7);
          }
        }

        &.cloud-2{
          &::before{
            left: 350px;
            bottom: 60px;
            box-shadow: 0 0 600px 450px rgba(255,255,255,0.7);
          }
        }
        
        &.cloud-3{
          &::before{
            left: 900px;
            bottom: 60px;
            box-shadow: 0 0 150px 250px rgba(255,255,255,0.7);
          }
        }

        &.cloud-4{
          &::before{
            right: 0px;
            top: 0px;
            box-shadow: 0 0 200px 250px rgba(255,255,255,0.7);
          }
        }

        &.cloud-5{
          &::before{
            right: 400px;
            top: 40px;
            box-shadow: 0 0 200px 250px rgba(255,255,255,0.7);
          }
        }

        &.cloud-6{
          &::before{
            right: 308px;
            top: 37px;
            box-shadow: 0 0 141px 150px rgba(255,255,255,0.7);
          }
        }

        &.cloud-7{
          &::before{
            right: 500px;
            top: 215px;
            box-shadow: 0 0 221px 150px rgba(255,255,255,0.7);
          }
        }
      }
    }

    .light-clouds{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      
      .light-cloud{
        &::before{
          position: absolute;
          width: 1px;
          height: 1px;
          background-color: white;
          border-radius: 50%;
          content: '';
        }

        &.cloud-1{
          &::before{
            left: -50px;
            top: -50px;
            box-shadow: 0 0 400px 300px rgba(0, 0, 0, 0.4);
          }
        }

        &.cloud-2{
          &::before{
            right: 350px;
            bottom: 315px;
            box-shadow: 0 0 600px 450px rgba(0, 0, 0, 0.4);
          }
        }
        
        &.cloud-3{
          &::before{
            right: 948px;
            top: 191px;
            box-shadow: 0 0 150px 250px rgba(0, 0, 0, 0.4);
          }
        }
      }
    }

    .previous{
      background-color: #c4c4c4;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 20%;

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
      left: 80%;

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