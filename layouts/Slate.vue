<template>
    <div class="bg min-h-full text-white flex justify-center">
        <div class="container flex flex-col items-center justify-center h-full w-full text-3xl text-center" style="font-family: 'IBM Plex Serif', serif;">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="css" scoped>
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

        background-image: url("/bg/sepia.gif");
        background-size: cover;
        background-position: center;
        z-index: -1;
        filter: grayscale(1) brightness(0.75) contrast(1.25) brightness(0.25);
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

    .container {
        background-color: #261f3592;
    }
</style>