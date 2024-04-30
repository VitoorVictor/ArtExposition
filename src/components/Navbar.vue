<template>
    <nav class="navbar navbar-expand-sm" id="navbar">
        <div class="container-fluid">
            <ul class="navbar-nav col justify-content-center">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/projetos">Projetos</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/artistas">Artistas</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contatos">Contatos</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
    export default {
        name: 'Navbar'
    }
</script>
<style scoped>

</style>