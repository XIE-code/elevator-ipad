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
                                style="
                                    border: 0.1875rem solid
                                        rgba(0, 43, 125, 0.85);
                                "
                            />
                            <span class="text3"
                                >主要用于提升生活便捷性、增强家居安
                                全性、提高生活质量以及美化家居环境
                            </span>
                        </div>
                    </div>
                </div>
                <!-- 乘客电梯产品 -->
                <div
                    style="
                        display: flex;
                        flex-direction: column;
                        gap: 2.4844rem;
                    "
                >
                    <!-- 电梯1 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/villa-images/GDMV-01.jpg"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
                            <div class="web-passenger-product-box-text">
                                <span class="text4">GDMV-01</span><br />
                                <span class="text5"
                                    >吊顶:&nbsp;镜面不锈钢<br />
                                    娇壁:&nbsp;发纹/黑钛/黑钛蚀刻镜面不锈钢</span
                                ><br />
                                <span class="text5">地 板:&nbsp;大理石</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯2 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/villa-images/GDMV-02.jpg"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
                            <div class="web-passenger-product-box-text">
                                <span class="text4">GDMV-02</span><br />
                                <span class="text5"
                                    >吊顶:&nbsp;镜面一体式,LED柔光平板照明灯设计<br />
                                    娇壁:&nbsp;镜面蚀刻不锈钢，发纹不锈钢</span
                                ><br />
                                <span class="text5">地 板:&nbsp;PVC</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NDgzOTQ="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯3 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/villa-images/GDMV-03.jpg"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
                            <div class="web-passenger-product-box-text">
                                <span class="text4">GDMV-03</span><br />
                                <span class="text5"
                                    >吊顶:&nbsp;镜面一体式,LED柔光平板照明灯设计<br />
                                    娇壁:&nbsp;镜面蚀刻不锈钢，发纹不锈钢</span
                                ><br />
                                <span class="text5">地 板:&nbsp;PVC</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NDgzOTU="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯4 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/villa-images/GDMV-04.jpg"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
                            <div class="web-passenger-product-box-text">
                                <span class="text4">GDMV-04</span><br />
                                <span class="text5"
                                    >吊顶:&nbsp;镜面一体式,LED柔光平板照明灯设计<br />
                                    娇壁:&nbsp;镜面蚀刻不锈钢，发纹不锈钢</span
                                ><br />
                                <span class="text5">地 板:&nbsp;PVC</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NDgzOTY="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯5 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/villa-images/GDMV-05.jpg"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
                            <div class="web-passenger-product-box-text">
                                <span class="text4">GDMV-05</span><br />
                                <span class="text5"
                                    >吊顶:&nbsp;镜面一体式,LED柔光平板照明灯设计<br />
                                    娇壁:&nbsp;镜面蚀刻不锈钢，发纹不锈钢</span
                                ><br />
                                <span class="text5">地 板:&nbsp;PVC</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NDgzOTg="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯6 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/villa-images/GDMV-06.jpg"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
                            <div class="web-passenger-product-box-text">
                                <span class="text4">GDMV-06</span><br />
                                <span class="text5"
                                    >吊顶:&nbsp;镜面一体式,LED柔光平板照明灯设计<br />
                                    娇壁:&nbsp;镜面蚀刻不锈钢，发纹不锈钢</span
                                ><br />
                                <span class="text5">地 板:&nbsp;PVC</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NDgzOTk="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯7 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/villa-images/GDMV-07.jpg"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
                            <div class="web-passenger-product-box-text">
                                <span class="text4">GDMV-07</span><br />
                                <span class="text5"
                                    >吊顶:&nbsp;镜面一体式,LED柔光平板照明灯设计<br />
                                    娇壁:&nbsp;镜面蚀刻不锈钢，发纹不锈钢</span
                                ><br />
                                <span class="text5">地 板:&nbsp;PVC</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NDg0MDA="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯8 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/villa-images/GDMV-08.jpg"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
                            <div class="web-passenger-product-box-text">
                                <span class="text4">GDMV-08</span><br />
                                <span class="text5"
                                    >吊顶:&nbsp;镜面一体式,LED柔光平板照明灯设计<br />
                                    娇壁:&nbsp;镜面蚀刻不锈钢，发纹不锈钢</span
                                ><br />
                                <span class="text5">地 板:&nbsp;PVC</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯9 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/villa-images/GDMV-09.jpg"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
                            <div class="web-passenger-product-box-text">
                                <span class="text4">GDMV-09</span><br />
                                <span class="text5"
                                    >吊顶:&nbsp;镜面一体式,LED柔光平板照明灯设计<br />
                                    娇壁:&nbsp;镜面蚀刻不锈钢，发纹不锈钢</span
                                ><br />
                                <span class="text5">地 板:&nbsp;PVC</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯10 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/villa-images/GDMV-10.jpg"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
                            <div class="web-passenger-product-box-text">
                                <span class="text4">GDMV-10</span><br />
                                <span class="text5"
                                    >吊顶:&nbsp;镜面一体式,LED柔光平板照明灯设计<br />
                                    娇壁:&nbsp;镜面蚀刻不锈钢，发纹不锈钢</span
                                ><br />
                                <span class="text5">地 板:&nbsp;PVC</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
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

