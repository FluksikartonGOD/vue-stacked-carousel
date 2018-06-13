<template>
  <div class="vue-stacked-carousel" v-touch:swipe="swipe">
    <div class="vue-stacked-carousel-container" :style="containerStyle">
      <div v-for="(item, index) in items" :key="index" class="vue-stacked-carousel-item" :style="itemStyle(index).style">
        <slot :item="item" :index="index" :opacity="itemStyle(index).opacity"></slot>
      </div>
      <div class="vue-stacked-carousel-arrow" :style="`left: -${arrowDistnace}`" @click="slidePrev">
        <slot name="arrow-left"></slot>
      </div>
      <div class="vue-stacked-carousel-arrow" :style="`right: -${arrowDistnace}`" @click="slideNext">
        <slot name="arrow-right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-stacked-carousel',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    itemDepthRatio: {
      type: Number,
      default: 120,
    },
    itemDistance: {
      type: Number,
      default: 60,
    },
    transitionDuration: {
      type: Number,
      default: 0.3,
    },
    transitionTimingFunction: {
      type: String,
      default: 'ease-in-out',
    },
    arrowDistnace: {
      type: String,
      default: '70%',
    },
  },
  data() {
    return {
      currentItem: 0,
      highestHeight: 0,
      highestWidth: 0,
      containerStyle: {},
      inAnimation: false,
    };
  },
  computed: {
    itemLength() {
      return this.items.length;
    },
  },
  mounted() {
    this.reCalculateSizes();
  },
  methods: {
    reCalculateSizes() {
      let maxHeight = 0;
      let maxWidth = 0;
      const items = Array.from(this.$el.querySelectorAll('.vue-stacked-carousel-item'));
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemHeight = rect.height;
        const itemWidth = rect.width;
        if (itemHeight > maxHeight) {
          maxHeight = itemHeight;
        }
        if (itemWidth > maxWidth) {
          maxWidth = itemWidth;
        }
      });
      this.highestHeight = maxHeight;
      this.highestWidth = maxWidth;
      this.containerStyle = {
        height: `${this.highestHeight}px`,
        width: `${this.highestWidth}px`,
      };
    },
    itemStyle(index) {
      const order = index - this.currentItem;
      let zIndex;
      const preIndex = index - this.currentItem;
      if (preIndex >= 0)
        zIndex = this.itemLength - preIndex;
      else
        zIndex = this.itemLength + preIndex;

      const opacityRatio = 100 / this.itemLength;
      const opacity = (opacityRatio * zIndex) / 100;

      let depth = (-1) * this.itemDepthRatio * order;
      if (depth > 0)
        depth = (-1) * depth;
      const distance = this.itemDistance * order;
      const style = {
        zIndex,
        transform: `translate3d(${distance}px, 0, ${depth}px)`,
        transitionDuration: `${this.transitionDuration}s`,
        transitionTimingFunction: this.transitionTimingFunction,
      };
      return { style, opacity };
    },
    slideNext() {
      const check = this.currentItem === this.itemLength - 1;
      if (check || this.inAnimation) {
        return;
      }
      this.currentItem += 1;
      this.setAnimation();
    },
    slidePrev() {
      const check = this.currentItem === 0;
      if (check || this.inAnimation)
        return;
      this.currentItem -= 1;
      this.setAnimation();
    },
    swipe(e) {
      if (e === 'swipeleft')
        return this.slideNext();
      if (e === 'swiperight')
        return this.slidePrev();
    },
    setAnimation() {
      this.inAnimation = true;
      const timer = this.transitionDuration;
      setTimeout(() => {
        this.inAnimation = false;
      }, timer * 1000);
    },
  },
}
</script>
<style>
  .vue-stacked-carousel-container {
    position: relative;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    touch-action: pan-x;
    perspective: 1200px;
  }
  .vue-stacked-carousel-container .vue-stacked-carousel-item {
    position: absolute;
    top: 0;
    transform-style: preserve-3d;
    transition-property: all;
    will-change: transform;
  }
  .vue-stacked-carousel-container .vue-stacked-carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
</style>