<template>
    <div class="main_home">
        <table width="500" border="0" class="table-layout">
            <tbody>
                <tr>
                    <td colspan="5" align="right" valign="top"></td>
                </tr>
                <tr>
                    <td colspan="2" align="right" valign="middle">
                        <div class="image-placeholder" style="background-color: #ff5722; height: 56px; width: 131px;">
                            Press Box Shuttle</div>
                    </td>
                    <td align="center" valign="middle">
                        <router-link to="/v">
                            <div class="moving-div" :style="{
                                transform: `translate(${positionX}px, ${positionY}px)`
                            }">
                                <img src="../../public/world.png" height="67" width="67" alt="Planet B-Ball" border="0">
                            </div>

                        </router-link>
                    </td>
                    <td align="center" valign="top">
                        <router-link to="/v">
                            <img src="../../public/mars.png" height="60" width="60" alt="Planet B-Ball" border="0">
                        </router-link>
                    </td>
                    <td align="center" valign="bottom">
                        <div class="image-placeholder" style="background-color: #ffc107; height: 77px; width: 95px;">
                            Lunar Tunes</div>
                    </td>
                </tr>
                <tr>
                    <td align="middle" valign="top">
                        <div class="image-placeholder" style="background-color: #9c27b0; height: 52px; width: 63px;">The
                            Lineup</div>
                    </td>
                    <td colspan="3" rowspan="2" align="right" valign="middle">
                        <!-- <div class="image-placeholder" style="background-color: #2196f3; height: 165px; width: 272px;">
                            Space Jam Logo</div> -->
                        <img src="../../public/logo.gif" height="165" width="272" alt="Space Jam" border="0">

                    </td>
                    <td align="right" valign="bottom">
                        <div class="image-placeholder" style="background-color: #e91e63; height: 52px; width: 58px;">
                            Jump Station</div>
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="bottom">
                        <div class="image-placeholder" style="background-color: #009688; height: 57px; width: 49px;">
                            Junior Jam</div>
                    </td>
                    <td rowspan="2" align="center" valign="top">
                        <div class="image-placeholder" style="background-color: #673ab7; height: 72px; width: 94px;">
                            Warner Studio Store</div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align="center" valign="top">
                        <div class="image-placeholder" style="background-color: #4caf50; height: 83px; width: 83px;">
                            Stellar Souvenirs</div>
                    </td>
                    <td align="center" valign="bottom">
                        <!-- <div class="image-placeholder" style="background-color: #ff9800; height: 67px; width: 104px;">
                            Site Map</div> -->
                        <router-link to="/v">
                            <div class="moving-div" :style="{
                                transform: `translate(${positionX}px, ${positionY}px)`
                            }">
                               <img src="../../public/Jupiter.png" height="100" width="100" alt="Planet B-Ball" border="0">
                            </div>
                            
                        </router-link>
                    </td>
                    <td align="center" valign="middle">
                        <div class="image-placeholder" style="background-color: #607d8b; height: 63px; width: 67px;">
                            Behind the Jam</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            positionX: 0,
            positionY: 0,
            radius: 10,
            angle: 0,
            speed: 0.005,
        };
    },
    methods: {
        moveInCircle() {
            this.positionX = Math.cos(this.angle) * this.radius;
            this.positionY = Math.sin(this.angle) * this.radius;

            this.angle += this.speed;
            requestAnimationFrame(this.moveInCircle);
        }

    },
    mounted() {
        this.moveInCircle();
    },
};
</script>

<style scoped>
.moving-div {
    position: relative;
    transition: transform 0.1s linear;
}

body {
    margin: 0;
    overflow: hidden;
    /* ป้องกัน scrollbar */
}


.main_home {
    display: flex;
    justify-content: center;
    margin-top: 100px;
}

.table-layout {
    width: 100%;
    border-collapse: collapse;
}

.image-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid #ddd;
}

td {
    padding: 10px;
}
</style>






















