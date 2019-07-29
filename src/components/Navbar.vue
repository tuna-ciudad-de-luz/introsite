<template>
    <div class="sticky-top">
        <div class="stripe--red"></div>
        <nav class="navbar navbar-expand-lg navbar-light bg-yellow">
            <a class="navbar-brand" href="#">TCL</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavigation"
                    aria-controls="mainNavigation" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="mainNavigation">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a class="nav-link" href="#" v-scroll-to="'#home'">Intro</a>
                    </li>
                    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a class="nav-link" href="#" v-scroll-to="'#tuna'">De Tuna</a>
                    </li>
                    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a class="nav-link" href="#" v-scroll-to="'#muziek'">Muziek</a>
                    </li>
                    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a class="nav-link" href="#" v-scroll-to="'#gezelligheid'">Gezelligheid</a>
                    </li>
                    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a class="nav-link" href="#" v-scroll-to="'#studeren'">Studeren</a>
                    </li>
                    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a class="nav-link" href="#" v-scroll-to="'#contact'">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="stripe--red"></div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .bg-yellow {
        background: #ffdc28;
        padding-top: 0;
        padding-bottom: 0;
    }

    .bg-yellow a {
        color: #3d3d3d !important;
        margin: 5px;
    }

    .bg-yellow .active {
        background: #e0c026;
    }

    .stripe--red {
        background: #e00;
        width: 100%;
        height: 10px;
    }

</style>