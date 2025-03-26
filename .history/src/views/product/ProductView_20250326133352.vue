<template>
    <div class="web">
        <!-- 页面头部按钮 -->
        <div class="web-header">
            <!-- <div class="web-header-box">
                <div class="web-header-box1"></div>
                <div class="web-header-box2"></div>
            </div> -->
            <div class="web-header-awa"></div>
        </div>
        <!-- 页面主体 -->
        <div class="web-center">
            <!-- 左侧边导航栏 -->
            <div class="web-left">
                <div class="navigation" @click="gotPassenger">
                    <span class="text6">• 乘客电梯</span><br />
                    <span class="text7">passenger elevator</span>
                </div>
                <div class="navigation" @click="gotoVilla">
                    <span class="text6">• 别墅电梯</span><br />
                    <span class="text7">Villa elevator</span>
                </div>
            </div>
            <div class="web-text">
                <!-- 中心标题 -->
                <div class="center-title">
                    <span style="text-align: center">PRODUCT</span>
                    <span
                        >[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;佳登曼电梯&nbsp;|&nbsp;产品中心
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span
                    >
                </div>
                <!-- 乘客电梯 -->
                <div class="web-passenger">
                    <div class="web-passenger-image"></div>
                    <div class="web-passenger-text">
                        <div class="web-passenger-text1">
                            <span class="chinese">乘客电梯</span
                            >&nbsp;&nbsp;&nbsp;
                            <span class="english"> passenger elevator</span>
                            <hr
                                style="
                                    border: 0.1875rem solid
                                        rgba(0, 43, 125, 0.85);
                                "
                            />
                            <span class="text3"
                                >主要是用于运送乘客的电梯，通常用于办公楼、宾馆等场合。它们注重安全性和舒适性，通常配有完善的安保系统和内部装饰</span
                            >
                        </div>
                    </div>
                </div>
                <!-- 乘客电梯产品 -->
                <div class="center-box" style="margin-top: 1.25rem">
                    <!-- 动态渲染电梯产品 -->
                    <div
                        v-for="(item, index) in elist"
                        :key="index"
                        class="web-passenger-product"
                    >
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img src="item.imgUrl" :alt="item.name" />
                            </div>
                            <div class="web-passenger-product-box-text">
                                <span class="text4">{{ item.name }}</span>
                                <span class="text5">
                                    {{ item.description }}
                                </span>
                                <!-- <span class="text5">地 板:PVC(大理石可选)</span> -->
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a :href="item.link" class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 定义电梯产品数据
const elist = ref([
    {
        imgUrl: "/images/elevator_images/image20.png",
        name: "GDMK-21|朱樱",
        description:
            "吊顶: 玫瑰金镜面不锈钢，亚克力透光板，LED灯\n墙壁: 玫瑰金镜面不锈钢，亚克力透光板，LED灯\n地板: PVC (大理石可选)",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTIwNTc=",
    },
]);

const gotoVilla = () => {
    router.push("/product/Villa");
};

const gotPassenger = () => {
    router.push("/");
};
</script>

<style scoped>
/* 基础样式 */
body,
html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/* 动态调整 html 的 font-size */
html {
    font-size: calc(0.625rem + 0.5vw); /* 动态调整字体大小 */
}
.web {
    width: 100%;
    height: 100%;
    min-width: auto; /* ✅ 移除最小宽度限制 */
    margin: 0 auto;
    box-sizing: border-box;
}
.web .web-header {
    height: 9.33vh;
    position: relative;
    width: 99vw;
    min-width: 46.875rem;
}
.web .web-header .web-header-box {
    width: 80px;
    height: 40px;
    background: whitesmoke;
    display: flex;
    flex-direction: row;
}
.web .web-header .web-header-awa {
    /* 小马 */
    width: 156px;
    height: 64px;
    top: 0;
    right: 0;
    position: absolute;
    background-image: url("");
}

.web .web-header .web-header-box .web-header-box1 {
    /* 椭圆 1 */
    width: 35.2896px;
    height: 40px;
    left: 13px;
    right: 31.7104px;
    top: 17px;
    bottom: -17px;
    background: rgb(117, 171, 227);
    border-radius: 50%; /* 设置圆形 */
    text-align: center;
    background-image: url(@/assets/images/right.png);
    background-size: cover;
    background-repeat: no-repeat;
}
.web .web-header .web-header-box .web-header-box2 {
    /* 椭圆 2 */
    margin-left: 5px;
    width: 35.2896px;
    height: 40px;
    left: 13px;
    right: 31.7104px;
    top: 17px;
    bottom: -17px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.18);
    background: rgb(255, 255, 255);
    border-radius: 50%; /* 设置圆形 */
    text-align: center;
    background-image: url(@/assets/images/left.png);
    background-size: cover;
    background-repeat: no-repeat;
}

.web .web-text {
    width: 500px;
    height: 1200px;
    margin-left: 2.5rem;
}
.web .web-text .center-title {
    width: 200px;
    height: 100px;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    color: rgba(0, 43, 125, 0.76);
    font-family: 思源黑体;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.1875rem;
    letter-spacing: -0.1875rem;
    text-align: left;
}

