<template>
  <div class="nav">
    <ul class="nav_1">
      <li class="menu-jx active">
        <a>首页</a>
      </li>
      <li class="menu-jx">
        <a class="expand">模拟考试</a>
        <div class="nav_2">
          <a>科目一</a>
          <a>科目二</a>
          <a>科目三</a>
          <a>科目四</a>
        </div>
      </li>
      <li>
        <a class="expand">找驾校 </a>
        <div class="nav_2">
          <a>找驾校</a>
          <a>找教练</a>
          <a>找陪练</a>
        </div>
      </li>
      <li class="menu-jx">
        <a>驾考圈</a>
      </li>
      <li>
        <a>交通标志</a>
      </li>
      <li>
        <a href="https://www.jiakaobaodian.com/download/</a>">件下载</a>
      </li>
      <li>
        <a href="https://appstore-paas.jiakaobaodian.com/base/20240530175/?_fv=0.4621278887280802#/home"
          target="_blank">驾考宝典企业版</a>
      </li>
      <li>
        <a href="https://www.futurephantom.cn/" target="_blank">智慧驾车</a>
      </li>
      <li>
        <a href="https://www.maiche.com/rank/?from=jiakao_web" class="expand" target="_blank">买新车</a>
        <ul class="nav_2">
          <a href="https://www.maiche.com/rank/?from=jiakao_web" target="_blank">买车网</a>
          <a href="https://www.pingxing.cn/" target="_blank">平行之家</a>
        </ul>
      </li>
      <li>
        <a href="https://www.xiaozhu2.com/" target="_blank">二手车</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(()=>{
  let li_all = document.querySelectorAll('ul>li')
  li_all.forEach(item => {
    item.addEventListener("click", () => {
      li_all.forEach(item => item.classList.remove('active'));
      item.classList.add('active');
    })
  })

})
</script>

<style lang="scss" scoped>
.nav {
  background-color: #37b5f8;
  width: 100%;
  min-width: 1200px;
  font-size: 14px;
  box-sizing: border-box;
  color: #ffffff;
  position: relative;
  height: 50px;
  cursor: pointer;

  .nav_1 {
    width: 100%;
    margin: auto;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    margin: auto;
    .active {
  background-color: #258fc7;
  }

    li {
      min-width: 118px;
      height: 50px;
      padding: 0 20px;
      line-height: 50px;
      position: relative;
      box-sizing: border-box;
      text-align: center;
      .expand::after {
        content: "▼";
        font-size: 12px;
        margin-left: 5px;
      }

      .nav_2 {

        position: absolute;
        top: 50px;
        left: 0;
        background-color: #ffffff;
        width: 100%;
        padding: 10px 0;
        color: black;
        display: none;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
        z-index: 10;

        a {
          display: flex;
          width: 100%;
          text-align: center;
          z-index: 10;
          color: black;
          flex-flow: column;
          align-items: center;
        }

        a::after {
          content: "";
          width: 90%;
          height: 0;
          border: 1px solid #f6f6f6;
        }

        a:last-child::after {
          border: 0px;
        }

        a:hover {
          color: #37b5f8;
          background-color: #fff;
        }
      }

      &:hover {
        background-color: #258fc7;

        .nav_2 {
          display: flex;
        }

      }
    }


  }
}


</style>