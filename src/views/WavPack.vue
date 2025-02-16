<template>
  <NavBar1></NavBar1>
  <div class="fullscreen_white">
    <div class="container mt-4">
      <div class="row">
        <!-- <div class="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-2 mb-2 px-1" v-for="(video, index) in videos" :key="index"> -->
        <div class="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-2 mb-2 px-1" v-for="(video, index) in videos" :key="index">
          <div @click="setaudio(video.src)">

            <div class="card-w" :class="{ 'playing': SrcAudio === video.src && OpenMusicBar }">

              <div class="mx-2 mt-2">
                <img :src="video.thumbnail" class="i-m-g " alt="Thumbnail">
              </div>
              <div class="px-2">
                <h6 class=" text-dark pt-2 mb-0 font-rp16 text-ellipsis">{{ video.title }}</h6>
                <p class="text-muted mb-0 font-rp6 dis-rp  text-ellipsis">{{ video.genres }}</p>
                <p class="text-muted mb-0 font-rp6 mb-2">
                  {{ video.bpm }} BPM
                </p>
                <div v-if="SrcAudio === video.src && OpenMusicBar" class="g-i-f">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px"
                    viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                    <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
                      <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s"
                        repeatCount="indefinite" />
                      <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s"
                        repeatCount="indefinite" />
                      <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s"
                        repeatCount="indefinite" />
                    </rect>
                    <rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2">
                      <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s"
                        repeatCount="indefinite" />
                      <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s"
                        repeatCount="indefinite" />
                      <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s"
                        repeatCount="indefinite" />
                    </rect>
                    <rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2">
                      <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s"
                        repeatCount="indefinite" />
                      <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s"
                        repeatCount="indefinite" />
                      <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s"
                        repeatCount="indefinite" />
                    </rect>
                  </svg>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer v-if="OpenMusicBar" class="audio-player">
      <!-- <footer  class="audio-player"> -->
      <WAVV ref="wavv" :audioUrl="SrcAudio" @PrevAudio="PrevAudio" @NextAudio="NextAudio" />
    </footer>
  </div>


</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          title: "*DEVSTACK X RIO",
          genres: "HIPHOP",
          bpm: "30",
          thumbnail: "https://i.pinimg.com/736x/d5/be/cf/d5becf7720903b901cd931b8521c83dd.jpg",
          link: "https://www.youtube.com/watch?v=Jyvffr3aCp0",
          src: "NikoB.mp3",
        },
        {
          title: "Learn Vue 3 - Full Course",
          genres: "RnB,HIPHOP",
          bpm: "120",
          thumbnail: "https://i.pinimg.com/736x/70/ae/03/70ae0311bfe00451f238bfe4f5aef43b.jpg",
          link: "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
          src: "JonB.mp3",
        },
        {
          title: "Step Me",
          genres: "PLUG,TRAP",
          bpm: "120",
          thumbnail: "https://i.pinimg.com/736x/e0/c5/22/e0c5221dabd94f7ff71a97667d535bd2.jpg",
          link: "https://www.youtube.com/watch?v=qZXt1Aom3Cs",
          src: "JsonB.mp3",
        },
        {
          title: "*DEVSTACK X RIO",
          genres: "HIPHOP",
          bpm: "30",
          thumbnail: "https://i.pinimg.com/736x/d5/be/cf/d5becf7720903b901cd931b8521c83dd.jpg",
          link: "https://www.youtube.com/watch?v=Jyvffr3aCp0",
          src: "NikoB.mp3",
        },
        {
          title: "Learn Vue 3 - Full Course",
          genres: "RnB,HIPHOP",
          bpm: "120",
          thumbnail: "https://i.pinimg.com/736x/70/ae/03/70ae0311bfe00451f238bfe4f5aef43b.jpg",
          link: "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
          src: "JonB.mp3",
        },
        {
          title: "Step Me",
          genres: "PLUG,TRAP",
          bpm: "120",
          thumbnail: "https://i.pinimg.com/736x/e0/c5/22/e0c5221dabd94f7ff71a97667d535bd2.jpg",
          link: "https://www.youtube.com/watch?v=qZXt1Aom3Cs",
          src: "../../public/JsonB.mp3",
        },
      ],
      OpenMusicBar: false,
      currentAudio: "",
      SrcAudio: "",
    };
  },
  methods: {
    cuttext(text, length) {
      return text.length > length ? text.substring(0, length) + '...' : text;
    },
    setaudio(src) {
      this.OpenMusicBar = !this.OpenMusicBar;
      if (this.SrcAudio === src) {
        this.$nextTick(() => {
          if (this.$refs.wavv) {
            this.$refs.wavv.SetPlayPause();
          }
        });
      } else {
        this.SrcAudio = src;
        this.OpenMusicBar = true;

        this.$nextTick(() => {
          setTimeout(() => {
            if (this.$refs.wavv) {
              this.$refs.wavv.SetPlayPause();
            }
          }, 100);
        });
      }
    },
    NextAudio() {
      const currentIndex = this.videos.findIndex(video => video.src === this.SrcAudio);
      if (currentIndex < this.videos.length - 1) {
        this.SrcAudio = this.videos[currentIndex + 1].src;
      } else {
        this.SrcAudio = this.videos[0].src;
      }

      this.$nextTick(() => {
        setTimeout(() => {
          if (this.$refs.wavv) {
            this.$refs.wavv.SetPlayPause();
          }
        }, 100);
      });
    },
    PrevAudio() {
      const currentIndex = this.videos.findIndex(video => video.src === this.SrcAudio);
      if (currentIndex > 0) {
        this.SrcAudio = this.videos[currentIndex - 1].src;
      } else {
        this.SrcAudio = this.videos[this.videos.length - 1].src; // วนกลับไปเพลงสุดท้าย
      }

      this.$nextTick(() => {
        setTimeout(() => {
          if (this.$refs.wavv) {
            this.$refs.wavv.SetPlayPause();
          }
        }, 100);
      });
    },
  },

  mounted() {
    // this.wavvv  = this.$refs.wavv.OpenMusicBar;
  }
};
</script>

<style scoped>
.text-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}



.card-w {
  position: relative;
  width: 100%;
  /* max-width: 190px;   */
  height: auto;
  border-radius: 15px;
  background: #e3e3e3;
  border: 1px solid #c3c6ce;
  /* transition: 0.5s ease-out; */
  overflow: hidden;
}

.card-w:hover {
  width: 100%;
  /* max-width: 190px;   */
  height: auto;
  border-radius: 15px;
  /* background: #e3e3e3; */
  position: relative;
  border: 2px solid #c3c6ce;
  /* box-shadow: 0 -2px 15px rgba(0, 0, 0, 0.384); */

}


.i-m-g {
  border-radius: 10px;
  width: 100%;
  display: block;
  margin: 0 auto;
  border: 1px solid #c3c6ce;
  /* margin-top: 6px;           */
}

.playing {
  background: linear-gradient(to bottom, #bec0be, #a0a8aa9a);
  /* position: relative; */
  border: 2px solid #c3c6ce;


}

.g-i-f {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 86%;
  right: 3.5%;
  width: 14px;
}





.font-rp6 {
  font-size: 12px;
}

@media screen and (max-width: 600px) {
  .font-rp6 {
    font-size: 8px;
  }

  .font-rp12 {
    font-size: 10px;
  }

  .font-rp16 {
    font-size: 12px;
  }

  .dis-rp {
    display: none;
  }

  .g-i-f {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 80%;
    right: 8.5%;
    width: 10px;
  }
}
</style>
