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
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img"></div>
                            <div class="web-passenger-product-box-text">
                                <span>GDMK-01|浅云</span><br />
                                <span
                                    >吊 顶:镜面一体式轿
                                    壁:镜面蚀刻/发纹不锈钢</span
                                ><br />
                                <span>地 板:大理石</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720度展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
                            <div class="web-passenger-product-box-text">
                                <span class="text4">GDMK-01|浅云</span><br />
                                <span class="text5"
                                    >吊 顶:镜面一体式轿
                                    壁:镜面蚀刻/发纹不锈钢</span
                                ><br />
                                <span class="text5">地 板:大理石</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <!-- <button
                                  style="
                                      width: 8.5625rem;
                                      height: 2.5rem;
                                      border-radius: 3.125rem;

                                      background: rgb(170, 215, 239);
                                  "
                              >
                                  720度展示
                              </button> -->
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720度展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img"></div>
                            <div class="web-passenger-product-box-text">
                                <span>GDMK-01|浅云</span><br />
                                <span
                                    >吊 顶:镜面一体式轿
                                    壁:镜面蚀刻/发纹不锈钢</span
                                ><br />
                                <span>地 板:大理石</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <!-- <button
                                  style="
                                      width: 8.5625rem;
                                      height: 2.5rem;
                                      border-radius: 3.125rem;

                                      background: rgb(170, 215, 239);
                                  "
                              >
                                  720度展示
                              </button> -->
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720度展示</a
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
    font-size: calc(1.3333vw + 3.75px); /* 动态调整字体大小 */
}
.web {
    width: 750px;
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
    margin-left: 5.3333vw;
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
    letter-spacing: -0.4vw;
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
    border: 0.1333vw solid rgba(0, 0, 0, 0.24);
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
}
.web
    .web-center
    .web-text
    .web-passenger-product
    .web-passenger-product-box
    .web-passenger-product-box-img {
    width: 40%;
    height: 99%;
    background: pink;
    background-size: cover;
    background-repeat: no-repeat;
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
    background: pink;
    margin: auto;
    color: rgb(0, 80, 165);
    font-family: 思源黑体;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.1875rem;
    letter-spacing: 0vw;
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
    background: pink;
}
.button-link {
    display: inline-block;
    width: 100%;
    max-width: 20vw;
    height: 5.3333vw;
    color: white;
    text-decoration: none;
    border-radius: 6.6667vw;
    background: rgb(170, 215, 239);
    border: none;
    cursor: pointer;
    color: rgb(0, 0, 0);
    font-family: 思源黑体;
    font-size: 1rem;
    font-weight: 400;
    line-height: 2.4375rem;
    letter-spacing: 0vw;
    text-align: center;
}
/* 字体 */
.chinese {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 3.4667vw;
    font-weight: 700;
    line-height: 5.0667vw;
    letter-spacing: -0.4vw;
    text-align: left;
}
.english {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 1.8667vw;
    font-weight: 400;
    line-height: 2.6667vw;
    letter-spacing: 0vw;
    text-align: left;
}
.text3 {
    color: rgba(117, 171, 227, 0.87);
    font-family: 思源黑体;
    font-size: 2.4vw;
    font-weight: 700;
    line-height: 3.4667vw;
    letter-spacing: 0vw;
    text-align: left;
}
.text4 {
    color: rgb(0, 43, 125);
    font-family: 思源黑体;
    font-size: 3.7333vw;
    font-weight: 400;
    line-height: 5.4667vw;
    letter-spacing: 0vw;
    text-align: left;
}
.text5 {
    color: rgb(0, 80, 165);
    font-family: 思源黑体;
    font-size: 2.6667vw;
    font-weight: 400;
    line-height: 4.6667vw;
    letter-spacing: 0vw;
    text-align: left;
}
.text6 {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 2.6667vw;
    font-weight: 700;
    line-height: 3.8667vw;
    letter-spacing: 0vw;
    text-align: left;
}
.text7 {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 1.6vw;
    font-weight: 400;
    line-height: 2.2667vw;
    letter-spacing: 0vw;
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

/* 横屏模式 */
@media (orientation: landscape) {
    .container {
        flex-direction: row;
    }
}

/* 竖屏模式 */
@media (orientation: portrait) {
    .container {
        flex-direction: column;
    }
}
@media screen and (max-width: 160vw) {
    html {
        font-size: 2.6667vw; /* iPad Pro */
    }
}

@media screen and (max-width: 109.3333vw) {
    html {
        font-size: 2.4vw; /* iPad */
    }
}

@media screen and (max-width: 64vw) {
    html {
        font-size: 2.1333vw; /* 大屏手机 */
    }
}

@media screen and (max-width: 57.3333vw) {
    html {
        font-size: 2vw; /* 中等屏手机 */
    }
}

@media screen and (max-width: 55.2vw) {
    html {
        font-size: 2vw; /* 常规小屏手机 */
    }
}

@media screen and (max-width: 23.5rem) {
    html {
        font-size: 1.3333vw; /* 超小屏手机 */
    }
}
</style>
