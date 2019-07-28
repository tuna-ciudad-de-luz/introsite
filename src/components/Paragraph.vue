<template>
    <div :id="paragraphID">
        <h3 class="my-2" v-if="title">
            {{ title }}
        </h3>
        <div class="row my-md-5 my-sm-3">
            <div v-bind:class="fullWidth ? 'col-12' : 'col-md-6 col-sm-12'">
                <p>
                    {{ paragraphOne }}
                </p>
                <slot name="paragraphOne"></slot>
            </div>
            <div v-bind:class="fullWidth ? 'col-12' : 'col-md-6 col-sm-12'">
                <p>
                    {{ paragraphTwo }}
                </p>
                <slot name="paragraphTwo"></slot>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props: {
            fullWidth: {
                type: Boolean,
                default: false
            },
            title: String,
            paragraphOne: String,
            paragraphTwo: String,
            paragraphID: String
        }
    }
</script>

<style scoped>
h3 {
    text-align: center;
    text-decoration: underline;
    text-decoration-color: #ee0000;
    text-underline-position: under;
}
</style>