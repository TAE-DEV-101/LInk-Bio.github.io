<template>
    <div class="fullscreen_black ">
        <div class="cmd-container ">
            <div v-for="s in preText" class="line">
                &nbsp; &nbsp; {{ s }}
            </div>
            <div v-for="(line, index) in lines" :key="index" class="line">
                <span class="text-success">{{ namePath }}&nbsp</span>{{ line }}
            </div>
            <div>
                <div v-if="menuOn" class="line">
                    <span class="text-success">{{ namePath }}&nbsp;</span><input class="input-line" v-model="userInput"
                        @keydown.enter="executeCommand" type="text" />
                </div>
                <div v-else class="line">
                    <div class="col"><router-link to="/"><a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;HOME</a></router-link>
                    </div>
                    <div class="col"><router-link to="/bio"><a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;BIO</a></router-link>
                    </div>
                    <div class="col"><router-link to="/"><a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;About</a></router-link>
                    </div>




                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const userInput = ref('');
const preText = ref([
    "Welcome to the black page",
    "Development Tools:",
    "                   •  Vite⚡",
    "                   •  Vue 3 ",
    "                   •  Bootstrap 5",
    " ",
    'You can type the "menu" command to display a list of "menu" items to choose from.',
    "by THEERAWUT KHUNWAN",

]);
const lines = ref([]);
const namePath = ref("C:\>");
const menuOn = ref(true);

const executeCommand = () => {
    lines.value.push(userInput.value);
    if (userInput.value.startsWith('cd')) {
        let folder = userInput.value.slice(3).trim();
        namePath.value = namePath.value.concat("\\", folder);
        lines.value.push(`Changed directory to ${folder}`);
    }
    if (userInput.value.startsWith('menu')) {
        menuOn.value = false;
    }
    if (userInput.value.startsWith('.')) {
        menuOn.value = false;
    }
    userInput.value = '';
};

const handleKey = (event) => {
    if (event.ctrlKey && event.key === 'c' || event.ctrlKey && event.key === 'แ') {
        event.preventDefault();
        lines.value = []
        namePath.value = "C:\>"
        userInput.value = '';
        preText.value = '';
    }
};

onMounted(() => {
    window.addEventListener('keydown', handleKey);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKey);
});
</script>











<style scoped>
*{
    font-family:monospace;
}
a {
    text-decoration: none;
    color: #cccccc;

}

.cmd-container {
    width: 100%;
    padding: 20px;
}

.line {
    /* margin: 5px 0; */
    font-size: 16px;

}

.input-line {
    background: none;
    border: none;
    /* color: white; */
    /* font-family: monospace; */
    font-size: 1.2rem;
    /* padding: 10px; */
    width: 80%;
    /* caret-color: rgb(113, 197, 92); */

}

input:focus {
    outline: none;
}
</style>