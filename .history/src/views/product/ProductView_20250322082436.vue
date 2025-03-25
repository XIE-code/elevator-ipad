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
                    <div class="web-passenger-text"></div>
                </div>
                <div class="web-passenger-product">4</div>
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
.web
    .web-center
    .web-text
    .web-passenger
    .web-passenger-image
    .web-passenger-text {
    height: 10.8125rem;
    width: 15.625rem;
    background: #000;
}

.web .web-center .web-text .web-passenger-product {
    width: 100%;
    height: 19.0625rem;
    background: greenyellow;
}
</style>
