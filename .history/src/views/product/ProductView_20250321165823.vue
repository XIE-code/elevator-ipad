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
            <div class="web-left">6</div>
            <div class="web-text">
                <div class="web-passenger">3</div>
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
    height: 6.25rem;
    background-color: pink;
    position: relative;
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
    background-image: url(@/assets/images/logo.png);
}

.web .web-header .web-header-box .web-header-box1 {
    /* 椭圆 1 */
    width: 35.29px;
    height: 40px;
    left: 13px;
    right: 31.71px;
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
    /* 椭圆 1 */
    width: 35.29px;
    height: 40px;
    left: 13px;
    right: 31.71px;
    top: 17px;
    bottom: -17px;
    background: rgb(255, 255, 255);
    border-radius: 50%; /* 设置圆形 */
    text-align: center;
}

.web .web-text {
    width: 447px;
    height: 1200px;
    background-color: gray;
    margin-left: 40px;
}

.web .web-center {
    display: flex;
}
.web .web-center .web-left {
    width: 141px;
    height: 659px;
    border-bottom: 1px solid rgba(184, 183, 183, 0.09);
    border-left: 1px solid rgba(184, 183, 183, 0.09);
    border-right: 1px solid rgba(184, 183, 183, 0.09);
    border-radius: 120px 120px 120px 0px;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.1);
    background: gray;
}
.web .web-center .web-text .web-passenger {
    width: 540px;
    height: 200px;
    background: goldenrod;
}
.web .web-center .web-text .web-passenger-product {
    width: 100%;
    height: 305px;
    background: greenyellow;
}
</style>
