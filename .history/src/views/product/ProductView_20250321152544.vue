<template>
    <div class="container">
        <div class="header">
            <h1>佳登曼电梯产品中心</h1>
        </div>
        <div class="nav">
            <a href="#">乘客电梯</a>
            <a href="#">别墅电梯</a>
        </div>
        <div class="product-list">
            <div class="product-item">
                <img src="elevator1.jpg" alt="GDMK-01" />
                <div class="product-info">
                    <h3>GDMK-01 | 浅云</h3>
                    <p>吊顶: 镜面一体式</p>
                    <p>轿壁: 镜面蚀刻/发纹不锈钢</p>
                    <p>地板: 大理石</p>
                    <a href="#" class="view-button">720°展示</a>
                </div>
            </div>
            <div class="product-item">
                <img src="elevator2.jpg" alt="GDMK-02" />
                <div class="product-info">
                    <h3>GDMK-02 | 明月</h3>
                    <p>吊顶: 镜面一体式</p>
                    <p>轿壁: 镜面蚀刻/发纹不锈钢</p>
                    <p>地板: 大理石</p>
                    <a href="#" class="view-button">720°展示</a>
                </div>
            </div>
            <div class="product-item">
                <img src="elevator3.jpg" alt="GDMK-03" />
                <div class="product-info">
                    <h3>GDMK-03 | 天青</h3>
                    <p>吊顶: 镜面一体式</p>
                    <p>轿壁: 镜面蚀刻/发纹不锈钢</p>
                    <p>地板: 大理石</p>
                    <a href="#" class="view-button">720°展示</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
}
.container {
    width: 80%;
    margin: 20px auto;
}
.header {
    background-color: #007bff;
    color: white;
    padding: 10px 0;
    text-align: center;
}
.nav {
    display: flex;
    justify-content: space-around;
    background-color: #f8f9fa;
    padding: 10px 0;
}
.nav a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
}
.product-list {
    margin-top: 20px;
}
.product-item {
    border: 1px solid #ddd;
    margin-bottom: 20px;
    padding: 10px;
    background-color: white;
}
.product-item img {
    width: 100%;
    height: auto;
}
.product-info {
    margin-top: 10px;
}
.product-info h3 {
    margin: 0;
    font-size: 18px;
}
.product-info p {
    margin: 5px 0;
    color: #555;
}
.view-button {
    display: inline-block;
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}
</style>
