<template>
    <div class="web">
        <!-- 页面头部 -->
        <div class="web-header">1</div>
        <div class="web-text">23</div>
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
    width: 100%;
    height: 230px;
    background-color: blue;
}
.web .web-center {
    width: 447px;
    height: 1000px;
    background-color: lightblue;
    margin: auto;
}
.web .web-center .web-center-elevator {
    width: 100%;
    height: 305px;
    background-color: yellow;
}
</style>
