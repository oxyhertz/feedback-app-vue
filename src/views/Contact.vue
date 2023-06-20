<template>
    <section class="contact-container">
        <h1>
            האם נציג מוקד קשרי לקוחות יכול ליצור עמך קשר על מנת לסייע לך בפתרון הבעיה
            <span>?</span>
        </h1>
        <div class="buttons">
            <button class="btn-yes" @click="$router.push('/form')">
                <h1>כן</h1>
            </button>
            <button class="btn-no" @click="$router.push('/msg')">
                <h1>לא</h1>
            </button>
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
