<template>
    <div class="sticky-top">
        <div class="stripe--red"></div>
        <nav class="navbar navbar-expand-lg navbar-light bg-yellow">
            <a class="navbar-brand" href="#">
                <img src="../assets/Logo.png" style="height: 35px;">
            </a>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <router-link :to="{path: $route.path.includes('en') ? '/' : '/en'}" tag="a" class="nav-link">{{ $route.path.includes('en') ? 'Nederlands' : 'English'}}</router-link>
                    </li>
                </ul>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavigation"
                    aria-controls="mainNavigation" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="mainNavigation">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item hover" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <!--                    <li class="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">-->
                        <a class="nav-link" href="#" v-scroll-to="'#home'">Intro</a>
                    </li>
                    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a class="nav-link" href="#" v-scroll-to="'#tuna'">{{ $route.path.includes('en') ? 'The Tuna' : 'De Tuna'}}</a>
                    </li>
                    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a class="nav-link" href="#" v-scroll-to="'#muziek'">{{ $route.path.includes('en') ? 'Music' : 'Muziek'}}</a>
                    </li>
                    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a class="nav-link" href="#" v-scroll-to="'#gezelligheid'">{{ $route.path.includes('en') ? 'Socializing' : 'Gezelligheid'}}</a>
                    </li>
                    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a class="nav-link" href="#" v-scroll-to="'#studeren'">{{ $route.path.includes('en') ? 'Studying' : 'Studeren'}}</a>
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

    .nav-item :hover {
        background: #e0c026;

    }

</style>