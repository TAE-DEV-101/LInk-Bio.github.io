<template>
    <div class="music-player">
      <div class="player-controls">
        <button @click="prevTrack" class="btn btn-secondary">⏮</button>
        <button @click="togglePlayPause" class="btn btn-primary">
          {{ isPlaying ? '⏸ Pause' : '▶ Play' }}
        </button>
        <button @click="nextTrack" class="btn btn-secondary">⏭</button>
      </div>
  
      <div class="progress-bar">
        <span>{{ currentTimeFormatted }}</span>
        <input
          type="range"
          v-model="progress"
          @input="seek"
          min="0"
          :max="duration"
        />
        <span>{{ durationFormatted }}</span>
      </div>
  
      <div class="volume-control">
        <input
          type="range"
          v-model="volume"
          @input="setVolume"
          min="0"
          max="1"
          step="0.01"
        />
      </div>
  
      <div class="track-info">
        <img :src="currentTrack.cover" class="cover" />
        <div>
          <h5>{{ currentTrack.title }}</h5>
          <p>{{ currentTrack.artist }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isPlaying: false,
        audio: new Audio(),
        volume: 1,
        progress: 0,
        duration: 0,
        currentTime: 0,
        currentTrack: {
          title: 'Let it Snow',
          artist: 'Damien Sebe',
          cover: 'https://i1.sndcdn.com/artworks-bZHMloKyYGez-0-t50x50.jpg',
          src: 'https://www.example.com/song.mp3',
        },
      };
    },
    computed: {
      currentTimeFormatted() {
        return this.formatTime(this.currentTime);
      },
      durationFormatted() {
        return this.formatTime(this.duration);
      },
    },
    methods: {
      togglePlayPause() {
        if (this.isPlaying) {
          this.audio.pause();
        } else {
          this.audio.play();
        }
        this.isPlaying = !this.isPlaying;
      },
      prevTrack() {
        console.log('⏮ Previous Track');
      },
      nextTrack() {
        console.log('⏭ Next Track');
      },
      seek(event) {
        this.audio.currentTime = event.target.value;
      },
      setVolume() {
        this.audio.volume = this.volume;
      },
      formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
      },
    },
    mounted() {
      this.audio.src = this.currentTrack.src;
      this.audio.addEventListener('loadedmetadata', () => {
        this.duration = this.audio.duration;
      });
      this.audio.addEventListener('timeupdate', () => {
        this.currentTime = this.audio.currentTime;
        this.progress = this.audio.currentTime;
      });
    },
  };
  </script>
  
  <style scoped>
  .music-player {
    background: #222;
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
  }
  .player-controls button {
    margin: 0 5px;
  }
  .progress-bar {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .track-info {
    display: flex;
    align-items: center;
  }
  .cover {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  </style>
  