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
                            <span class="chinese">乘客电梯</span
                            >&nbsp;&nbsp;&nbsp;
                            <span class="english"> passenger elevator</span>
                            <hr
                                style="border: 3px solid rgba(0, 43, 125, 0.85)"
                            />
                            <span class="text3"
                                >主要是用于运送乘客的电梯，通常用于办公楼、宾馆等场合。它们注重安全性和舒适性，通常配有完善的安保系统和内部装饰</span
                            >
                        </div>
                    </div>
                </div>
                <!-- 乘客电梯产品 -->
                <div style="display: flex; flex-direction: column; gap: 30px">
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
                                        width: 137px;
                                        height: 40px;
                                        border-radius: 50px;

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
                                        width: 137px;
                                        height: 40px;
                                        border-radius: 50px;

                                        background: rgb(170, 215, 239);
                                    "
                                >
                                    720度展示
                                </button> -->
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720°展示<svg
                                            t="1742624418880"
                                            class="icon"
                                            viewBox="0 0 1024 1024"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            p-id="3121"
                                            width="200"
                                            height="200"
                                        >
                                            <path
                                                d="M775.779 418.172l-2.051 0c-15.159 0-27.6 4.355-39.583 11.771-10.486-30.584-37.159-52.615-71.513-52.615-15.16 0-29.638 4.354-41.62 11.77-10.487-30.583-37.172-52.615-71.527-52.615-13.399 0-25.85 3.357-36.873 9.255l0-78.691c0-42.861-32.418-77.606-75.59-77.606-43.173 0-78.17 34.745-78.17 77.606l0 301.282-47.49-47.295c-30.528-30.306-84.558-25.992-110.55 0s-43.038 78.308-5.818 115.528l218.306 216.875c4.504 4.471 9.455 8.2 14.663 11.353 39.803 32.47 85.412 51.692 181.857 51.692 220.324 0 240.728-118.865 240.728-265.492L850.548 495.777C850.547 452.917 818.952 418.172 775.779 418.172zM809.403 650.988c0 124.069-0.593 224.647-199.585 224.647-84.298 0-134.907-18.796-173.246-56.858L229.904 613.455c-18.285-18.285-13.687-41.664 1.282-56.633 14.968-14.968 42.441-15.486 56.902-1.131 0 0 36.259 36.045 67.498 67.1 23.641 23.502 44.408 44.145 44.408 44.145l0-391.72c0-20.302 16.578-36.76 37.028-36.76 20.449 0 34.448 16.459 34.448 36.76l0 249.154 0.415 0c-0.27 1.32-0.415 2.685-0.415 4.085 0 11.278 9.21 20.423 20.571 20.423 11.36 0 20.57-9.144 20.57-20.423 0-1.4-0.144-2.765-0.415-4.085l0.415 0L512.611 422.257c0-20.302 14.795-36.761 35.245-36.761 0 0 36.232-0.49 36.232 36.761l0 134.787 0.415 0c-0.27 1.321-0.415 2.686-0.415 4.085 0 11.279 9.21 20.423 20.57 20.423 11.361 0 20.571-9.143 20.571-20.423 0-1.399-0.144-2.764-0.415-4.085l0.415 0 0-93.942c0-20.303 14.559-36.762 35.01-36.762 0 0 36.983 2.303 36.983 36.762l0 118.449 0.415 0c-0.269 1.32-0.415 2.686-0.415 4.085 0 11.279 9.21 20.423 20.571 20.423s20.055-9.143 20.055-20.423c0-1.399-0.136-2.765-0.392-4.085l0.392 0 0-80.872c0-20.302 15.255-36.761 35.704-36.761 0 0 35.851-1.45 35.851 36.761C809.403 500.679 809.403 617.954 809.403 650.988zM328.307 382.755l0-68.631c-6.531-14.641-10.24-30.817-10.24-47.884 0-65.037 52.723-117.76 117.76-117.76s117.76 52.723 117.76 117.76c0 8.884-1.05 17.509-2.935 25.82 14.812 0.578 28.176 6.726 37.904 16.597 3.771-13.518 5.99-27.685 5.99-42.417 0-87.658-71.062-158.72-158.72-158.72s-158.72 71.062-158.72 158.72C277.107 312.36 296.898 353.755 328.307 382.755z"
                                                p-id="3122"
                                            ></path></svg
                                    ></a>
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
                                        width: 137px;
                                        height: 40px;
                                        border-radius: 50px;

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
    width: 100%;
    height: 70px;
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
    margin-left: 40px;
}
.web .web-text .center-title {
    width: 12.5rem;
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
}
.web .web-center .web-left {
    width: 8.8125rem;
    height: 41.1875rem;
    border-bottom: 0.0625rem solid rgba(184, 183, 183, 0.09);
    border-left: 0.0625rem solid rgba(184, 183, 183, 0.09);
    border-right: 0.0625rem solid rgba(184, 183, 183, 0.09);
    border-radius: 7.5rem 7.5rem 7.5rem 0rem;
    box-shadow: 0rem 0.25rem 0.3125rem 0rem rgba(0, 0, 0, 0.1);
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-around; /* 两个盒子分布在两端 */
}
.web .web-center .web-left .navigation {
    width: 9.6875rem;
    height: 5.3125rem;
    border-radius: 0rem 3.125rem 3.125rem 0rem;
    background: white;
    font-size: 1.25rem;
    transition: background-color 0.3s; /* 添加背景颜色过渡效果 */
    cursor: pointer;
}

.web .web-center .web-left .navigation:nth-child(1) {
    background: rgb(170, 215, 239);
}

.web .web-center .web-text .web-passenger {
    width: 33.75rem;
    height: 12.5rem;
    display: flex;
    flex-direction: row;
}
.web .web-center .web-text .web-passenger .web-passenger-image {
    height: 10.8125rem;
    width: 15.625rem;
    padding: 0.625rem;
    background-image: url(@/assets/images/image.png);
    background-size: cover;
    background-repeat: no-repeat;
}
.web .web-center .web-text .web-passenger .web-passenger-text {
    height: 10.8125rem;
    width: 18.125rem;
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
    width: 96%;
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
    background-image: url(@/assets/images/image.png);
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
.button-link {
    display: inline-block;
    width: 137px;
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
