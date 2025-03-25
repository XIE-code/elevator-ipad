<template>
    <div class="web">
        <!-- 页面头部 -->
        <div class="web-header">1</div>
        <!-- 页面主体 -->
        <div class="web-center">
            <!-- 侧边导航栏 -->
            <div class="web-left">3</div>
            <div class="web-text">2</div>
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

.web .web-text {
    width: 60%;
    height: 230px;
    background-color: gray;
    margin: auto;
}

.web .web-center {
    display: flex;
}
.web .web-center .web-left {
    width: 20%;
    height: 305px;
    background-color: green;
}
.web .web-center .web-center-elevator {
    width: 100%;
    height: 305px;
    background-color: yellow;
}
</style>
