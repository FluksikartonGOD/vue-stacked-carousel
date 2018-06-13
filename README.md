# vue-stacked-carousel

> Vue stacked carousel component

### vue-stacked-carousel is a vue carousel component

## Installation

npm install vue-stacked-carousel
```

# API

## VueStackedCarousel

```js
import { VueStackedCarousel } from 'vue-stacked-carousel';

// usage in local component

export default {
  components: {
    VueStackedCarousel
  }
};
```

#### Props

| Prop    | Data Type | Required | Description        |
| ------- | --------- | -------- | ------------------ |
| `items`   | Array    | true     | Your array with data      |
| `itemDepthRatio` | Number    |          | Depth in pixels from each item |
| `itemDistance` | Number    |          | Distance in pixels between each item |
| `transitionDuration` | Number    |          | Duration of animation between items (0.3 default) |
| `transitionTimingFunction` | String    |          | default (ease-in-out) |
| `arrowDistnace` | String    |          | Arrow distance in % default (70%) |

###Basic Usage
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
</style>
```
## Author

&#169; [Georgi Antonov]