<script>
export default {
    data() {
        return {};
    },
    methods: {
        gotoVilla() {
            this.$router.push("/product/Villa");
        },
        gotPassenger() {
            this.$router.push("/");
        },
    },
};
</script>

<style scoped>
/* 基础样式 */

html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
}
.web {
    width: 100vw;
    height: 100vh;
    min-width: auto; /* ✅ 移除最小宽度限制 */
    margin: 0 auto;
    box-sizing: border-box;
}
.web .web-header {
    height: 9.33vh;
    background-color: pink;
    position: relative;
    width: 46.875rem;
    min-width: 46.875rem;
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
    background-image: url(@/assets/images/logo.png);
}

.web .web-text {
    width: 31.25rem;
    height: 75rem;
    margin-left: 40px;
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
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.1875rem;
    letter-spacing: -3px;
    text-align: left;
}

.web .web-center {
    display: flex;
    flex-direction: row;
}
.web .web-center .web-left {
    width: 8.8125rem;
    height: 41.1875rem;
    border-bottom: 0.0625rem solid rgba(184, 183, 183, 0.09);
    border-left: 0.0625rem solid rgba(184, 183, 183, 0.09);
    border-right: 0.0625rem solid rgba(184, 183, 183, 0.09);
    border-radius: 7.5rem 7.5rem 7.5rem 0rem;
    box-shadow: 0rem 0.25rem 0.3125rem 0rem rgba(0, 0, 0, 0.1);
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-around; /* 两个盒子分布在两端 */
    top: 0; /* 固定在顶部 */
    z-index: 10; /* 确保在其他内容之上 */
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
    padding: 0.625rem;
    background-image: url(@/assets/images/image1.png);
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
    border: 1px solid rgba(0, 0, 0, 0.24);
    background: rgb(255, 255, 255);
}
.web .web-center .web-text .web-passenger-product .web-passenger-product-box {
    width: 100%;
    height: 90%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around; /* 两个盒子分布在两端 */
    align-items: center; /* 垂直居中子元素 */
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
    width: 60%;
    height: 100%;
    margin: auto;
    color: rgb(0, 80, 165);
    font-family: 思源黑体;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.1875rem;
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
    font-size: 16px;
    font-weight: 400;
    line-height: 39px;
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
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.625rem;
    letter-spacing: 0px;
    text-align: left;
}
.text4 {
    color: rgb(0, 43, 125);
    font-family: 思源黑体;
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 2.5625rem;
    letter-spacing: 0px;
    text-align: left;
}
.text5 {
    color: rgb(0, 80, 165);
    font-family: 思源黑体;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 2.1875rem;
    letter-spacing: 0px;
    text-align: left;
}
.text6 {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.8125rem;
    letter-spacing: 0px;
    text-align: left;
}
.text7 {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.0625rem;
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
</style>
