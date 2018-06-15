<template>
  <div id="app">
    <vue-stacked-carousel :items="vueStackedCarouselItems">
      <div slot-scope="{ item, index, opacity }" class="card">
        <div class="inner-card" :style="`opacity: ${opacity}`">
          <h3>{{item.title}}</h3>
          <p>{{item.description}}</p>
          <span>item - {{index}}</span>
        </div>
      </div>
      <span slot="arrow-left">arrow</span>
      <span slot="arrow-right">arrow</span>
    </vue-stacked-carousel>
  </div>
</template>

<script>
  import { VueStackedCarousel } from './components/index';

  export default {
    name: 'app',
    components: {
      VueStackedCarousel,
    },
   data() {
    return {
      vueStackedCarouselItems: [
        {
          title: 'A',
          description: 'Gut angepasste Zahnreinigung ergeben ein völlig natürliches Zahngefühl und Zahnkosmetik und stören somit auch das Kausystem nicht',
        },
        {
          title: 'B',
          description: 'Gut angepasste Zahnreinigung ergeben ein völlig natürliches Zahngefühl und Zahnkosmetik und stören somit auch das Kausystem nicht',
        },
        {
          title: 'C',
          description: 'Gut angepasste Zahnreinigung ergeben ein völlig natürliches Zahngefühl und Zahnkosmetik und stören somit auch das Kausystem nicht',
        },
        {
          title: 'D',
          description: 'Gut angepasste Zahnreinigung ergeben ein völlig natürliches Zahngefühl und Zahnkosmetik und stören somit auch das Kausystem nicht',
        },
        {
          title: 'E',
          description: 'Gut angepasste Zahnreinigung ergeben ein völlig natürliches Zahngefühl und Zahnkosmetik und stören somit auch das Kausystem nicht',
        },
      ],
    };
  },
}
</script>
<style>
  .card {
    width: 327px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.15), 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
  .inner-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    transition: opacity .3s linear;
    user-select: none;
  }
  .vue-stacked-carousel-arrow.arrow-left {
    left: -70%;
  }
  .vue-stacked-carousel-arrow.arrow-right {
    right: -70%;
  }
</style>

