> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
  <div>
    <Carousel>
      <CarouselItem>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        >
      </CarouselItem>
      <CarouselItem>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        >
      </CarouselItem>
      <CarouselItem>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        >
      </CarouselItem>
      <CarouselItem>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        >
      </CarouselItem>
    </Carousel>
    <style>
      .carousel-img {
        width: 100%;
        height: 240px;
        object-fit: cover;
      }
    </style>
  </div>
  `
}
```

> 自动切换

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
  <div>
    <Carousel autoPlay>
      <CarouselItem>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        >
      </CarouselItem>
      <CarouselItem>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        >
      </CarouselItem>
      <CarouselItem>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        >
      </CarouselItem>
      <CarouselItem>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        >
      </CarouselItem>
    </Carousel>
    <style>
      .carousel-img {
        width: 100%;
        height: 240px;
        object-fit: cover;
      }
    </style>
  </div>
  `
}
```

> 两种触发方式

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
  <div>
    <RadioGroup button model="trigger">
      <Radio value="click">
        click
      </Radio>
      <Radio value="hover">
        hover
      </Radio>
    </RadioGroup>
    <br>
    <br>
    <Carousel trigger="{{trigger}}">
      <CarouselItem>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        >
      </CarouselItem>
      <CarouselItem>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        >
      </CarouselItem>
      <CarouselItem>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        >
      </CarouselItem>
      <CarouselItem>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        >
      </CarouselItem>
    </Carousel>
    <style>
      .carousel-img {
        width: 100%;
        height: 240px;
        object-fit: cover;
      }
    </style>
  </div>
  `,
  data: {
    trigger: 'click',
  }
}
```

> 两种类型、四个方位

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
  <div>
    <Form inline showColon>
      <FormItem label="indicatorType">
        <RadioGroup button model="indicatorType">
          <Radio value="line">
            line
          </Radio>
          <Radio value="dot">
            dot
          </Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="indicatorPosition">
        <RadioGroup button model="indicatorPosition">
          <Radio value="top">
            top
          </Radio>
          <Radio value="right">
            right
          </Radio>
          <Radio value="bottom">
            bottom
          </Radio>
          <Radio value="left">
            left
          </Radio>
        </RadioGroup>
      </FormItem>
    </Form>
    <br>
    <Carousel indicatorType="{{indicatorType}}" indicatorPosition="{{indicatorPosition}}">
      <CarouselItem>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        >
      </CarouselItem>
      <CarouselItem>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        >
      </CarouselItem>
      <CarouselItem>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        >
      </CarouselItem>
      <CarouselItem>
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        >
      </CarouselItem>
    </Carousel>
    <style>
      .carousel-img {
        width: 100%;
        height: 240px;
        object-fit: cover;
      }
    </style>
  </div>
  `,
  data: {
    indicatorType: 'line',
    indicatorPosition: 'bottom',
  }
}
```

> Carousel Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
autoPlay | 是否自动切换 | boolean | - | -
interval | 自动切换的间隔时长 | numeric | - | `3000`
trigger | 触发切换的方式	 | string | `click`、`hover` | `click`
indicatorType | 指示器类型 | string | `dot`、`line` | `dot`
indicatorPosition | 指示器位置 | string | `top`、`right`、`bottom`、`left` | `bottom`
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> CarouselItem Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -