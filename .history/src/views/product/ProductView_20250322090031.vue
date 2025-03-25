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
                <div class="navigation1">
                    • 乘客电梯<br />
                    passenger elevator
                </div>
                <div class="navigation2">•别墅电梯</div>
            </div>
            <div class="web-text">
                <!-- 中心标题 -->
                <div class="center-title">
                    <span>PRODUCT</span>
                    <span>[ 佳登曼电梯|产品中心 ]</span>
                </div>
                <!-- 乘客电梯 -->
                <div class="web-passenger">
                    <div class="web-passenger-image"></div>
                    <div class="web-passenger-text">
                        <div class="web-passenger-text1">
                            <span>乘客电梯 passenger elevator</span>
                            <hr
                                style="
                                    border: 0;
                                    height: 2px;
                                    background-color: #000;
                                "
                            />
                            <span
                                >主要是用于运送乘客的电梯，通常用于办公楼、宾馆等场合。它们注重安全性和舒适性，通常配有完善的安保系统和内部装饰</span
                            >
                        </div>
                    </div>
                </div>
                <!-- 乘客电梯产品 -->
                <div class="web-passenger-product">
                    <div class="web-passenger-product-box">
                        <div class="web-passenger-product-box-img"></div>
                        <div class="web-passenger-product-box-text">
                            <span>GDMK-01|浅云</span><br />
                            <span
                                >吊 顶:镜面一体式轿 壁:镜面蚀刻/发纹不锈钢</span
                            ><br />
                            <span>地 板:大理石</span>
                            <div class="web-passenger-product-box-text-bottom">
                                <!-- <button
                                    style="
                                        width: 137px;
                                        height: 40px;
                                        border-radius: 50px;

                                        background: rgb(170, 215, 239);
                                    "
                                >
                                    720度展示
                                </button> -->
                                <a
                                    href="https://example.com"
                                    class="button-link"
                                    >点击我</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 中心部分 -->
        <div class="web-center">
            <div class="web-center-elevator">1</div>
            <div class="web-center-elevator">1</div>
            <div class="web-center-elevator">1</div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.button-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
.web {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
.web .web-header {
    width: 100%;
    height: 100px;
    background-color: pink;
    position: relative;
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

.web .web-header .web-header-box .web-header-box1 {
    /* 椭圆 1 */
    width: 2.2056rem;
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
    width: 27.9375rem;
    height: 75rem;
    background-color: gray;
    margin: 2.5rem;
}
.web .web-text .center-title {
    width: 12.5rem;
    height: 6.25rem;
    background: yellow;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    color: 002B7D;
    font-size: 1.5rem;
}

.web .web-center {
    display: flex;
}
.web .web-center .web-left {
    width: 8.8125rem;
    height: 41.1875rem;
    border-bottom: 0.0625rem solid rgba(184, 183, 183, 0.09);
    border-left: 0.0625rem solid rgba(184, 183, 183, 0.09);
    border-right: 0.0625rem solid rgba(184, 183, 183, 0.09);
    border-radius: 7.5rem 7.5rem 7.5rem 0rem;
    box-shadow: 0rem 0.25rem 0.3125rem 0rem rgba(0, 0, 0, 0.1);
    background: gray;
    display: flex;
    flex-direction: column;
    justify-content: space-around; /* 两个盒子分布在两端 */
}
.web .web-center .web-left .navigation1 {
    width: 9.6875rem;
    height: 5.3125rem;
    background: pink;
    border-radius: 0rem 3.125rem 3.125rem 0rem;
    background: rgb(170, 215, 239);
    font-size: 1.25rem;
}
.web .web-center .web-left .navigation2 {
    width: 9.6875rem;
    height: 5.3125rem;
    background: pink;
    border-radius: 0rem 3.125rem 3.125rem 0rem;
    background: rgba(0, 43, 125, 0.85);
}
.web .web-center .web-text .web-passenger {
    width: 33.75rem;
    height: 12.5rem;
    background: goldenrod;
    display: flex;
    flex-direction: row;
}
.web .web-center .web-text .web-passenger .web-passenger-image {
    height: 10.8125rem;
    width: 15.625rem;
    background: pink;
    padding: 0.625rem;
    background-image: url(@/assets/images/logo.png);
    background-size: cover;
    background-repeat: no-repeat;
}
.web .web-center .web-text .web-passenger .web-passenger-text {
    height: 10.8125rem;
    width: 18.125rem;
    background: bisque;
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
    background: greenyellow;
    display: flex;
    justify-content: center; /* 水平居中子元素 */
    align-items: center; /* 垂直居中子元素（可选） */
}
.web .web-center .web-text .web-passenger-product .web-passenger-product-box {
    width: 96%;
    height: 90%;
    background: pink;
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
    background: blanchedalmond;
    background-image: url(@/assets/images/logo.png);
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
    background: lavender;
    margin-top: 45px; /* 将子盒子推到容器的底部 */
}
</style>