<template>
    <div class="main_home" id="bg1">
        <table width="500" border="0" class="table-layout">
            <tbody>
                <tr>
                    <td colspan="5" align="right" valign="top"></td>
                </tr>
                <tr>
                    <td colspan="2" align="right" valign="middle">
                        <div class="image-placeholder" style="background-color: #ff5722; height: 56px; width: 131px;">
                            Press Box Shuttle</div>
                    </td>
                    <td align="center" valign="middle">
                        <router-link to="/v">
                            <div class="moving-div" :style="{
                                transform: `translate(${A.positionX}px, ${A.positionY}px)`
                            }">
                                <img src="../../public/world.png" height="67" width="67" alt="Planet B-Ball" border="0">
                            </div>
                        </router-link>
                    </td>
                    <td align="center" valign="top">
                        <router-link to="/v">
                            <img src="../../public/mars.png" height="60" width="60" alt="Planet B-Ball" border="0">
                        </router-link>
                    </td>
                    <td align="center" valign="bottom">
                        <div class="image-placeholder" style="background-color: #ffc107; height: 77px; width: 95px;">
                            Lunar Tunes</div>
                    </td>
                </tr>
                <tr>
                    <td align="middle" valign="top">
                        <div class="image-placeholder" style="background-color: #9c27b0; height: 52px; width: 63px;">The
                            Lineup</div>
                    </td>
                    <td colspan="3" rowspan="2" align="right" valign="middle">
                        <!-- <div class="image-placeholder" style="background-color: #2196f3; height: 165px; width: 272px;">
                            Space Jam Logo</div> -->
                        <img src="../../public/logo.gif" height="165" width="272" alt="Space Jam" border="0">

                    </td>
                    <td align="right" valign="bottom">
                        <div class="image-placeholder" style="background-color: #e91e63; height: 52px; width: 58px;">
                            Jump Station</div>
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="bottom">
                        <div class="image-placeholder" style="background-color: #009688; height: 57px; width: 49px;">
                            Junior Jam</div>
                    </td>
                    <td rowspan="2" align="center" valign="top">
                        <div class="image-placeholder" style="background-color: #673ab7; height: 72px; width: 94px;">
                            Warner Studio Store</div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align="center" valign="top">
                        <div class="image-placeholder" style="background-color: #4caf50; height: 83px; width: 83px;">
                            Stellar Souvenirs</div>
                    </td>
                    <td align="center" valign="bottom">
                        <!-- <div class="image-placeholder" style="background-color: #ff9800; height: 67px; width: 104px;">
                            Site Map</div> -->
                        <router-link to="/v">
                            <div class="moving-div" :style="{
                                transform: `translate(${B.positionX}px, ${B.positionY}px)`
                            }">
                                <img src="../../public/Jupiter.png" height="100" width="100" alt="Planet B-Ball"
                                    border="0">
                            </div>

                        </router-link>
                    </td>
                    <td align="center" valign="middle">
                        <div class="image-placeholder" style="background-color: #607d8b; height: 63px; width: 67px;">
                            Behind the Jam</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // Object A for div 1
            A: {
                positionX: 0,
                positionY: 0,
                angle: 0,
                radius: 10,
                speed: 0.005,
            },
            // Object B for div 2
            B: {
                positionX: 0,
                positionY: 0,
                angle: 0,
                radius: 15,
                speed: 0.01,
            },
        };
    },
    methods: {
        moveDivA() {
            this.A.positionX = Math.cos(this.A.angle) * this.A.radius;
            this.A.positionY = Math.sin(this.A.angle) * this.A.radius;
            this.A.angle += this.A.speed;
            requestAnimationFrame(this.moveDivA);
        },
        moveDivB() {
            this.B.positionX = Math.cos(this.B.angle) * this.B.radius;
            this.B.positionY = Math.sin(this.B.angle) * this.B.radius;
            this.B.angle += this.B.speed;
            requestAnimationFrame(this.moveDivB);
        },

    },
    mounted() {
        this.moveDivA(); // Start movement for div A
        this.moveDivB(); // Start movement for div B
    },
};
</script>

<style scoped>
.moving-div {
    position: relative;
    transition: transform 0.1s linear;
}

