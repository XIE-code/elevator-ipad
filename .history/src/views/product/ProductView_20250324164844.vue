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
                                style="
                                    border: 0.1875rem solid
                                        rgba(0, 43, 125, 0.85);
                                "
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
                                    >吊顶:&nbsp;镜面一体式,LED柔光平板照明灯设计<br />
                                    娇壁:&nbsp;镜面蚀刻不锈钢，发纹不锈钢</span
                                ><br />
                                <span class="text5">地 板:&nbsp;PVC</span>
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
                                    >吊 顶:镜面一体式，LED柔光平板照明灯设计<br />
                                    娇壁:镜面蚀刻/发纹不锈钢</span
                                ><br />
                                <span class="text5">地 板:大理石</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTM="
                                        class="button-link"
                                        ><span>720°展示</span></a
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
                                <span class="text4">GDMK-03|天青</span><br />
                                <span class="text5"
                                    >吊 顶:镜面一体式，LED柔光平板照明灯设计<br />
                                    娇壁：镜面蚀刻不锈钢，发纹不锈钢</span
                                ><br />
                                <span class="text5">地 板:大理石</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <!-- <button
                                    style="
                                        width: 8.5625rem;
                                        height: 2.5rem;
                                        border-radius: 3.125rem;

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
                                <span class="text4">GDMK-04|缃叶</span><br />
                                <span class="text5"
                                    >吊
                                    顶:钛金镜面不锈钢，平板透光板印图案，暗藏灯带<br />
                                    娇壁:钛金发纹不锈钢，钛金镜面蚀刻不锈钢黑钛镜面不锈钢</span
                                ><br />
                                <span class="text5">地 板:PVC</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTU="
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
                                <span class="text4">GDMK-05|京元</span><br />
                                <span class="text5"
                                    >吊 顶:黑钛镜面不锈钢，亚克力透光板，LED灯
                                    娇壁:黑钛镜面蚀刻不锈钢，黑钛发纹不锈钢</span
                                ><br />
                                <span class="text5">地 板:PVC(大理石可选)</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTY="
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
                                <span class="text4">GDMK-06|青黛</span><br />
                                <span class="text5"
                                    >吊
                                    顶:黑钛镜面不锈钢，亚克力透光板，LED灯<br />
                                    娇壁：黑钛镜面蚀刻不锈钢，黑钛发纹不锈钢</span
                                ><br />
                                <span class="text5">地 板:PVC(大理石可选)</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTc="
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
                                <span class="text4">GDMK-07|凝脂</span><br />
                                <span class="text5"
                                    >吊
                                    顶:黑钛喷砂不锈钢，亚克力透光板，LED灯<br />
                                    娇壁:黑钛镜面不锈钢，黑钛喷砂不锈钢，岩板饰面</span
                                ><br />
                                <span class="text5">地 板:PVC</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTg="
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
                                <span class="text4">GDMK-08|烟墨</span><br />
                                <span class="text5"
                                    >吊 顶:镜钢，深渊镜，射灯
                                    娇壁:发纹不锈钢饰条，黑钛发纹不锈钢，黑钛镜面不锈钢，大理石，工艺玻璃<br />
                                    扶 手:发纹不锈钢 </span
                                ><br />
                                <span class="text5">地 板:大理石</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTg="
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
                                <span class="text4">GDMK-09|群青</span><br />
                                <span class="text5"
                                    >吊 顶:镜钢，成品线条灯，射灯
                                    娇壁:贴膜饰面底板，成品线条灯，暗藏灯带喷砂不锈钢镀水晶蓝半哑防指纹
                                    <br />
                                    扶 手: 镜钢 </span
                                ><br />
                                <span class="text5">地 板:大理石(蓝金砂)</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE1ODg="
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
                                <span class="text4">GDMK-10|月白</span><br />
                                <span class="text5"
                                    >吊
                                    顶:钢板喷砂纹白，黑钛喷砂不锈钢镂空图案，暗藏灯带，条形灯<br />
                                    娇壁:钢板喷砂纹白，黑钛喷砂不锈钢镂空图案，暗藏灯带，条形灯 </span
                                ><br />
                                <span class="text5">地 板:大理石</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDA="
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
                                <span class="text4">GDMK-11|青骊</span><br />
                                <span class="text5"
                                    >吊
                                    顶:钢板喷砂纹白，咖啡色装饰条，暗藏灯带，LED灯
                                    娇壁:咖啡色发纹不锈钢，仿石纹膜，装饰画覆膜钢板，暗藏灯带</span
                                ><br />
                                <span class="text5">地 板:大理石拼花</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDE="
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
                                <span class="text4">GDMK-12|半见</span><br />
                                <span class="text5"
                                    >吊
                                    顶:喷砂不锈钢，镜面不锈钢，亚克力透光板，LED灯<br />
                                    娇壁:木纹贴膜，镜面不锈钢，镜面不锈钢局部喷砂</span
                                ><br />
                                <span class="text5">地 板:PVC(大理石可选)</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDM="
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
                                <span class="text4">GDMK-13|竹月</span><br />
                                <span class="text5"
                                    >吊
                                    顶:钢板喷砂白纹，钛金装饰框，暗藏灯带，LED灯<br />
                                    娇壁:覆膜钢板，黑钛镜面不锈钢，黑钛镜面蚀刻不锈钢</span
                                ><br />
                                <span class="text5">地 板:PVC(大理石可选)</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDQ="
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
                                <span class="text4">GDMK-14|元青</span><br />
                                <span class="text5"
                                    >吊
                                    顶:钢板喷砂纹白，黑钛装饰框，暗藏灯带，LED灯<br />
                                    娇壁:木纹钢板，镜面蚀刻不锈钢，暗藏灯带，灰钢喷砂<br />
                                    扶手：黑钛喷砂</span
                                ><br />
                                <span class="text5">地 板:大理石</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDY="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯15 -->
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
                                <span class="text4">GDMK-15|琉璃</span><br />
                                <span class="text5"
                                    >吊
                                    顶:香槟金喷砂不锈钢，亚克力灯饰，LED灯<br />
                                    娇壁:香槟金发纹不锈钢，艺术玻璃，皮革雕花暗藏灯带<br />
                                    扶 手: 实木+香槟金发纹不锈钢</span
                                ><br />
                                <span class="text5">地 板:大理石拼花</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDc="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯16 -->
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
                                <span class="text4">GDMK-16|朱颜</span><br />
                                <span class="text5"
                                    >吊 顶:古铜喷砂，暗藏灯带，LED灯<br />
                                    娇壁:古调镜面，岩板，暗被灯带 </span
                                ><br />
                                <span class="text5">地 板:大理石</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDg="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯17 -->
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
                                <span class="text4">GDMK-17 |如黛 /span><br />
                                <span class="text5"
                                    >吊 顶:喷砂不锈钢，铝型材灯带，LED灯<br />
                                    娇壁:镜面不锈钢，钢板贴膜，岩板 </span
                                ><br />
                                <span class="text5">地 板:人造大理石</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDk="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯18 -->
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
                                <span class="text4">GDMK-16|朱颜</span><br />
                                <span class="text5"
                                    >吊 顶:古铜喷砂，暗藏灯带，LED灯<br />
                                    娇壁:古调镜面，岩板，暗被灯带 </span
                                ><br />
                                <span class="text5">地 板:大理石</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDg="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯19 -->
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
                                <span class="text4">GDMK-16|朱颜</span><br />
                                <span class="text5"
                                    >吊 顶:古铜喷砂，暗藏灯带，LED灯<br />
                                    娇壁:古调镜面，岩板，暗被灯带 </span
                                ><br />
                                <span class="text5">地 板:大理石</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDg="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯20 -->
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
                                <span class="text4">GDMK-16|朱颜</span><br />
                                <span class="text5"
                                    >吊 顶:古铜喷砂，暗藏灯带，LED灯<br />
                                    娇壁:古调镜面，岩板，暗被灯带 </span
                                ><br />
                                <span class="text5">地 板:大理石</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDg="
                                        class="button-link"
                                        >720°展示</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 电梯21 -->
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
                                <span class="text4">GDMK-16|朱颜</span><br />
                                <span class="text5"
                                    >吊 顶:古铜喷砂，暗藏灯带，LED灯<br />
                                    娇壁:古调镜面，岩板，暗被灯带 </span
                                ><br />
                                <span class="text5">地 板:大理石</span>
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a
                                        href="http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDg="
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
    font-size: clamp(10px, 2vw, 16px); /* 📌 根据屏幕宽度自适应字体大小 */
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
    min-width: 46.875rem;
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
    width: 35.2896px;
    height: 40px;
    left: 13px;
    right: 31.7104px;
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
    /* 椭圆 2 */
    margin-left: 5px;
    width: 35.2896px;
    height: 40px;
    left: 13px;
    right: 31.7104px;
    top: 17px;
    bottom: -17px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.18);
    background: rgb(255, 255, 255);
    border-radius: 50%; /* 设置圆形 */
    text-align: center;
    background-image: url(@/assets/images/left.png);
    background-size: cover;
    background-repeat: no-repeat;
}

