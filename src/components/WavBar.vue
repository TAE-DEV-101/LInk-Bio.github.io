<template>
    <div class="player-container">
        <div class="col-12">

            <div class="btn_bg">
                <!--  BG circle -->
                <!-- <div class="circle-left "></div> -->
                <div class="circle-middle"></div>
                <!-- <div class="circle-right "></div> -->


                <div class="btn-v">
                    <svg width="24" height="24">
                        <path fill="#a3a8a8"
                            d="M4 9h4.002L12 5v14c-2.446-2.667-3.778-4-3.998-4H4V9zm10 4a1 1 0 0 0 0-2V9a3 3 0 0 1 0 6v-2zm0 4a5 5 0 0 0 0-10V5a7 7 0 0 1 0 14v-2z" />
                    </svg>
                    <input class="vll" type="range" min="0" max="1" step="0.01" v-model="volume"
                        @input="changeVolume()" disabled>
                </div>


                <!-- <<<<< -->
                <div class="me-4" @click="$emit('PrevAudio')">
                    <svg width="24" height="24" fill="#a3a8a8">
                        <path d="M7 6h2v12H7V6zm2 6l8 6V6l-8 6z" />
                    </svg>
                </div>

                <!-- >>>PLAY/PAUSE<<< -->
                <div class="btn">
                    <div v-if="isPlaying">
                        <svg width="24" height="24" @click="SetPlayPause()">
                            <path fill="#a3a8a8" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                    </div>
                    <div v-else>
                        <svg width="24" height="24" @click="SetPlayPause()">
                            <path fill="#a3a8a8" d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>

                <!-- >>>>> -->
                <div class="ms-4" @click="$emit('NextAudio')">
                    <svg width="24" height="24" fill="#a3a8a8">
                        <path d="M7 18l8-6-8-6v12zm8-12v12h2V6h-2z" />
                    </svg>
                </div>

            </div>
            <div class="wave-container">
                <div ref="waveform" class="waveform">
                    <div id="time">{{ currentTime }}</div>
                    <div id="duration">{{ duration }}</div>
                    <!-- <div id="hover"></div> -->

                </div>
            </div>
        </div>




    </div>

</template>






<script>
import WaveSurfer from "wavesurfer.js";

export default {
    props: {
        audioUrl: String, // รับ URL ของไฟล์เสียง
    },
    data() {
        return {
            wavesurfer: null,
            currentTime: "0:00",
            // currentTime: 0,
            duration: "0:00",
            isPlaying: false,
            volume: 1,
        };
    },
    methods: {
        formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secondsRemainder = Math.round(seconds) % 60;
            return `${minutes}:${secondsRemainder.toString().padStart(2, "0")}`;
        },
        SetPlayPause() {
            this.wavesurfer.playPause();
        },
        handleSpacebarPress(event) {
            if (event.key === " " || event.keyCode === 32) {
                event.preventDefault();
                this.SetPlayPause();
            }
        },
        changeVolume() {
            if (this.wavesurfer) {
                this.wavesurfer.setVolume(this.volume);
            }
        },
    },
    mounted() {
        window.addEventListener("keydown", this.handleSpacebarPress);

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        this.wavesurfer = WaveSurfer.create({
            container: this.$refs.waveform,
            waveColor: '#000000',
            progressColor: '#304f96',
            barWidth: 2,
            barRadius: 1,
            responsive: true,
            height: 50,
        });
        if (this.audioUrl !== '') {
            this.wavesurfer.load(this.audioUrl);
        } else {
            console.log("โโโโโ");
        }


        // ค่าพื้นฐานตอนเริ่ม
        this.wavesurfer.on("ready", () => {
            this.wavesurfer.setVolume(this.volume);
        });

        this.wavesurfer.on("decode", (duration) => {
            this.duration = this.formatTime(duration);
        });

        this.wavesurfer.on("timeupdate", (currentTime) => {
            this.currentTime = this.formatTime(currentTime);
        });

        this.wavesurfer.on("play", () => {
            this.isPlaying = true;
        });

        this.wavesurfer.on("pause", () => {
            this.isPlaying = false;
        });

        this.wavesurfer.on("finish", () => {
            this.$emit('NextAudio');
        });

        // ให้สามารถลาก progress bar ไปมาได้
        const waveform = this.$refs.waveform;

        // ฟังก์ชันที่จะทำให้ progress bar สามารถลากได้
        const seekBarHandler = (e) => {
            const rect = waveform.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const progress = offsetX / rect.width;
            this.wavesurfer.seekTo(progress);
        };

        waveform.addEventListener("pointerdown", (e) => {
            seekBarHandler(e); // เมื่อกดบน waveform
            waveform.addEventListener("pointermove", seekBarHandler); // ควบคุมการลาก
        });

        waveform.addEventListener("pointerup", () => {
            waveform.removeEventListener("pointermove", seekBarHandler); // หยุดการลาก
        });

        waveform.addEventListener("pointerout", () => {
            waveform.removeEventListener("pointermove", seekBarHandler); // หยุดการลากเมื่อออกจากส่วนนี้
        });
    },
    beforeUnmount() {
        if (this.scriptProcessor) {
            this.scriptProcessor.disconnect();
        }
        if (this.audioContext) {
            this.audioContext.close();
        }
        this.wavesurfer.destroy();
    },
    watch: {
        audioUrl(newUrl) {
            if (this.wavesurfer) {
                this.wavesurfer.load(newUrl);
                this.wavesurfer.on("ready", () => {
                    this.wavesurfer.play();

                });
            }
        },
    },
};
</script>







