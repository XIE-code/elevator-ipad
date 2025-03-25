<template>
    <div class="web">
        <!-- 页面头部 -->
        <div class="web-header">1</div>
        <div class="web-text">2</div>
        <!-- 中心部分 -->
        <div class="web-center">3</div>
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
    height: 280px;
    background-color: blue;
}
</style>