.web .web-text {
    width: 500px;
    height: 1200px;
    margin-left: 2.5rem;
}
.web .web-text .center-title {
    width: 200px;
    height: 100px;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    color: rgba(0, 43, 125, 0.76);
    font-family: 思源黑体;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.1875rem;
    letter-spacing: -0.1875rem;
    text-align: left;
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
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-around; /* 两个盒子分布在两端 */
}
.web .web-center .web-left .navigation {
    width: 155px;
    height: 85px;
    border-radius: 0px 50px 50px 0px;
    background: white;
    font-size: 20px;
    transition: background-color 0.3s; /* 添加背景颜色过渡效果 */
    cursor: pointer;
}

.web .web-center .web-left .navigation:nth-child(1) {
    background: rgb(170, 215, 239);
}

.web .web-center .web-text .web-passenger {
    width: 540px;
    height: 200px;
    display: flex;
    flex-direction: row;
}
.web .web-text .center-box {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
}
.web .web-center .web-text .web-passenger .web-passenger-image {
    height: 173px;
    width: 250px;
    padding: 10px;
    background-image: url(@/assets/images/image1.png);
    background-size: cover;
    background-repeat: no-repeat;
}
.web .web-center .web-text .web-passenger .web-passenger-text {
    height: 173px;
    width: 290px;
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
    height: 1.25rem;
}

