<template>
    <section class="contact-form">

        <h1>השארת פרטים</h1>
        <form @submit.prevent="sendForm">
            <div>
                <input type="text" placeholder="שם פרטי">
            </div>
            <div>
                <input type="text" placeholder="שם משפחה">
            </div>
            <div>
                <input type="text" placeholder="מספר טלפון">
            </div>
            <button>שלח</button>
        </form>
    </section>
</template>
<script>
export default {
    name: '',
    created() {
        this.$store.commit({ type: 'setCurrStage', stage: 3 });
    },
    methods: {
        sendForm() {
            this.$router.push('/msg');
            this.$store.commit({ type: 'setCurrStage', stage: 4 });

        },
    },
}
</script>
