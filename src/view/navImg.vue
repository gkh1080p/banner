<template>
  <div class="main">
    <div class="swiper" >
      <!-- 图片模块 -->
      <div class="carousel-container" :style="carouselStyle">
        <div class="swiper-item" v-for="(image, index) in images" :key="index">
          <a :href="image.url" :style="{ background: `url(${image.src})` }"
            style="background-repeat: no-repeat; background-position: center; background-size: 100% 100%;"></a>
        </div>
      </div>
      <!-- 导航栏模块 -->
      <div class="swiper-enum">
        <span v-for="(image, index) in images" :key="index" :class="{ active: radio == index }" 
          @click="goToSlide(index)"></span>
      </div>
    </div>
    <!-- 学车流程 -->
    <div class="menu-container">
      <div class="banner-menu">
        <p class="title">学车流程</p>
        <ul class="menu-list">
          <li class="icon1">
            <p class="p1"><a target="_blank" href="https://www.jiakaobaodian.com/mnks/kemu1/car-shaoyang.html">科目一</a>
            </p>
            <p class="p2">2024新题库</p>
          </li>
          <li class="icon2">
            <p class="p1"><a target="_blank" href="https://www.jiakaobaodian.com/mnks/kemu2/car-shaoyang.html">科目二</a>
            </p>
            <p class="p2">精选视频，详解考点</p>
          </li>
          <li class="icon3">
            <p class="p1"><a target="_blank" href="https://www.jiakaobaodian.com/mnks/kemu3/car-shaoyang.html">科目三</a>
            </p>
            <p class="p2">全方位讲解，攻克难点</p>
          </li>
          <li class="icon4">
            <p class="p1"><a target="_blank" href="https://www.jiakaobaodian.com/mnks/kemu4/car-shaoyang.html">科目四</a>
            </p>
            <p class="p2">2024新题库</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'

// 轮播图数据
const images = [
  {
    src: '../../static/images/common/home_banner_download.png',
    url: 'https://www.jiakaobaodian.com/download/'
  },
  {
    src: '../../static/images/common/home_banner_new.jpeg',
    url: 'https://www.mucang.cn/company/honor/'
  },
  {
    src: '../../static/images/common/home_banner_jiaolian.jpg',
    url: 'https://www.mucang.cn/jiaolianbaodian/?from=jxrz-topbanner'
  },
  {
    src: '../../static/images/common/home_banner_jiaxiaobang.png',
    url: 'https://saas-shop.jiakaobaodian.com/runtu/cooperate.html'
  },
  
];
// 状态管理
const currentIndex = ref(0)
let intervalId: number | null = null;

// 自动切换模块
const startCarousel = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
    
  }, 3000)

}
// 关闭切换
const stopCarousel = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

// 导航切换
const goToSlide = (index: number) => {
  currentIndex.value = index
  stopCarousel()
  startCarousel()
}
let radio = computed(() => {
  return currentIndex.value
})


onMounted(() => {

  // 打开自动切换
  startCarousel();

})
onUnmounted(() => {
  // 关闭自动切换
  stopCarousel()
})
const carouselStyle = computed(() => {
  return {
    transform: `translateX(-${currentIndex.value * 100}%)`,
  };
});


</script>

<style lang="css" scoped>
.main {
  width: 100%;
  max-height: 380px;
  position: relative;
  user-select: none; /* 禁止文本选择，以防止干扰触摸操作 */
  /* 轮播图 */
  .swiper {
    /* min-width: 100vw; */
    width: 100%;
    max-width:1920px;
    height: 380px;
    margin: auto;
    position: relative;
    overflow: hidden;
    .carousel-container {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;

      transition: transform 0.5s ease-in-out;

      .swiper-item {
        width: 100%;
        height: 100%;
        min-width: 100%;

        a {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }

    }

    /* 底部菜单 */
    .swiper-enum {
      z-index: 100;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translate(-50%, 0);
      

      span {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin: 0 5px;
        background: #000;
        opacity: .2;
        border-radius: 100%;
        
      }
      span:hover {
        background-color: #007aff;
        
      }
    }
    .swiper-enum span.active{
      background-color: #007aff;
      opacity: 1;
    }
  }


  .menu-container {
    width: 1200px;
    position: relative;
    overflow: visible;
    margin: 0 auto;

    .banner-menu {
      position: absolute;
      width: 280px;
      padding: 0 20px;
      top: -358px;
      box-sizing: border-box;
      background-color: rgba(255, 255, 255, .9);

      .title {
        line-height: 50px;
        font-size: 20px;
        border-bottom: 1px dotted #ddd;
        text-align: center;
      }

      .menu-list {
        width: 100%;
        color: #333;

        li:nth-child(1) {
          background: url('../assets/imgs/icon/icon1.png') left center no-repeat;
        }

        li:nth-child(2) {
          background: url('../assets/imgs/icon/icon2.png') left center no-repeat;
        }

        li:nth-child(3) {
          background: url('../assets/imgs/icon/icon3.png') left center no-repeat;
        }

        li:nth-child(4) {
          background: url('../assets/imgs/icon/icon4.png') left center no-repeat;
        }

        li {
          padding: 10px 20px 18px 50px;
          box-sizing: border-box;
          font-size: 14px;

          .p1 {
            color: #37B5F8;
            font-size: 16px;

            a {
              color: inherit;
              font-size: inherit;
            }
          }

          .p2 {
            color: #666;
            margin-top: 5px;
          }
        }

      }
    }
  }
}
</style>