.web .web-center .web-text .web-passenger-product {
    width: 100%;
    height: 305px;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 水平居中子元素 */
    align-items: center; /* 垂直居中子元素（可选） */
    box-sizing: border-box;
    border: 0.0625rem solid rgba(0, 0, 0, 0.24);
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
    width: 40%;
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
    .web-passenger-product-box-img
    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.web
    .web-center
    .web-text
    .web-passenger-product
    .web-passenger-product-box
    .web-passenger-product-box-text {
    width: 60%;
    height: 100%;
    background: pink;
    margin: auto;
    color: rgb(0, 80, 165);
    font-family: 思源黑体;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.1875rem;
    letter-spacing: 0rem;
    text-align: left;
    flex: 1; /* 文字部分占满剩余空间 */
}

.web
    .web-center
    .web-text
    .web-passenger-product
    .web-passenger-product-box
    .web-passenger-product-box-text
    .web-passenger-product-box-text-bottom {
    margin-top: bottom;
    background: pink;
}
.button-link {
    display: inline-block;
    width: 100%;
    max-width: 9.375rem;
    height: 2.5rem;
    color: white;
    text-decoration: none;
    border-radius: 3.125rem;
    background: rgb(170, 215, 239);
    border: none;
    cursor: pointer;
    color: rgb(0, 0, 0);
    font-family: 思源黑体;
    font-size: 16px;
    font-weight: 400;
    line-height: 39px;
    letter-spacing: 0rem;
    text-align: center;
}
/* 字体 */
.chinese {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 1.625rem;
    font-weight: 700;
    line-height: 2.375rem;
    letter-spacing: -0.1875rem;
    text-align: left;
}
.english {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0rem;
    text-align: left;
}
.text3 {
    color: rgba(117, 171, 227, 0.87);
    font-family: 思源黑体;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.625rem;
    letter-spacing: 0rem;
    text-align: left;
}
.text4 {
    color: rgb(0, 43, 125);
    font-family: 思源黑体;
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 2.5625rem;
    letter-spacing: 0rem;
    text-align: left;
}
.text5 {
    color: rgb(0, 80, 165);
    font-family: 思源黑体;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 2.1875rem;
    letter-spacing: 0rem;
    text-align: left;
}
.text6 {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.8125rem;
    letter-spacing: 0rem;
    text-align: left;
}
.text7 {
    color: rgba(0, 43, 125, 0.85);
    font-family: 思源黑体;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.0625rem;
    letter-spacing: 0rem;
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
@media screen and (max-width: 23.5rem) {
    .web {
        zoom: 0.5; /* 默认不缩放 */
    }
}
/* ✅ 常规小屏手机（iPhone 6/7/8, X, SE2/SE3） */
@media screen and (max-width: 25.875rem) {
    body {
        font-size: 0.9375rem;
    }
}

/* ✅ 中等屏手机（iPhone 11/12/13/14, 安卓主流机型） */
@media screen and (max-width: 26.875rem) {
}

/* ✅ 大屏手机（iPhone 14 Plus, Pro Max, 部分安卓机） */
@media screen and (max-width: 30rem) {
}

/* ✅ iPad 及小平板 */
@media screen and (max-width: 51.25rem) {
    body {
        font-size: 1.125rem;
    }
}

/* ✅ iPad Pro 及更大屏幕 */
@media screen and (max-width: 75rem) {
    body {
        font-size: 1.25rem;
    }
}
</style>
