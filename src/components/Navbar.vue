<template>
    <div>
        <div class="stripe--red"></div>
        <nav class="navbar navbar-expand-lg navbar-light bg-yellow">
            <a class="navbar-brand" href="#">TCL</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Intro <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tuna">De Tuna</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#muziek">Muziek</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#gezelligheid">Gezelligheid</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#studeren">Studeren</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="stripe--red"></div>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
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