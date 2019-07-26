<template>
    <div>
        <Navbar></Navbar>
        <div class="container">
            <Paragraph></Paragraph>
        </div>
    </div>
</template>

<script>
    import Navbar from "./components/Navbar";
    import Paragraph from "./components/Paragraph";

    export default {
        name: 'app',
        components: {
            Paragraph,
            Navbar,
        }
    }
</script>

<style>

</style>