#bg1 {
    margin: 0;
    display: flex;
    overflow: hidden;
    place-items: center;
    /* min-width: 320px; */
    min-height: 100vh;
    overflow: hidden;
    background-image: url('../../public/bg_stars.gif');
}

.main_home {
    display: flex;
    justify-content: center;
    margin-top: 100px;
}

.table-layout {
    width: 30%;
    border-collapse: collapse;
}

.image-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid #ddd;
}

td {
    padding: 10px;
}
</style>

















<!-- BIOBIO -->





<template>
    <div class="fullscreen  ">
        <div class="container">
            <div class="widget_bottom mt-5">
                <div class="img_story ">
                    <img :src="profileImage" :alt="profileName">
                </div>
                <div class="row">
                    <h1 class="name">
                        {{ profileName }}<ssvv class="mb-1"></ssvv>
                    </h1>

                </div>
                <div class="row">
                    <h2 class="caption">{{ profileCaption }}</h2>
                </div>
                <div class="row">
                    <ul class="social">
                        <li v-for="(social, index) in socialLinks" :key="index">
                            <router-link :to="social.url">
                                <a :title="social.name">
                                    <i :class="social.icon"></i>
                                </a>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <div class="bioLink" v-for="(link, index) in bioLinks" :key="index">
                        <router-link :to="link.url">
                            <!-- <div class="bioLink-item">
                  <a :href="link.url" target="_blank" :title="link.name">
                    <span class="bioLink-text">{{ link.name }}</span>
                  </a>
                </div> -->
                            <btn_macosx class="mt-3" :label="link.name" />
                        </router-link>
                    </div>
                </div>






                <!-- Footer Logo -->
                <div class="logo-footer">

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";


// Profile Information
const profileName = ref("TAE");
const profileCaption = ref("link kkk");
const profileImage = ref("https://yt3.googleusercontent.com/ytc/AIdro_k4UwqHC-YBkLnmrrQLq5B6L-B3D_aCJ-6zhadHieFF9Ll0=s160-c-k-c0x00ffffff-no-rj");

// Social Links
const socialLinks = ref([
    { name: "Facebook", url: "https://www.facebook.com/riyyanseo/", icon: "fab fa-facebook" },
    { name: "Twitter", url: "https://twitter.com/rian_seo", icon: "fab fa-twitter" },
    { name: "Instagram", url: "https://www.instagram.com/rian_seo/", icon: "fab fa-instagram" },
    { name: "YouTube", url: "https://www.youtube.com/c/rianseo?sub_confirmation=1", icon: "fab fa-youtube" },
    { name: "TikTok", url: "https://tiktok.com/rian_seo", icon: "fab fa-tiktok" },
    { name: "GitHub", url: "https://github.com/rianseo", icon: "fab fa-github" },
]);

// Bio Links
const bioLinks = ref([
    { name: "Website Official", url: "/" },
    { name: "My Blog", url: "https://rianseo.com" },
    { name: "My Product", url: "https://produk.temabanua.com" },
    { name: "WhatsApp Shop", url: "https://www.whatsapp.com/catalog/6285886624531" },
    { name: "Facebook Shop", url: "https://www.facebook.com/produkbanua99/shop/" },
    { name: "Market Shop", url: "https://rian-seo.gumroad.com/" },
    { name: "Tokopedia", url: "https://tokopedia.link/rianseo" },
    { name: "Google Bisnis", url: "https://g.page/r/CQQgS7lD6Wu_EAg/review" },
]);
</script>

<style scoped>
.fullscreen {
    display: flex;
    background-color: #ededed;
    min-height: 100vh;
    color: #cccccc;
    font-family: monospace;
}

.container {
    display: flex;
    justify-content: center;
}

a {
    text-decoration: none;
    color: #cccccc;
}

.widget_bottom {
    width: 640px;
    text-align: center;
    padding-bottom: 50px;
}

.img_story {
    padding: 4px;
    background: hsl(174deg 96% 23%);
    width: 94px;
    height: 94px;
    border-radius: 50%;
    margin: 0 auto;
}

.img_story img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid #131212;
}

.name {
    font-size: 24px;
    font-weight: 700;
    margin: 16px 0 0;
}

