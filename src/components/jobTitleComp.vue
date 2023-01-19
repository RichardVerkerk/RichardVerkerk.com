
<template>
    {{ jobTitle }}
</template>

<script>
export default {
    data() {
        return {
            jobTitles: ['Laravel developer', 'Webdeveloper', 'Back-end developer', 'Front-end developer', 'Full-stack developer', 'PHP developer'],
            jobTitle: 'PHP developer',
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