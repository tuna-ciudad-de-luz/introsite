<template>
    <div class="image" :class="{'image--no-top' : noMargin}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            noMargin: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .image {
        width: 100%;
        height: auto;
        margin: 50px auto;
    }

    .image--no-top {
        margin-top: 0;
    }

    .image img {
        height: auto;
        width: 100%;
    }
</style>