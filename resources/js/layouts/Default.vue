<template>
    <v-app>
        <Header/>
        <v-main class="mx-2">
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </v-main>
    </v-app>
</template> 
<script>
import Header from '../components/Header.vue';
export default {
    name: 'DefaultLayout',
    components: {
        Header,
    },
}
</script>