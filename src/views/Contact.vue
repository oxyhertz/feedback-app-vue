<template>
    <section class="contact-container">
        <h1>
            האם נציג מוקד קשרי לקוחות יכול ליצור עמך קשר?
        </h1>
        <div class="buttons">
            <button class="btn-yes" @click="$router.push('/form')">כן</button>
            <button class="btn-no" @click="$router.push('/msg')">לא</button>
        </div>
    </section>
</template>
<script>
export default {
    name: '',
    created() {
        this.$store.commit({ type: 'setCurrStage', stage: 2 });
    },
}
</script>
