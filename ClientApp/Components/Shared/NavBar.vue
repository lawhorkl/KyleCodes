<template>
    <div>
        <v-toolbar app clipped-left class="primary white--text">
            <v-toolbar-side-icon  @click.stop="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
            <v-toolbar-title><span class="green--text">Kyle</span>.<span class="blue--text">Codes</span></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="white--text">
                <v-btn class="white--text" to="/" flat>Home</v-btn>
                <v-btn class="white--text" flat>Link Two</v-btn>
                <v-btn class="white--text" flat>Link Three</v-btn>
            </v-toolbar-items>
        </v-toolbar>
  
        <v-navigation-drawer
        v-model="drawer"
        temporary
        absolute
        width = "200"
        id = "drawer"
        class="primary"
        app
        >
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: null
        }
    }
}
</script>


