<template>
    <BaseLayout>
        <p>Registration form</p>
    </BaseLayout>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BaseLayout from '@/layouts/BaseLayout.vue';

@Options({
    components: {
        BaseLayout,
    },
})
export default class RegistrationPage extends Vue {}
</script>