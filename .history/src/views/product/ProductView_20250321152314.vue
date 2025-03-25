<template>
    <div class="container">
        <!-- 侧边栏 -->
        <aside class="sidebar">
            <h2>电梯分类</h2>
            <ul>
                <li class="active">乘客电梯</li>
                <li>别墅电梯</li>
            </ul>
        </aside>

        <!-- 主要内容区 -->
        <main class="content">
            <header class="header">
                <h1>乘客电梯</h1>
            </header>

            <section class="product-list">
                <div class="product-card">
                    <img src="elevator1.jpg" alt="GDMK-01" />
                    <h3>GDMK-01 | 浅云</h3>
                    <p>吊顶: 镜面一体式</p>
                    <button>720° 展示</button>
                </div>

                <div class="product-card">
                    <img src="elevator2.jpg" alt="GDMK-02" />
                    <h3>GDMK-02 | 明月</h3>
                    <p>吊顶: 镜面一体式</p>
                    <button>720° 展示</button>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup></script>

<style scoped>
.container {
    display: flex;
    height: 100vh;
}

/* 侧边栏 */
.sidebar {
    width: 25%;
    background: #f0f4f8;
    padding: 20px;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar li {
    padding: 10px;
    cursor: pointer;
}

.sidebar .active {
    background: blue;
    color: white;
}

/* 主内容区 */
.content {
    width: 75%;
    padding: 20px;
}

.product-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.product-card {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
}
</style>
