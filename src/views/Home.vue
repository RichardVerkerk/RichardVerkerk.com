<template>
    <div class="font mb-3 bg-white p-5 rounded-xl shadow-lg">
        <p class="mb-5">
            Hey, mijn naam is <span class="text-orange-500">Richard Verkerk</span> en ik ben een
            <span class="text-orange-500">
                <jobTitleComp />
            </span>.
        </p>
        <p class="mb-5">Op dit moment werk ik vooral met het <a href="https://laravel.com/">Laravel</a> framework. Ik
            heb ongeveer 4
            jaar ervaring met het ontwikkelen
            van webapplicaties met Laravel, waaronder een debiteurenbeheer systeem en een e-commerce systeem. Mijn
            sterke punten liggen vooral in het programmeren van de back-end (PHP). Voor de front-end leer ik op dit
            moment <span class="cursor-pointer underline" ref="clickTooltipVueJS" v-on:mouseenter="toggleTooltipVueJS()"
                v-on:mouseleave="toggleTooltipVueJS()">Vue.js</span> en maak ik gebruik van <span class="cursor-pointer underline" ref="clickTooltipTailwindCSS" v-on:mouseenter="toggleTooltipTailwindCSS()"
                v-on:mouseleave="toggleTooltipTailwindCSS()">Tailwind CSS</span>. Verder
            heb ik kennis van HTML, CSS, Javascript, MySQL, Deployer, Docker, Git, VSCode, MacOS, Ubuntu Linux, en ik vergeet er vast nog een paar.
        </p>
        <div ref="tooltipVueJSRef" v-bind:class="{ 'hidden': !showTooltipVueJS, 'block': showTooltipVueJS }"
            class="bg-gray-700  text-white p-2 rounded-md text-xs shadow">
            Wist je dat deze website gemaakt is met Vue.js?
        </div>
        <div ref="tooltipTailwindCSS" v-bind:class="{ 'hidden': !showTooltipTailwindCSS, 'block': showTooltipTailwindCSS }"
            class="bg-gray-700  text-white p-2 rounded-md text-xs shadow">
            Wist je dat deze website gemaakt is met TailwindCSS?
        </div>

        <showMore />

    </div>
</template>

<script>
import jobTitleComp from '../components/jobTitleComp.vue';
import showMore from '../components/showMore.vue';
import { createPopper } from '@popperjs/core';

export default {
    data() {
        return {
            showTooltipVueJS: false,
            showTooltipTailwindCSS: false,
        }
    },
    components: {
        jobTitleComp, showMore
    },

    methods: {
        toggleTooltipVueJS: function () {
            if (this.showTooltipVueJS) {
                this.showTooltipVueJS = false;
            } else {
                this.showTooltipVueJS = true;
                createPopper(this.$refs.clickTooltipVueJS, this.$refs.tooltipVueJSRef, {
                    placement: 'top',
                });
            }
        },
        toggleTooltipTailwindCSS: function () {
            if (this.showTooltipTailwindCSS) {
                this.showTooltipTailwindCSS = false;
            } else {
                this.showTooltipTailwindCSS = true;
                createPopper(this.$refs.clickTooltipTailwindCSS, this.$refs.tooltipTailwindCSS, {
                    placement: 'top',
                });
            }
        }
    }
}
</script>