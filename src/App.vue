<script setup lang="ts">
import { onMounted, ref } from "vue";
import NoAccess from "./components/NoAccess.vue";
import PageNotFound from "./components/PageNotFound.vue";
import Redirect from "./components/Redirect.vue";
import { config } from "./config";

const currentPath = ref(window.location.pathname.split("/").pop() || "");
const appName = ref("");

const notFound = ref(false);
const redirect = ref(false);
const noAccess = ref(false);

const redirectConfig = config.redirects.find((x) =>
    x.relativePath.includes(currentPath.value),
);

async function tryFetch(url: string) {
    try {
        const response = await fetch(url, { method: "GET" });
        return response.ok;
    } catch (error) {
        return false;
    }
}

onMounted(async () => {
    if (!currentPath.value || currentPath.value.length === 0) {
        window.location.href = config.homepageUrl;
        return;
    }

    if(currentPath.value === "redirect") {
        await new Promise(resolve => setTimeout(resolve, 1000));
        redirect.value = true;
        return;
    }

    if (redirectConfig) {
        appName.value = redirectConfig.appName;

        const result = await tryFetch(redirectConfig.checkUrl);

        if (result) {
            redirect.value = true;
            window.location.href = redirectConfig.to;
        } else {
            noAccess.value = true;
        }
    } else {
        notFound.value = true;
    }
});
</script>

<template>
    <div>
        <div v-if="notFound">
            <PageNotFound />
        </div>
        <div v-else-if="redirect">
            <Redirect :to="redirectConfig?.to || ''" :appName="redirectConfig?.appName ?? ''" />
        </div>
        <div v-else-if="noAccess">
            <NoAccess :appName="redirectConfig?.appName ?? ''" />
        </div>
        <div v-else class="container container-center flex flex-col">
            <div class="loader"></div>
        </div>
    </div>
</template>

<style>
.loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
    display: inline-block;
    margin-left: 10px;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>