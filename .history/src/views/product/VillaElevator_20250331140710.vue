<template>
    <div class="web">
        <!-- 页面头部 -->
        <div class="web-header">
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
                            <span class="chinese">别墅电梯</span
                            >&nbsp;&nbsp;&nbsp;
                            <span class="english"> Villa elevator</span>
                            <hr
                                style="border: 3px solid rgba(0, 43, 125, 0.85)"
                            />
                            <span class="text3"
                                >主要用于提升生活便捷性、增强家居安
                                全性、提高生活质量以及美化家居环境
                            </span>
                        </div>
                    </div>
                </div>
                <!-- 乘客电梯产品 -->
                <div class="center-box" style="margin-top: 20px">
                    <!-- 动态渲染电梯产品 -->
                    <div
                        v-for="(item, index) in elist"
                        :key="index"
                        class="web-passenger-product"
                    >
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img :src="item.imgUrl" :alt="item.name" />
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
        imgUrl: "/images/villa-images/GDMV-01.jpg",
        name: "GDMV-01",
        description:
            "吊顶: 镜面不锈钢，亚克力灯饰，LED简灯\n娇壁: 发纹不锈钢，黑钛镜面不锈钢，黑钛镜面蚀刻不锈钢\n地板: PVC(大理石可选)",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NDgzOTM=",
    },
    {
        imgUrl: "/images/villa-images/GDMV-02.jpg",
        name: "GDMV-02",
        description:
            "吊顶: 镜面不锈钢，发纹不锈钢，暗藏灯带，LED灯\n娇壁: 镜面不锈钢，蚀刻，玫瑰金不锈钢，木纹化妆钢板\n地板: PVC(大理石可选)",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NDgzOTQ=",
    },
    {
        imgUrl: "/images/villa-images/GDMV-03.jpg",
        name: "GDMV-03",
        description:
            "吊顶: 香槟金发纹不锈钢，LED灯带，LED简灯\n娇壁: 香槟金镜面蚀刻不锈钢，香槟金发纹不锈钢\n地板: PVC(大理石可选)",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NDgzOTU=",
    },
    {
        imgUrl: "/images/villa-images/GDMV-04.jpg",
        name: "GDMV-04",
        description:
            "吊顶: 古铜不锈钢嵌条，LED简灯，暗藏灯带\n娇壁: 抗指纹古铜不锈钢，古铜镜面不锈钢，古铜镜面蚀刻不锈钢，影木装饰板\n地板: PVC(大理石可选)",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NDgzOTY=",
    },
    {
        imgUrl: "/images/villa-images/GDMV-05.jpg",
        name: "GDMV-05",
        description:
            "吊顶: 钢板烤漆，古铜边线，LED简灯，暗藏灯带\n娇壁: 黄古铜不锈钢，镜面不锈钢，木饰面，大理石纹\n地板: PVC(大理石可选)",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NDgzOTg=",
    },
    {
        imgUrl: "/images/villa-images/GDMV-06.jpg",
        name: "GDMV-06",
        description:
            "吊顶: 喷砂不锈钢，铝型钢材，LED简灯\n娇壁: 镜面不锈钢，岩板，喷砂不锈钢饰条，钢板贴膜，暗藏灯带\n地板: 人造大理石",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NDgzOTk=",
    },
    {
        imgUrl: "/images/villa-images/GDMV-07.jpg",
        name: "GDMV-07",
        description:
            "吊顶: 古铜不锈钢，LED灯带\n娇壁: 古铜不锈钢，古铜蚀刻不锈钢，古铜镜面不锈钢\n地板: PVC(大理石可选)",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NDg0MDA=",
    },
    {
        imgUrl: "/images/villa-images/GDMV-08.jpg",
        name: "GDMV-08",
        description:
            "吊顶: 柚木色铝合金框，柚木饰板\n娇壁: 镜面不锈钢，柚木色铝合金框，氛围灯，钢化夹胶玻璃\n地板: 柚木实木",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NDg0MDE=",
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
    font-size: calc(10px + 0.5vw); /* 动态调整字体大小 */
}
.web {
    width: 100%;
    height: 100%;
    min-width: auto; /* ✅ 移除最小宽度限制 */
    margin: 0 auto;
    box-sizing: border-box;
    overflow-x: hidden;
}
.web .web-header {
    height: 9.33vh;
    position: relative;
    width: 99vw;
    min-width: 750px;
}
.web .web-header .web-header-box {
    width: 5rem;
    height: 2.5rem;
    background: whitesmoke;
    display: flex;
    flex-direction: row;
}
.web .web-header .web-header-awa {
    /* 小马 */
    width: 9.75rem;
    height: 4rem;
    top: 0;
    right: 0;
    position: absolute;
    background-image: url("../../../public/images/logo.png");
}

