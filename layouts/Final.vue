<script setup>
import { ref } from 'vue'
import Play from "/ico/play.svg?url"
import Download from "/ico/download.svg?url"

const endpointBaseUrl = "https://lepichu-0310-endpoint.deno.dev"
const audioSrc = "/audio.mp3"

const audioPlayer = ref(null)
const isPlaying = ref(false)

async function pingEndpoint(path) {
	try {
		fetch(`${endpointBaseUrl}/${path}`);
	} catch (error) {
		console.error(`Failed to ping endpoint: /${path}`, error);
	}
}

function togglePlay() {
	pingEndpoint('play');
	if (audioPlayer.value.paused) {
		audioPlayer.value.play();
		isPlaying.value = true;
	} else {
		audioPlayer.value.pause();
		isPlaying.value = false;
	}
}

function downloadAudio() {
	pingEndpoint('download');
	const link = document.createElement('a');
	link.href = audioSrc;
	link.download = 'audio.mp3';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}
</script>

<template>
	<audio ref="audioPlayer" :src="audioSrc" @ended="isPlaying = false"></audio>

	<div class="bg min-h-full text-white flex justify-center">
		<div class="container grid grid-cols-2 items-center justify-center h-full w-full">
			<div class="flex p-8 text-2xl line-height-loose" style="font-family: 'IBM Plex Sans', sans-serif;">
				<slot></slot>
			</div>
			<div class="flex items-center justify-center">
				<div class="card bg-white p-8 flex flex-col gap-4">
					<img src="https://i.scdn.co/image/ab67616d00001e02bdea30b86b37142ec99deb78" class="h-32 rounded" />
					<p class="text-black text-center font-medium" style="font-family: 'Fredoka', cursive;">Never Not</p>
					<div class="grid grid-cols-2 gap-2">
						<button @click="togglePlay" class="bg-black rounded w-full">
							<img :src="Play" class="invert h-8 mx-auto p-2" />
						</button>
						<button @click="downloadAudio" class="bg-black bg-opacity-20 rounded w-full">
							<img :src="Download" class="h-8 mx-auto p-2" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="css" scoped>
.card {
	scale: 2;
	transform: rotate(-15deg);
}

.bg {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: 1;
}

.bg::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	background-image: url("/bg/cat_t.png");
	background-size: 24rem;
	background-repeat: repeat;
	background-position: center;
	z-index: -1;
	filter: grayscale(1) brightness(0.5);
	opacity: 0.25;
	rotate: 25deg;
	scale: 1.5;
}
</style>