# vue-stacked-carousel

**css customizable stacked carousel, [Live Demo](https://fluksikartongod.github.io/vue-stacked-carousel/)**

## Installation

```
# install dependencies
npm install vue2-touch --save

npm install vue-stacked-carousel --save

```

## Basic Usage

### Use Vue2Touch 
```js
import Vue2Touch from 'vue2-touch'
Vue.use(Vue2Touch)
```

```js
import { VueStackedCarousel } from 'vue-stacked-carousel';

export default {
  components: {
    VueStackedCarousel
  }
};
```

```html
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
```
```js
data() {
  return {
    vueStackedCarouselItems: [
      {
        title: 'A',
        description: 'Something else here',
      },
      {
        title: 'B',
        description: 'Something else here',
      },
      {
        title: 'C',
        description: 'Something else here',
      },
      {
        title: 'D',
        description: 'Something else here',
      },
      {
        title: 'E',
        description: 'Something else here',
      },
    ],
  };
},
```

```css
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
```

## Props

| Prop    | Data Type | Required | Description        |
| ------- | --------- | -------- | ------------------ |
| `items`   | Array    | true     | Your array with data      |
| `itemDepthRatio` | Number    |          | Depth in pixels from each item  default (120px)|
| `itemDistance` | Number    |          | Distance in pixels between each item default (60px)  |
| `transitionDuration` | Number    |          | Duration of animation between items (0.3 default) |
| `transitionWait` | Boolean    |          | Default is (true), if set to false, it will not wait the transition to end on arrow click|
| `transitionTimingFunction` | String    |          | default (ease-in-out) |
| `arrowLeftClass` | String    |          | default (arrow-left) |
| `arrowRightClass` | String    |          | default (arrow-right) |


## Author

&#169; [Georgi Antonov]