.caption {
    font-size: 16px;
    font-weight: 400;
    margin-top: 12px;
}

.social {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    flex-wrap: wrap;
    margin: 16px 0;
}

.social li {
    margin: 0 12px 12px;
}

.social a {
    color: white;
    font-size: 30px;
    text-decoration: none;
}

.bioLink-item {
    background: #212121;
    padding: 10px;
    border-radius: 8px;
    margin: 10px 0;
    text-align: center;
    transition: 0.2s;
}

.bioLink-item:hover {
    background: #333;
}

.logo-footer {
    opacity: 0.5;
    text-align: center;
    margin-top: 20px;
}
</style>











<!-- nabbar mac -->


<template>
    <nav id="navmac">
        <input type="checkbox" id="responsive-navmac" />
        <label></label>
        <ul>
            <li><a href="#">Home</a></li>
            <li>
                <a href="#" class="dropdown-arrow">Products</a>
                <ul class="sub-menus">
                    <li><a href="#">Products 1</a></li>
                    <li><a href="#">Products 2</a></li>
                    <li><a href="#">Products 3</a></li>
                    <li><a href="#">Products 4</a></li>
                </ul>
            </li>
            <li><a href="#">About</a></li>
            <li>
                <a href="#" class="dropdown-arrow">Services</a>
                <ul class="sub-menus">
                    <li><a href="#">Services 1</a></li>
                    <li><a href="#">Services 2</a></li>
                    <li><a href="#">Services 3</a></li>
                </ul>
            </li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </nav>
</template>

<script setup>
    import { ref } from "vue";  
    const isMenuOpen = ref(false);
    
  </script>

<style scoped>
#navmac {
    background: #0099cc;
    background: linear-gradient(to bottom, #f4f9f5, #a0a8aa);
    height: 24px;
    border: 1px solid #242827;
}

#navmac ul,
#navmac li {
    margin: 0 auto;
    padding: 0;
    list-style: none;
}

#navmac ul {
    width: 100%;
    text-align: left;
}

#navmac li {
    display: inline-block;
    position: relative;
}

#navmac a {
    display: block;
    line-height: 22px;
    padding: 0 14px;
    text-decoration: none;
    color: #000000;
    font-size: 16px;
}

#navmac a.dropdown-arrow:after {
    content: "\002B";
    margin-left: 5px;
}

#navmac li a:hover {
    color: #0099cc;
    background: #f2f2f2;
}

#navmac input {
    display: none;
    margin: 0;
    padding: 0;
    height: 24px;
    width: 100%;
    opacity: 0;
    cursor: pointer;
}

#navmac label {
    display: none;
    line-height: 22px;
    text-align: center;
    position: absolute;
    left: 35px;
}

#navmac label:before {
    font-size: 1.6em;
    color: #000000;
    content: "\2261";
    margin-left: 20px;
}

#navmac ul.sub-menus {
    height: auto;
    overflow: hidden;
    width: 170px;
    background: #6c6c6c;
    position: absolute;
    z-index: 99;
    display: none;
}

#navmac ul.sub-menus li {
    display: block;
    text-align: left;
    width: 100%;
}

#navmac ul.sub-menus a {
    color: #ffffff;
    font-size: 14px;
}

#navmac li:hover ul.sub-menus {
    display: block;
}

#navmac ul.sub-menus a:hover {
    background: #f2f2f2;
    color: #444444;
}

@media screen and (max-width: 800px) {
    #navmac {
        position: relative;
    }

    #navmac ul {
        background: #6c6c6c;
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
        z-index: 3;
        height: auto;
        display: none;
        text-align: left;
    }

    #navmac ul.sub-menus {
        width: 100%;
        position: static;
    }

    #navmac ul.sub-menus a {
        padding-left: 30px;
    }

    #navmac li {
        display: block;
        float: none;
        width: auto;
    }

    #navmac input,
    #navmac label {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
    }

    #navmac input {
        z-index: 4;
    }

    #navmac input:checked+label {
        color: #000000;
    }

    #navmac input:checked+label:before {
        content: "\00d7";
    }

    #navmac input:checked~ul {
        display: block;
    }
}
</style>
