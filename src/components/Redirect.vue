<script setup lang="ts">

const props = defineProps<{
    to: string;
    appName: string;
}>();

</script>

<template>
    <div class="container text-center">
        <div class="lead mt-30 hyphens-auto lg:hyphens-none text-pretty">Sie werden weitergeleitet zu {{ props.appName
            }}. Falls die Weiterleitung nicht funktioniert, klicken Sie bitte <a :href="to" class="link underline"> hier</a>.</div>
    </div>
</template>

<style>

</style>