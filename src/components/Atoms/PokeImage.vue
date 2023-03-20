<template>
    <div>
        <img :src="url" :alt="altImg" loading="lazy">
    </div>
</template>
<script setup>
const props = defineProps({
    altImg: {
        type: String
    },
    url: {
        type: String
    },
})
</script>
<style lang="">
    
</style>