<style scoped>
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 12;
    outline: none;
    border: none;
    padding: 0;

}

.btn-v {
    position: absolute;
    align-items: center;
    top: -68%;
    z-index: 11;

}

.btn-v:hover .vll {
    display: block;
}

.vll {
    position: absolute;
    align-items: center;
    top: -189%;
    left: -148.5%;
    transform: translateY(-50%) rotate(-90deg);
    z-index: 11;
    width: 400%;
    display: none;
}

.btn_bg {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -29%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    border-radius: 40px 40px 0 0;
    width: 200px;
    height: 30px;

    /* แบบแรก */
    /* background-color: #f2f2f2; */
    /* border-top: 1px solid #cecece; */
    /* border-left: 1px solid #cecece; */
    /* border-right: 1px solid #cecece; */
    /* background: rgb(238, 174, 202); */
    /* box-shadow: 0px -5px 5px 0px rgba(0, 0, 0, 0.3); */
    /* border: 0.5px solid #2428278a; */


}

.btn_bg svg {
    cursor: pointer;
}

.player-container {
    position: relative;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 54px;
    background-color: #e1e1e1;
    border-top: 1px solid #cecece;
    /* background: linear-gradient(to bottom, #f4f9f5, #a0a8aa); */
    /* box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3); */
    /* border: 0.5px solid #2428278a; */
}

.wave-container {
    position: relative;
    width: 100%;
    margin: 0 auto;
}

.waveform {
    cursor: pointer;
    position: relative;
    padding-top: 2px;
}

#time,
#duration {
    position: absolute;
    z-index: 11;
    top: 90%;
    margin-top: -1px;
    transform: translateY(-50%);
    font-size: 12px;
    /* background: rgba(0, 0, 0, 0.75); */
    padding: 2px;
    color: #000000;

}

#time {
    left: 0;
}

#duration {
    right: 0;
}


.circle-middle {
    width: 136px;
    height: 136px;
    background-color: #f2f2f2;
    border-radius: 50%;
    clip-path: inset(0 0 64% 0);
    position: absolute;
    top: -62%;
    /* left: 23%; */
    z-index: -5;
    /* border-top: 1px solid #cecece; */
    border-left: 1px solid #cecece;
    border-right: 1px solid #cecece;
    background: linear-gradient(to bottom, #d5d5d5, rgb(255 255 255));
    box-shadow: inset 0px 0px 12px 1px rgba(0, 0, 0, 0.3);


}

.circle-left {
    width: 60px;
    height: 60px;
    left: 50px;
    background-color: #f2f2f2;
    border-radius: 50%;
    clip-path: inset(0 0 50% 0);
    position: absolute;
    top: 1%;
    left: 10%;
    z-index: -7;
    border-top: 1px solid #cecece;

}

.circle-right {
    width: 60px;
    height: 60px;
    right: 50px;
    background-color: #f2f2f2;
    border-radius: 50%;
    clip-path: inset(0 0 50% 0);
    position: absolute;
    top: 1%;
    right: 10%;
    z-index: -7;
    border-top: 1px solid #cecece;

}


/* #hover {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    pointer-events: none;
    height: 100%;
    width: 0;
    mix-blend-mode: overlay;
    background: #acacac;
    opacity: 0;
    transition: opacity 0.2s ease;
} */

/* .waveform:hover #hover {
    opacity: 1;
} */
</style>