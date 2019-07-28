<template>
    <div class="card">
        <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    {{ title }}
                </button>
            </h2>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
                {{ body }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            body: String,
            id
        }
    }
</script>

<style scoped>

</style>