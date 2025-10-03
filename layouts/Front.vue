<script>
import ICON from "/ico/touch--1.svg?url"
</script>

<template>
	<div class="bg min-h-full text-white flex justify-center">
		<div class="container flex flex-col items-center justify-center h-full w-full p-16">
			<div class="flex flex-col justify-center h-full w-full border border-white">
				<h1>HELLO - READ THIS PLEASE!</h1>
				<div class="flex flex-col gap-8 grow justify-center p-16 pt-24">
					<div class="flex items-center gap-4">
						<img :src="ICON" 
							class="invert h-16 border border-solid border-black p-4" />
						<p>
							<strong>Just Tap:</strong>  on the left to go back, on the right to go
							forward.
						</p>
					</div>

					<div class="flex items-center gap-4">
						<img src="/ico/side-panel--close--filled.svg"
							class="invert h-16 border border-solid border-black p-2" />
						<p>
							<strong>Press Right Arrow Key:</strong> to go forward, space key also works.
						</p>
					</div>

					<div class="flex items-center gap-4">
						<img src="/ico/right-panel--close--filled.svg"
							class="invert h-16 border border-solid border-black p-2" />
						<p>
							<strong>Press Left Arrow Key:</strong> to go backward.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="css" scoped>
h1 {
	font-family: "IBM Plex Mono", monospace;
	font-size: 1.5rem;
	text-align: center;
	padding: 0.5rem 1rem;
	background-color: white;
	height: fit-content;
	width: fit-content;
	color: black;
	font-weight: 600;
	position: absolute;
	top: 7.5%;
	left: 50%;
	transform: translate(-50%);
}

p{
	font-family: "IBM Plex Mono", monospace;
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

	background-image: url("/bg/noise.gif");
	background-size: cover;
	background-position: center;
	z-index: -1;
	filter: grayscale(1) brightness(0.5);
}

.bg::after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: radial-gradient(circle, transparent 75%, rgba(0, 0, 0, 0.7));
	pointer-events: none;
	z-index: 2;
}
</style>
