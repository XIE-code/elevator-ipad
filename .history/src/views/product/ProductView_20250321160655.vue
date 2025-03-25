<template>
    <div class="web">
        <!-- 页面头部 -->
        <div class="web-header">
            <div class="web-header-box"></div>
        </div>
        <!-- 页面主体 -->
        <div class="web-center">
            <!-- 侧边导航栏 -->
            <div class="web-left">3</div>
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
}
.web .web-header .web-header-box {
    width: 80px;
    height: 40px;
    background: rebeccapurple;
}

.web .web-text {
    width: 60%;
    height: 1200px;
    background-color: gray;
    margin-left: 40px;
}

.web .web-center {
    display: flex;
}
.web .web-center .web-left {
    width: 20%;
    height: 605px;
    background-color: green;
    border-radius: 50px;
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
