<template>
  <NavBar1></NavBar1>
  <div class="fullscreen_white">
    <div class="container mt-4">
      <div class="row">
        <div class="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-2 mb-2 px-1" v-for="(video, index) in videos" :key="index">
          <div @click="play(video)">
            <div class="card-w ">
              <div class="mx-2 mt-2">
                <img :src="video.thumbnail" class="i-m-g " alt="Thumbnail">
              </div>
              <div class="col px-2">
                <h6 class=" text-dark pt-2 mb-0">{{ cuttext(video.title, 20) }}</h6>
                <p class="text-muted mb-0">{{ cuttext(video.genres, 20) }}</p>
                <p class="text-muted mb-0 " style="font-size: 12px;">{{ video.bpm }} BPM</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="row">
      </div>
    </div>
    <!-- <audio ref="audioPlayer"  preload="none" :src="currentAudio" @ended="isPlaying = false"></audio> -->
    <audio ref="audioPlayer" :src="currentAudio" @ended="onAudioEnd"></audio>
  </div>

</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          title: "Vue.js Crash Course",
          genres: "Traversy Media",
          bpm: "120",
          thumbnail: "https://i.pinimg.com/736x/e0/c5/22/e0c5221dabd94f7ff71a97667d535bd2.jpg",
          link: "https://www.youtube.com/watch?v=qZXt1Aom3Cs",
          src: "../../public/JonB.mp3",
        },
        {
          title: "Bootstrap 5 Tutorial",
          genres: "The Net Ninja",
          bpm: "30",
          thumbnail: "https://i.pinimg.com/736x/d5/be/cf/d5becf7720903b901cd931b8521c83dd.jpg",
          link: "https://www.youtube.com/watch?v=Jyvffr3aCp0",
          src: "../../public/NikoB.mp3",
        },
        {
          title: "Learn Vue 3 - Full Course",
          genres: "freeCodeCamp.org",
          bpm: "120",
          thumbnail: "https://i.pinimg.com/736x/70/ae/03/70ae0311bfe00451f238bfe4f5aef43b.jpg",
          link: "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
          src: "../../public/JonB.mp3",
        },


      ],
      isPlaying: false,
      currentAudio: "",
      srca: "",
    };
  },
  methods: {
    cuttext(text, length) {
      return text.length > length ? text.substring(0, length) + '...' : text;
    },
    async play(video) {
      const audio = this.$refs.audioPlayer;

      try {
        if (this.currentAudio === video.src) {
          // ถ้าคลิกซ้ำ ให้สลับระหว่าง Play/Pause
          if (this.isPlaying) {
            audio.pause();
          } else {
            await audio.play();
          }
          this.isPlaying = !this.isPlaying;
        } else {
          // หยุดเพลงเก่าก่อน
          audio.pause();
          audio.currentTime = 0;

          // เปลี่ยนไฟล์ใหม่
          this.currentAudio = video.src;
          audio.src = video.src;

          // รอให้โหลดไฟล์ใหม่เสร็จ
          await audio.load();

          // ลองเล่นเสียงใหม่
          const playPromise = audio.play();

          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                this.isPlaying = true;
              })
              .catch(error => {
                console.error("Play interrupted:", error);
              });
          }
        }
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    },
    setaudio(src) {
      this.srca = src;
    },
    onAudioEnd() {
      this.isPlaying = false;
    }

  }
};
</script>

<style scoped>
.card-w {
  width: 100%;
  /* max-width: 190px;   */
  height: auto;
  border-radius: 15px;
  background: #e3e3e3;
  position: relative;
  border: 1px solid #c3c6ce;
  /* transition: 0.5s ease-out; */
}

.card-w:hover {
  width: 100%;
  /* max-width: 190px;   */
  height: auto;
  border-radius: 15px;
  background: #e3e3e3;
  position: relative;
  border: 2px solid #c3c6ce;
  /* transition: 0.5s ease-out; */
}


.i-m-g {
  border-radius: 10px;
  width: 100%;
  display: block;
  margin: 0 auto;
  border: 1px solid #c3c6ce;
  /* margin-top: 6px;           */
}

/* h6 {
  font-size: 14px;
  margin-bottom: 5px;
} */

/* p {
  font-size: 12px;
  margin: 0;
} */
</style>
