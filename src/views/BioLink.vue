<template>
  <div class="fullscreen_white">
    <div class="container">
      <div class="widget_bottom mt-5">
        <!-- IMG -->
        <div class="img_story mx-auto">
          <img :src="profileImage" :alt="profileName">
        </div>
        <!-- NAME -->
        <div class="row">
          <div class="col-12">
            <h1 class="name">
              {{ profileName }}<ssvv class="mb-3"></ssvv>
            </h1>
          </div>
        </div>
        <!-- Caption -->
        <div class="row">
          <div class="col-12">
            <h2 class="caption">{{ profileCaption }}</h2>
          </div>
        </div>
        <!-- bioLinks -->
        <div class="row">
          <div class="col-12 px-3">
            <div class="bioLink" v-for="(link, index) in bioLinks" :key="index">
              <router-link :to="link.url">
                <btn_macosx class="mt-3" :label="link.name" />
              </router-link>
            </div>
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
const profileName = ref("TAE ");
const profileCaption = ref("this is the space for my various links.");
const profileImage = ref("https://yt3.googleusercontent.com/ytc/AIdro_k4UwqHC-YBkLnmrrQLq5B6L-B3D_aCJ-6zhadHieFF9Ll0=s160-c-k-c0x00ffffff-no-rj");


// Bio Links
const bioLinks = ref([
  { name: "Instagram", url: "/" },
  { name: ".WAV Pack", url: "/WavPack" },
  { name: "YouTube", url: "https://rianseo.com" },
  { name: "TikTok", url: "https://produk.temabanua.com" },
  { name: "Shop", url: "https://www.whatsapp.com/catalog/6285886624531" },
  { name: " .", url: "" },
]);
</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
}

/* .widget_bottom {
  width: 640px;
  text-align: center;
  padding-bottom: 50px;
} */
.widget_bottom {
  max-width: 80%;
  width: 100%;
  text-align: center;
}
.img_story {
  padding: 1px;
  background: hsl(0, 0%, 0%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  /* margin: 0 auto; */
}

.img_story img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.name {
  font-size: 24px;
  font-weight: 700;
  margin: 16px 0 0;
  color: #535353;
}

.caption {
  font-size: 16px;
  font-weight: 400;
  margin-top: 12px;
  color: #7c7c7c;
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

.logo-footer {
  opacity: 0.5;
  text-align: center;
  margin-top: 20px;
}
</style>
