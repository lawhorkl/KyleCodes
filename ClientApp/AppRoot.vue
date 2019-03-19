<template>
    <v-app>
            <app-nav-bar></app-nav-bar>
            <v-content>
                <router-view></router-view>
            </v-content>
    </v-app>
</template>

<script>
    import NavBar from "./Components/Shared/NavBar.vue"

    export default {
        components: {
            "appNavBar": NavBar
        }
    }
</script>

