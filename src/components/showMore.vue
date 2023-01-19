<template>
    <div @click="showText = !showText"
        class="group p-3 rounded-md bg-orange-50 cursor-pointer hover:bg-orange-100 active:bg-orange-100 border border-orange-200">
        <ExclamationCircleIcon class="h-6 w-6 inline text-orange-500" /> Op dit moment sta ik open voor een nieuwe
        uitdaging.
        <div v-if="showText" class="mt-3 p-3 bg-white rounded-md border border-orange-200">
           <p>Interesse in mijn skills? Contact me via <a href="https://www.linkedin.com/in/richard-verkerk-54866016a/">Linkedin!</a></p>
        </div>
    </div>

</template>

<script>
import { ExclamationCircleIcon } from '@heroicons/vue/24/outline';

export default {
    components: {
        ExclamationCircleIcon
    },
    data() {
        return {
            showText: false
        }
    }
}
</script>