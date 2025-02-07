<template>
    <v-app>
        <v-main class="ma-0">
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </v-main>
    </v-app>
</template> 
<script>
export default {
    name: 'DefaultLayout',
}
</script>