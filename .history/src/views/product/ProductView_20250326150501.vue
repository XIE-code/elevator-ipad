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
                <div class="center-box" style="margin-top: 1.25rem">
                    <!-- 动态渲染电梯产品 -->
                    <div
                        v-for="(item, index) in elist"
                        :key="index"
                        class="web-passenger-product"
                    >
                        <div class="web-passenger-product-box">
                            <div class="web-passenger-product-box-img">
                                <img :src="item.imgUrl" :alt="item.name" />
                            </div>
                            <div class="web-passenger-product-box-text">
                                <span class="text4">{{ item.name }}</span>
                                <span class="text5">
                                    {{ item.description }}
                                </span>
                                <!-- <span class="text5">地 板:PVC(大理石可选)</span> -->
                                <div
                                    class="web-passenger-product-box-text-bottom"
                                >
                                    <a :href="item.link" class="button-link"
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

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 定义电梯产品数据
const elist = ref([
    {
        imgUrl: "/images/elevator_images/image01.png",
        name: "GDMK-01|浅云",
        description:
            "吊顶: 镜面一体式, LED柔光平板照明灯设计\n娇壁: 镜面蚀刻不锈钢，发纹不锈钢\n地板: PVC",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTI=",
    },
    {
        imgUrl: "/images/elevator_images/image02.jpg",
        name: "GDMK-02|明月",
        description:
            "吊顶: 镜面一体式，LED柔光平板照明灯设计\n娇壁: 镜面蚀刻不锈钢,发纹不锈钢\n地板: PVC",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTM=",
    },
    {
        imgUrl: "/images/elevator_images/image03.png",
        name: "GDMK-03|天青",
        description:
            "吊顶: 镜面一体式，LED柔光平板照明灯设计\n娇壁: 镜面蚀刻不锈钢，发纹不锈钢\n地板: PVC",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTQ=",
    },
    {
        imgUrl: "/images/elevator_images/image04.png",
        name: "GDMK-04|缃叶",
        description:
            "吊顶: 钛金镜面不锈钢，平板透光板印图案，暗藏灯带\n娇壁: 钛金发纹不锈钢，钛金镜面蚀刻不锈钢黑钛镜面不锈钢\n地板: 大理石拼花",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTU=",
    },
    {
        imgUrl: "/images/elevator_images/image05.png",
        name: "GDMK-05|京元",
        description:
            "吊顶: 黑钛镜面不锈钢，亚克力透光板，LED灯\n娇壁: 黑钛镜面蚀刻不锈钢，黑钛发纹不锈钢\n地板: PVC(大理石可选)",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTY=",
    },
    {
        imgUrl: "/images/elevator_images/image06.png",
        name: "GDMK-06|青黛",
        description:
            "吊顶: 黑钛喷砂不锈钢，亚克力透光板，LED灯\n娇壁: 黑钛镜面不锈钢，黑钛喷砂不锈钢，岩板饰面\n地板: PVC",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTc=",
    },
    {
        imgUrl: "/images/elevator_images/image07.png",
        name: "GDMK-07|凝脂",
        description:
            "吊顶: 钢板砂纹白，黑钛装饰框，暗藏灯带，LED灯\n娇壁: 黑钛发纹不锈钢，黑钛镜面不锈钢，夹丝玻璃，米白色装饰板，暗藏灯带\n地板: 大理石拼花+不锈钢黑色装饰",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTg=",
    },
    {
        imgUrl: "/images/elevator_images/image08.png",
        name: "GDMK-08|烟墨",
        description:
            "吊顶: 镜钢，深渊镜，射灯\n娇壁: 发纹不锈钢饰条，黑钛发纹不锈钢，黑钛镜面不锈钢，大理石，工艺玻璃\n扶手: 发纹不锈钢\n地板: 大理石",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE2OTk=",
    },
    {
        imgUrl: "/images/elevator_images/image09.png",
        name: "GDMK-09|群青",
        description:
            "吊顶: 镜钢，成品线条灯，射灯\n娇壁: 贴膜饰面底板，成品线条灯，暗藏灯带,喷砂不锈钢镀水晶蓝半哑防指纹\n扶手: 镜钢\n地板: 大理石(蓝金砂)",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE1ODg=",
    },
    {
        imgUrl: "/images/elevator_images/image10.png",
        name: "GDMK-10|月白",
        description:
            "吊顶: 钢板喷砂纹白，黑钛喷砂不锈钢镂空图案，暗藏灯带，条形灯\n娇壁: 钢板喷砂纹白，黑钛喷砂不锈钢镂空图案，暗藏灯带，条形灯\n地板: 大理石",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDA=",
    },
    {
        imgUrl: "/images/elevator_images/image11.png",
        name: "GDMK-11|青骊",
        description:
            "吊顶: 钢板喷砂纹白，咖啡色装饰条，暗藏灯带，LED灯\n娇壁: 咖啡色发纹不锈钢，仿石纹膜，装饰画,覆膜钢板，暗藏灯带\n地板: 大理石拼花",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDE=",
    },
    {
        imgUrl: "/images/elevator_images/image12.png",
        name: "GDMK-12|半见",
        description:
            "吊顶: 喷砂不锈钢，镜面不锈钢，亚克力透光板，LED灯\n娇壁: 木纹贴膜，镜面不锈钢，镜面不锈钢局部喷砂\n地板: PVC(大理石可选)",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDM=",
    },
    {
        imgUrl: "/images/elevator_images/image13.png",
        name: "GDMK-13|竹月",
        description:
            "吊顶: 钢板喷砂白纹，钛金装饰框，暗藏灯带，LED灯\n娇壁: 覆膜钢板，黑钛镜面不锈钢，黑钛镜面蚀刻不锈钢\n地板: PVC(大理石可选)",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDQ=",
    },
    {
        imgUrl: "/images/elevator_images/image14.png",
        name: "GDMK-14|元青",
        description:
            "吊顶: 钢板喷砂纹白，黑钛装饰框，暗藏灯带，LED灯\n娇壁: 木纹钢板，镜面蚀刻不锈钢，暗藏灯带，灰钢喷砂\n扶手: 黑钛喷砂\n地板: 大理石",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDY=",
    },
    {
        imgUrl: "/images/elevator_images/image15.png",
        name: "GDMK-15|琉璃",
        description:
            "吊顶: 香槟金喷砂不锈钢，亚克力灯饰，LED灯\n娇壁: 香槟金发纹不锈钢，艺术玻璃，皮革雕花,暗藏灯带\n扶手: 实木+香槟金发纹不锈钢\n地板: 大理石拼花",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDc=",
    },
    {
        imgUrl: "/images/elevator_images/image16.png",
        name: "GDMK-16|朱颜",
        description:
            "吊顶: 古铜喷砂，暗藏灯带，LED灯\n娇壁: 古调镜面，岩板，暗被灯带\n地板: 大理石",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDg=",
    },
    {
        imgUrl: "/images/elevator_images/image17.png",
        name: "GDMK-17 |如黛",
        description:
            "吊顶: 喷砂不锈钢，铝型材灯带，LED灯\n娇壁: 镜面不锈钢，钢板贴膜，岩板\n地板: 人造大理石",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MDk=",
    },
    {
        imgUrl: "/images/elevator_images/image18.png",
        name: "GDMK-18伽罗",
        description:
            "吊顶: 钢板喷涂砂纹白，软膜天花，古铜色装饰框\n娇壁: 压坟板，古铜镜面不锈钢，岩板，古铜装饰条\n扶手: 压坟板+古锅装饰框\n地板: 大理石拼花+铜条",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MTA=",
    },
    {
        imgUrl: "/images/elevator_images/image19.png",
        name: "GDMK-19|缙云",
        description:
            "吊顶: 贴膜饰面，玫瑰金喷砂装饰框，暗藏灯带，射灯\n娇壁: 玫瑰金镜面不锈钢，玫瑰金镜面蚀刻不锈钢，玫瑰金喷砂不锈钢，木纹贴膜饰面，暗藏灯带\n扶手: 黑钛发纹不锈钢\n地板: 大理石",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE3MTI=",
    },
    {
        imgUrl: "/images/elevator_images/image20.png",
        name: "GDMK-20沉香",
        description:
            "吊顶: 钢板喷砂纹白，古铜镜面不锈钢，暗藏灯带，LED灯\n娇壁: 古铜发纹蚀刻不锈钢，清镜，木纹贴膜，PVC装饰框\n扶手: 古铜发纹不锈钢，暗藏灯带\n地板: 大理石+铜色",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTE1ODk=",
    },
    {
        imgUrl: "/images/elevator_images/image21.png",
        name: "GDMK-21|朱樱",
        description:
            "吊顶: 玫瑰金镜面不锈钢，亚克力透光板，LED灯\n壁: 玫瑰金发纹不锈钢，玫瑰金镜面蚀刻不锈钢\n地板: PVC(大理石可选)",
        link: "http://my.3vfang.com/p/share/content.php?m=a3I4MDM5LWl0ZW09NTIwNTc=",
    },
]);
const gotoVilla = () => {
    router.push("/product/Villa");
};

