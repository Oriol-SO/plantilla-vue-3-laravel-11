<template>
    <div>
      <transition name="page" mode="out-in">
        <component :is="currentLayout" />
      </transition>
    </div>
</template>

<script>
import Default from '../layouts/default.vue';
export default{
    name:'App',
    computed:{
        currentLayout(){
            return Default;
        }
    }
}

</script>