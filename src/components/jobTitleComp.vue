
<template>
    {{ jobTitle }}
</template>

<script>
export default {
    data() {
        return {
            jobTitles: ['PHP developer', 'Laravel developer', 'Webdeveloper', 'back-end developer', 'front-end developer'],
            jobTitle: 'front-end developer',
            count: 0,
        }
    },
    methods: {
        changeJobTitle: function () {

            setInterval(function () {

                if (this.count == this.jobTitles.length) {
                    this.count = 0;
                }

                this.jobTitle = this.jobTitles[this.count];

                this.count++
            }.bind(this), 1500);

        }
    },
    mounted() {
        this.changeJobTitle()
    }
}
</script>