.web .web-text {
    width: 500px;
    height: 1200px;
    margin-left: 25vw;
}
.web .web-text .center-title {
    width: 12.5rem;
    height: 6.25rem;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    color: rgba(0, 43, 125, 0.76);
    font-family: 思源黑体;
    font-size: 24px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: -3px;
    text-align: left;
}

.web .web-center {
    display: flex;
    flex-direction: row;
}
.web .web-center .web-left {
    width: 135px;
    height: 650px;
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
    position: fixed;
    z-index: 1;
    top: 100px;
    left: 0;
}
.web .web-center .web-left .navigation {
    width: 9.6875rem;
    height: 5.3125rem;
    border-radius: 0rem 3.125rem 3.125rem 0rem;
    background: white;
    font-size: 1.25rem;
    transition: background-color 0.3s; /* 添加背景颜色过渡效果 */
    cursor: pointer;
}

.web .web-center .web-left .navigation:nth-child(2) {
    background: rgb(170, 215, 239);
}

.web .web-center .web-text .web-passenger {
    width: 33.75rem;
    height: 12.5rem;
    display: flex;
    flex-direction: row;
}
.web .web-text .center-box {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
}
.web .web-center .web-text .web-passenger .web-passenger-image {
    height: 10.8125rem;
    width: 15.625rem;
    background-image: url("../../../public/images/image-villa.png");
    background-size: cover;
    background-repeat: no-repeat;
}
.web .web-center .web-text .web-passenger .web-passenger-text {
    height: 10.8125rem;
    width: 18.125rem;
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
    height: 20px;
}

.web .web-center .web-text .web-passenger-product {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 水平居中子元素 */
    align-items: center; /* 垂直居中子元素（可选） */
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.24);
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
    width: 150px;
    height: 250px;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0.625rem;
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
    font-size: 24px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0px;
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
    margin-bottom: 10px;
    max-width: 150px;
    height: 40px;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    background: rgb(170, 215, 239);
    border: none;
    cursor: pointer;
    color: rgb(0, 0, 0);
    font-family: 思源黑体;
    font-size: 1rem;
    font-weight: 400;
    line-height: 2.4375rem;
    letter-spacing: 0px;
    text-align: center;
}
/* 字体 */
.chinese {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 26px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: -3px;
    text-align: left;
}
.english {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
}
.text3 {
    color: rgba(117, 171, 227, 0.87);
    font-family: 思源黑体;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
}
.text4 {
    color: rgb(0, 43, 125);
    font-family: 思源黑体;
    font-size: 28px;
    font-weight: 400;
    line-height: 41px;
    letter-spacing: 0px;
    text-align: left;
}
.text5 {
    color: rgb(0, 80, 165);
    font-family: 思源黑体;
    font-size: 20px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0px;
    text-align: left;

    display: block; /* 让每个 span 变成独立块，自动换行 */
    white-space: pre-line; /* 兼容换行符 (\n) */
    word-wrap: break-word; /* 处理长单词换行 */
    line-height: 1.5; /* 调整行距 */
}
.text6 {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: left;
}
.text7 {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0px;
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
    .web .web-header,
    .web .web-text {
        transform: scale(0.52);
        transform-origin: top left;
    }
    .web .web-center .web-left {
        top: -100px;
        left: -20px;
        transform: scale(0.5);
    }
}

@media screen and (max-width: 376px) {
    .web .web-header,
    .web .web-text {
        transform: scale(0.45);
        transform-origin: top left;
    }
    .web .web-center .web-left {
        top: -100px;
        left: -15px;
        transform: scale(0.5);
    }
}
@media screen and (min-width: 1000px) {
    .web .web-header,
    .web .web-text {
        transform: scale(1.25);
        transform-origin: top left;
    }
}
</style>
