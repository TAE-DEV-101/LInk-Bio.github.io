<template>
    <nav id="navmac">
        <input type="checkbox" id="responsive-navmac" />
        <label for="responsive-navmac"></label>
        <div class="container-fluid">
            <div class="row">
                <!-- <div class="col-1">
                    <logo></logo>
                </div> -->

                <div class="col-6 px-1">
                    <div class="nav-items">
                        <div class="nav-item">
                            <!-- <logo /> -->
                            <img class="nav-img mb-1" src="../../public/world.png" >
                            <!-- <svg height="26px" viewBox="-81.92 -81.92 1187.84 1187.84" class="icon"
                                version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(45)">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                    stroke="#CCCCCC" stroke-width="2.048"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M249.5 700.6c14.5 135.5 132.6 241.1 276 241.1s261.5-105.6 276-241.1h-552z"
                                        fill="#bef9c5"></path>
                                    <path
                                        d="M512 957.3c-79.6 0-154.5-28.7-210.8-80.8-56.5-52.2-87.6-121.7-87.6-195.7 0-59.7 20.2-116.5 58.4-164.3 36.2-45.3 85.4-78.8 142.6-97.1V206.1h-46.1c-11.2 0-20.4-9.1-20.4-20.4v-17.1c0-11.2 9.1-20.4 20.4-20.4h287.2c11.2 0 20.4 9.1 20.4 20.4v17.1c0 11.2-9.1 20.4-20.4 20.4h-46.1v213.4c57.1 18.3 106.3 51.8 142.6 97.1 38.2 47.8 58.4 104.6 58.4 164.3 0 74-31.1 143.5-87.6 195.7-56.5 52-131.4 80.7-211 80.7zM368.4 163.2c-3 0-5.4 2.4-5.4 5.4v17.1c0 3 2.4 5.4 5.4 5.4h61.1v239.5l-5.3 1.6c-56.5 17-105.1 49.4-140.5 93.7-36 45.1-55.1 98.7-55.1 154.9 0 69.7 29.4 135.3 82.8 184.7C365 915 436.2 942.3 512 942.3s147.1-27.3 200.6-76.8c53.4-49.4 82.8-115 82.8-184.7 0-56.2-19-109.8-55.1-154.9-35.4-44.4-84-76.8-140.5-93.7l-5.3-1.6V191.1h61.1c3 0 5.4-2.4 5.4-5.4v-17.1c0-3-2.4-5.4-5.4-5.4H368.4z"
                                        fill="#000000"></path>
                                    <path
                                        d="M220.7 676.8h581.9v8H220.7zM413 190.8h39.6v8H413zM495.5 190.8h106.1v8H495.5z"
                                        fill="#000000"></path>
                                    <path
                                        d="M452.7 645.7c-14 0-25.4-11.4-25.4-25.4s11.4-25.4 25.4-25.4 25.4 11.4 25.4 25.4-11.4 25.4-25.4 25.4z m0-42.9c-9.6 0-17.4 7.8-17.4 17.4s7.8 17.4 17.4 17.4 17.4-7.8 17.4-17.4-7.8-17.4-17.4-17.4zM571.6 556.8c-27.6 0-50.1-22.5-50.1-50.1s22.5-50.1 50.1-50.1 50.1 22.5 50.1 50.1-22.5 50.1-50.1 50.1z m0-92.2c-23.2 0-42.1 18.9-42.1 42.1s18.9 42.1 42.1 42.1 42.1-18.9 42.1-42.1-18.9-42.1-42.1-42.1zM491.2 316.7c-17 0-30.8-13.8-30.8-30.8s13.8-30.8 30.8-30.8 30.8 13.8 30.8 30.8-13.8 30.8-30.8 30.8z m0-53.6c-12.6 0-22.8 10.2-22.8 22.8s10.2 22.8 22.8 22.8c12.6 0 22.8-10.2 22.8-22.8s-10.2-22.8-22.8-22.8zM543.2 113.1c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z m0-35.4c-7.5 0-13.7 6.1-13.7 13.7s6.1 13.7 13.7 13.7 13.7-6.1 13.7-13.7-6.1-13.7-13.7-13.7z"
                                        fill="#698fe8"></path>
                                </g>
                            </svg> -->
                        </div>
                        <div class="nav-item">
                            <router-link to="/">Home</router-link>
                        </div>
                        <div class="nav-item dropdown" hidden>
                            <a href="#" class="nav-link dropdown-toggle" id="productsDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                            <ul class="dropdown-menu" aria-labelledby="productsDropdown">
                                <li><a class="dropdown-item" href="#">Products 1</a></li>
                                <li><a class="dropdown-item" href="#">Products 2</a></li>
                                <li><a class="dropdown-item" href="#">Products 3</a></li>
                                <li><a class="dropdown-item" href="#">Products 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="d-flex justify-content-end">
                        [ ] { } &nbsp;
                        <bat class="mt-1"></bat>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import bat from "../components/svg/battery.vue";
import logo from "../components/svg/banana.vue";
import { ref } from "vue";
const isMenuOpen = ref(false);
</script>

<style scoped>
#navmac {
    background: #0099cc;
    background: linear-gradient(to bottom, #f4f9f5, #a0a8aa);
    height: 24px;
    border: 1px solid #2428278a;
}

.nav-items,
.nav-item {
    margin: 0 auto;
    padding: 0;
}

.nav-items {
    width: 100%;
    text-align: left;
}

.nav-item {
    display: inline-block;
    position: relative;
}

.nav-item a {
    display: block;
    line-height: 22px;
    padding: 0 6px;
    text-decoration: none;
    color: #000000;
    font-size: 16px;
}

.nav-item a.dropdown-arrow:after {
    content: "\002B";
    margin-left: 5px;
}

.nav-item a:hover {
    /* color: #0099cc; */
    text-shadow: 1px 3px 6px rgba(95, 95, 95, 0.53);
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

.nav-img {
    height: 16px;
    width: auto;
    /* align-items: center !important; */
    top: 0%;
}
</style>
