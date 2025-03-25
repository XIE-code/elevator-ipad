<template>
    <div class="web">
        <!-- 页面头部按钮 -->
        <div class="web-header">
            <!-- <div class="web-header-box">
                <div class="web-header-box1"></div>
                <div class="web-header-box2"></div>
            </div> -->
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
                <div class="center-box">
                    <!-- 电梯1 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image01.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
                            <div class="web-passenger-product-box-text">
                                <span class="text4">GDMK-01|浅云</span><br />
                                <span class="text5"
                                    >吊 顶:镜面一体式,LED柔光平板照明灯设计
                                    壁:镜面蚀刻不锈钢，发纹不锈钢</span
                                ><br />
                                <span class="text5">地 板:PVC</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯2 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
                            <div class="web-passenger-product-box-text">
                                <span class="text4">GDMK-02|明月</span><br />
                                <span class="text5"
                                    >吊 顶:镜面一体式，LED柔光平板照明灯设计
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
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯3 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯4 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯5 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯6 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯7 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯8 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯9 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯10 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯11 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯12 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯13 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯14 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯14 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯14 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯14 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯14 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯14 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯14 -->
                    <div class="web-passenger-product">
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img
                                    src="@/assets/images/image1.png"
                                    alt=""
                                    style="width: 100%; height: 100%"
                                />
                            </div>
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
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ="
                                        class="button-link"
                                        >720°展示</a
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
html {
    font-size: clamp(0.625rem, 2vw, 1rem); /* 📌 根据屏幕宽度自适应字体大小 */
}
.web {
    width: 100%;
    height: 100%;
    min-width: auto; /* ✅ 移除最小宽度限制 */
    margin: 0 auto;
    box-sizing: border-box;
}
.web .web-header {
    height: 9.33vh;
    background-color: pink;
    position: relative;
    width: 100vw;
    min-width: 750px;
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
.web .web-text .center-box {
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.web .web-center .web-text .web-passenger .web-passenger-image {
    height: 10.8125rem;
    width: 15.625rem;
    padding: 0.625rem;
    background-image: url(@/assets/images/image1.png);
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
    height: 335px;
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
    justify-content: space-around; /* 两个盒子分布在两端 */
    align-items: center; /* 垂直居中子元素 */
    box-sizing: border-box;
}
.web
    .web-center
    .web-text
    .web-passenger-product
    .web-passenger-product-box
    .web-passenger-product-box-img {
    width: 45%;
    height: 100%;
    background: pink;
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
    line-height: 2.4375rem;
    letter-spacing: 0px;
    text-align: center;
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
/* 默认样式 */
.container {
    display: flex;
    flex-direction: column;
}

/* 横屏模式 */
@media (orientation: landscape) {
    .container {
        flex-direction: row;
    }
}

/* 竖屏模式 */
@media (orientation: portrait) {
    .container {
        flex-direction: column;
    }
}
/* ✅ 超小屏手机（iPhone SE / 5s） */
@media screen and (max-width: 376px) {
    .web {
        zoom: 0.5; /* 默认不缩放 */
    }
}
/* ✅ 常规小屏手机（iPhone 6/7/8, X, SE2/SE3） */
@media screen and (max-width: 414px) {
    body {
        font-size: 15px;
    }
}

/* ✅ 中等屏手机（iPhone 11/12/13/14, 安卓主流机型） */
@media screen and (max-width: 430px) {
}

/* ✅ 大屏手机（iPhone 14 Plus, Pro Max, 部分安卓机） */
@media screen and (max-width: 480px) {
}

/* ✅ iPad 及小平板 */
@media screen and (max-width: 820px) {
    body {
        font-size: 18px;
    }
}

/* ✅ iPad Pro 及更大屏幕 */
@media screen and (max-width: 1200px) {
    body {
        font-size: 20px;
    }
}
</style>
