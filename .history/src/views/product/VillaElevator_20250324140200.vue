<template>
    <div class="web">
        <!-- 页面头部 -->
        <div class="web-header">
            <div class="web-header-box">
                <div class="web-header-box1"></div>
                <div class="web-header-box2"></div>
            </div>
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
                                    border: 0.4vw solid rgba(0, 43, 125, 0.85);
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
                <div style="display: flex; flex-direction: column; gap: 5.3vw">
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
                                      width: 18.2667vw;
                                      height: 5.3333vw;
                                      border-radius: 6.6667vw;

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
                                      width: 18.2667vw;
                                      height: 5.3333vw;
                                      border-radius: 6.6667vw;

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
                                      width: 18.2667vw;
                                      height: 5.3333vw;
                                      border-radius: 6.6667vw;

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
.web {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
.web .web-header {
    height: 9.33vh;
    background-color: pink;
    position: relative;
    width: 100vw;
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
    background-size: cover;
    background-repeat: no-repeat;
}

.web .web-header .web-header-box .web-header-box1 {
    /* 椭圆 1 */
    width: 4.7vw;
    height: 2.5rem;
    left: 0.8125rem;
    right: 1.9819rem;
    top: 1.0625rem;
    bottom: -1.0625rem;
    background: rgb(117, 171, 227);
    border-radius: 50%; /* 设置圆形 */
    text-align: center;
    background-image: url(@/assets/images/right.png);
    background-size: cover;
    background-repeat: no-repeat;
}
.web .web-header .web-header-box .web-header-box2 {
    /* 椭圆 2 */
    margin-left: 0.3125rem;
    width: 2.2056rem;
    height: 2.5rem;
    left: 0.8125rem;
    right: 1.9819rem;
    top: 1.0625rem;
    bottom: -1.0625rem;
    box-shadow: 0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.18);
    background: rgb(255, 255, 255);
    border-radius: 50%; /* 设置圆形 */
    text-align: center;
    background-image: url(@/assets/images/left.png);
    background-size: cover;
    background-repeat: no-repeat;
}

.web .web-text {
    width: 59.6vw;
    height: auto;
    margin-left: 40px;
}
.web .web-text .center-title {
    width: 20.6vw;
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
    flex-wrap: wrap;
    padding: 1rem;
}
.web .web-center .web-left {
    width: 100%;
    max-width: 200px;
    margin-right: 1rem;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 1rem;
}
.web .web-center .web-left .navigation {
    width: 20.6vw;
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
    width: 72vw;
    height: 12.5rem;
    display: flex;
    flex-direction: row;
}
.web .web-center .web-text .web-passenger .web-passenger-image {
    height: 10.8125rem;
    width: 33vw;
    padding: 0.625rem;
    background-image: url(@/assets/images/image1.png);
    background-size: cover;
    background-repeat: no-repeat;
}
.web .web-center .web-text .web-passenger .web-passenger-text {
    height: 10.8125rem;
    width: 38.6vw;
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
    height: 19.0625rem;
    display: flex;
    justify-content: center; /* 水平居中子元素 */
    align-items: center; /* 垂直居中子元素（可选） */
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.24);
    background: rgb(255, 255, 255);
}
.web .web-center .web-text .web-passenger-product .web-passenger-product-box {
    width: 96vw;
    height: 90%;
    display: flex;
    flex-direction: row;
}
.web
    .web-center
    .web-text
    .web-passenger-product
    .web-passenger-product-box
    .web-passenger-product-box-img {
    width: 45%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
}
.web
    .web-center
    .web-text
    .web-passenger-product
    .web-passenger-product-box
    .web-passenger-product-box-text {
    width: 50%;
    height: 100%;
    background: white;
    margin: auto;
    color: rgb(0, 80, 165);
    font-family: 思源黑体;
    font-size: 24px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0px;
    text-align: left;
}

.web
    .web-center
    .web-text
    .web-passenger-product
    .web-passenger-product-box
    .web-passenger-product-box-text
    .web-passenger-product-box-text-bottom {
    width: 100%;
    height: 45px;
    bottom: 0;
    margin-top: 45px; /* 将子盒子推到容器的底部 */
}
.web
    .web-center
    .web-text
    .web-passenger-product
    .web-passenger-product-box
    .web-passenger-product-box-text
    .web-passenger-product-box-text-bottom
    .button-link {
    display: inline-block;
    width: 18.2667vw;
    height: 40px;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    background: rgb(170, 215, 239);
    border: none;
    cursor: pointer;
    color: rgb(0, 0, 0);
    font-family: 思源黑体;
    font-size: 20px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: left;
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
    font-size: 24px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0px;
    text-align: left;
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
</style>
