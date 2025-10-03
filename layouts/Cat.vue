<template>
    <div class="bg-[#1B0C15] min-h-full text-white flex items-center justify-center">
        <div class="bg w-full h-[28rem] flex flex-col gap-4 justify-center px-32" style="background-image: url('/bg/cat.png');">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="css" scoped>
.bg {
    background-size: 48rem;
    background-position: center;
    font-family: "Fredoka", cursive;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1rem;
}

.bg {
    font-size: 1.5rem;
    line-height: 2.25rem;
    letter-spacing: 0.1rem;
}
</style>