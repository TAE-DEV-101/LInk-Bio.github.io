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
                        <router-link to="/cmd">
                            <div class="moving-div" :style="{
                                transform: `translate(${A.positionX}px, ${A.positionY}px)`
                            }">
                                <img src="../../public/world.png" height="67" width="67" alt="Planet B-Ball" border="0">
                            </div>
                        </router-link>
                    </td>
                    <td align="center" valign="top">
                        <router-link to="/cmd">
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
                        <router-link to="/bio">
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