.web .web-center {
    display: flex;
    flex-direction: row;
}
.web .web-center .web-left {
    width: 141px;
    height: 659px;
    border-bottom: 1px solid rgba(184, 183, 183, 0.09);
    border-left: 1px solid rgba(184, 183, 183, 0.09);
    border-right: 1px solid rgba(184, 183, 183, 0.09);
    border-radius: 120px 120px 120px 0px;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.1);
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-around; /* 两个盒子分布在两端 */
    align-items: center; /* 垂直居中子元素 */
}
.web .web-center .web-left .navigation {
    width: 155px;
    height: 85px;
    border-radius: 0px 50px 50px 0px;
    background: white;
    font-size: 20px;
    transition: background-color 0.3s; /* 添加背景颜色过渡效果 */
    cursor: pointer;
}

.web .web-center .web-left .navigation:nth-child(1) {
    background: rgb(170, 215, 239);
}

.web .web-center .web-text .web-passenger {
    width: 540px;
    height: 200px;
    display: flex;
    flex-direction: row;
}
.web .web-text .center-box {
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.web .web-center .web-text .web-passenger .web-passenger-image {
    height: 173px;
    width: 250px;
    padding: 10px;
    background-image: url(@/assets/images/image1.png);
    background-size: cover;
    background-repeat: no-repeat;
}
.web .web-center .web-text .web-passenger .web-passenger-text {
    height: 173px;
    width: 290px;
    background-size: cover;
    background-repeat: no-repeat;
}
.web
    .web-center
    .web-text
    .web-passenger
    .web-passenger-text
    .web-passenger-text1 {
    width: 100%;
    height: 1.25rem;
}

.web .web-center .web-text .web-passenger-product {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 水平居中子元素 */
    align-items: center; /* 垂直居中子元素（可选） */
    box-sizing: border-box;
    border: 0.0625rem solid rgba(0, 0, 0, 0.24);
    background: rgb(255, 255, 255);
}
.web .web-center .web-text .web-passenger-product .web-passenger-product-box {
    width: 96%;
    height: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around; /* 两个盒子分布在两端 */
    align-items: center; /* 垂直居中子元素 */
    box-sizing: border-box;
    box-sizing: border-box;
}
.web
    .web-center
    .web-text
    .web-passenger-product
    .web-passenger-product-box
    .web-passenger-product-box-img {
    width: 9.375rem;
    height: 15.625rem;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 10px;
}
.web
    .web-center
    .web-text
    .web-passenger-product
    .web-passenger-product-box
    .web-passenger-product-box-img
    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.web
    .web-center
    .web-text
    .web-passenger-product
    .web-passenger-product-box
    .web-passenger-product-box-text {
    margin: auto;
    color: rgb(0, 80, 165);
    font-family: 思源黑体;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.1875rem;
    letter-spacing: 0rem;
    text-align: left;
    flex: 1; /* 文字部分占满剩余空间 */
}

.web
    .web-center
    .web-text
    .web-passenger-product
    .web-passenger-product-box
    .web-passenger-product-box-text
    .web-passenger-product-box-text-bottom {
    margin-top: bottom;
}
.button-link {
    display: inline-block;
    width: 100%;
    margin-bottom: 0.625rem;
    max-width: 9.375rem;
    height: 2.5rem;
    color: white;
    text-decoration: none;
    border-radius: 3.125rem;
    background: rgb(170, 215, 239);
    border: none;
    cursor: pointer;
    color: rgb(0, 0, 0);
    font-family: 思源黑体;
    font-size: 16px;
    font-weight: 400;
    line-height: 39px;
    letter-spacing: 0rem;
    text-align: center;
}
/* 字体 */
.chinese {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 1.625rem;
    font-weight: 700;
    line-height: 2.375rem;
    letter-spacing: -0.1875rem;
    text-align: left;
}
.english {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0rem;
    text-align: left;
}
.text3 {
    color: rgba(117, 171, 227, 0.87);
    font-family: 思源黑体;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.625rem;
    letter-spacing: 0rem;
    text-align: left;
}
.text4 {
    color: rgb(0, 43, 125);
    font-family: 思源黑体;
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 2.5625rem;
    letter-spacing: 0rem;
    text-align: left;
}
.text5 {
    color: rgb(0, 80, 165);
    font-family: 思源黑体;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 2.1875rem;
    letter-spacing: 0rem;
    text-align: left;

    display: block; /* 让每个 span 变成独立块，自动换行 */
    white-space: pre-line; /* 兼容换行符 (\n) */
    word-wrap: break-word; /* 处理长单词换行 */
    line-height: 1.5; /* 调整行距 */
}
.text6 {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.8125rem;
    letter-spacing: 0rem;
    text-align: left;
}
.text7 {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.0625rem;
    letter-spacing: 0rem;
    text-align: left;
}
/* 添加高亮效果的样式 */
.navigation .active {
    transition: background-color 0.3s; /* 平滑过渡效果 */
    background: rgb(170, 215, 239);
}
/* 默认样式 */
.container {
    display: flex;
    flex-direction: column;
}

@media screen and (max-width: 480px) {
    .web {
        transform: scale(0.55);
        transform-origin: top left;
    }
}

@media screen and (max-width: 431px) {
    .web {
        transform: scale(0.5);
        transform-origin: top left;
    }
}

@media screen and (max-width: 23.5rem) {
    .web {
        transform: scale(0.45);
        transform-origin: top left;
    }
}
@media screen and (min-width: 1000px) {
    .web {
        transform: scale(1.45);
        transform-origin: top left;
    }
}
@media screen and (min-width: 1300px) {
    .web {
        transform: scale(1.85);
        transform-origin: top left;
    }
}
</style>