const gotPassenger = () => {
    router.push("/");
};
</script>

<style scoped>
/* 基础样式 */
body,
html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/* 动态调整 html 的 font-size */
html {
    font-size: calc(0.625rem + 0.5vw); /* 动态调整字体大小 */
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
    position: relative;
    width: 99vw;
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
    background-image: url("../../../public/images/logo.png");
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
    flex-direction: row;
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
    align-items: center; /* 垂直居中子元素 */
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
    gap: 30px;
}
.web .web-center .web-text .web-passenger .web-passenger-image {
    height: 173px;
    width: 250px;
    background-image: url("../../../public/images/image-elevator.png");
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
    height: auto;
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
    box-sizing: border-box;
}
.web
    .web-center
    .web-text
    .web-passenger-product
    .web-passenger-product-box
    .web-passenger-product-box-img {
    width: 9.375rem;
    height: 15.625rem;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 10px;
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
}
.button-link {
    display: inline-block;
    width: 100%;
    margin-bottom: 0.625rem;
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

    display: block; /* 让每个 span 变成独立块，自动换行 */
    white-space: pre-line; /* 兼容换行符 (\n) */
    word-wrap: break-word; /* 处理长单词换行 */
    line-height: 1.5; /* 调整行距 */
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

@media screen and (max-width: 480px) {
    .web {
        transform: scale(0.55);
        transform-origin: top left;
    }
}

@media screen and (max-width: 431px) {
    .web {
        transform: scale(0.5);
        transform-origin: top left;
    }
}

@media screen and (max-width: 376px) {
    .web {
        transform: scale(0.45);
        transform-origin: top left;
    }
}
@media screen and (min-width: 1000px) {
    .web {
        transform: scale(1.25);
        transform-origin: top left;
    }
}
</style>
