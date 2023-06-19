<template>
    <section class="msg-container">
        <h1>{{ msg }}</h1>
    </section>
</template>
<script>
export default {
    name: 'Msg',
    computed: {
        msg() {
            const userStatus = this.$store.getters.userStaus;
            const currStage = this.$store.getters.currStage;
            if (userStatus === 'happy') {
                return 'תודה רבה ויום נעים';
            } else if ((userStatus === 'neutral' || userStatus === 'dissapointed') && currStage === 2) {
                return 'אנו מתנצלים על חוויתך...';
            } else if ((userStatus === 'neutral' || userStatus === 'dissapointed') && currStage === 4) {
                return `אנו מתנצלים על חוויתך...
                    נציג יצור איתך קשר בזמן הקרוב
                    `
            }

        }
    }
}
</script>
