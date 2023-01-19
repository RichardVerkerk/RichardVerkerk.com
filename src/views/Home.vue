<template>
    <div class="container mx-auto p-4 m-5 lg:max-w-4xl">
        <div class="font-semibold mb-3">
            Hey, mijn naam is <span>Richard Verkerk</span> en ik ben een
            <jobTitleComp />.
        </div>
    </div>
</template>

<script>
import jobTitleComp from '../components/jobTitleComp.vue';

export default {
    components: {
        jobTitleComp
    },
}
</script>