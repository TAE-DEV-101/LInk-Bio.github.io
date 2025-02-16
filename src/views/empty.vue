<template>
  <div class="fullscreen_white">
    <div class="container mt-5">
      <div class=" ">
       
        <div class="row">

        </div>

        <div class="row">
          
        </div>
       
        <div class="row">
          
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref ,onMounted} from "vue";
const object = ref({});
const array = ref([]);
const string = ref("");


const CL = (s) => {
    console.log(s||"string");
};
onMounted(() => {
  CL("mounted");
});
</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
}

</style>
