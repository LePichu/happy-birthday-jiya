<template>
    <div class="bg-[#101010] min-h-full text-white flex justify-center p-4">
        <div class="grid grid-cols-2 grow min-h-full text-3xl" style="font-family: 'IBM Plex Mono', monospace;">
            <div class="card">
                <slot></slot>
            </div>
            <div class="flex items-center justify-center h-full w-full">
                <img src="/img/kitty.png" class="w-[75%] img" />
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .card {
        position: relative;
        z-index: 1;
        padding: 2rem; 
    }

    .card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0808F5;
        border-radius: 1rem;
        z-index: -1;

        transform: translate(-25%, 10%) rotate(12.5deg);
    }

    .img {
        transform: scale(-1, 1);
    }
</style>