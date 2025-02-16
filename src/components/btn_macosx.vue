<template>
  <button class="btnm">
    <div class="text">{{ label }}</div>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

.text {
  color: #535353;
  /* font-family: 'SF Pro Display', sans-serif; */
  font-size: 30px;
}

:root {
  --primary: hsl(213, 79%, 56%);
  --light: hsl(181, 95%, 92%);
  --BB: #d0d0d0;
  --E4: #e4e4e4;
}

.btnm {
  background-image: linear-gradient(hsl(0 0% 100% / 0.85), transparent 10px),
    linear-gradient(hsl(0 0% 100% / 0.25) 10px, transparent 10px),
    radial-gradient(circle at 10px 5px,
      hsl(0 0% 100% / 0.25) 5px,
      transparent 5px),
    radial-gradient(circle at 0px 5px,
      hsl(0 0% 100% / 0.25) 5px,
      transparent 5px),
    linear-gradient(var(--E4), var(--BB));
  padding: 0.5em 3em;
  background-size: 100%, calc(100% - 20px), 10px 10px, 10px 10px, 100%;
  background-position: top, top center, top left, top right, center;
  background-repeat: no-repeat;
  border: 2px;
  border-radius: 100vw;
  position: relative;
  border-style: solid;
  border-color: #676767;
  width: 100%;
}

.btnm:hover {
  background-image: linear-gradient(hsl(0 0% 100% / 0.85), transparent 10px),
    linear-gradient(hsl(0 0% 100% / 0.25) 10px, transparent 10px),
    radial-gradient(circle at 10px 5px,
      hsl(0 0% 100% / 0.25) 5px,
      transparent 5px),
    radial-gradient(circle at 0px 5px,
      hsl(0 0% 100% / 0.25) 5px,
      transparent 5px),
    linear-gradient(var(--primary), var(--light));
  background-size: 100%, calc(100% - 20px), 10px 10px, 10px 10px, 100%;
  background-position: top, top center, top left, top right, center;
  background-repeat: no-repeat;
  border: 2px;
  border-radius: 100vw;
  position: relative;
  border-style: solid;
  border-color: #676767;
  width: 100%;
}
</style>