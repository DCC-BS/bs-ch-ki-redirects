<script setup lang="ts">
const props = defineProps<{
    appName: string;
}>();
</script>

<template>
    <div class="container">
        <div>
            <h1 class="h1 text-primary-600 hyphens-auto text-balance mb-20">Sie haben keinen Zugriff auf {{ props.appName }}
            </h1>
            <div class="ck-content hyphens-auto lg:hyphens-none">
                <p>
                    Sie versuchen, auf {{ props.appName }} zuzugreifen, die momentan ausschliesslich für Mitarbeitende der
                    <strong>Verwaltung des Kantons Basel-Stadt</strong> verfügbar ist. Ein Zugriff von extern ist
                    zurzeit
                    nicht möglich.
                </p>
            </div>


            <h2 class="h2 my-20">Quellcode ist verfügbar</h2>
            <div class="ck-content hyphens-auto lg:hyphens-none">
                <p>
                    Wir möchten Ihnen dennoch die Möglichkeit geben, die Applikation kennenzulernen. Der Quellcode ist
                    öffentlich auf dem <a href="https://github.com/DCC-BS" target="_blank"><strong>GitHub-Konto des DCC Data Competence Center</strong></a> unter der <strong>MIT-Lizenz</strong> verfügbar. Sie
                    können
                    ihn dort einsehen und herunterladen.
                </p>
                <a href="https://github.com/DCC-BS" target="_blank" class="github-link">Zum GitHub-Repository</a>
            </div>
            <h2 class="h2 my-20">Haben Sie Fragen?</h2>
            <div class="ck-content hyphens-auto lg:hyphens-none">
                <p>
                    Sollten Sie Fragen oder Anregungen haben, können Sie uns jederzeit per E-Mail unter
                    <a href="mailto:dcc@bs.ch"><strong>dcc@bs.ch</strong></a> kontaktieren. Wir freuen uns auf Ihre Nachricht! 📨
                </p>
            </div>
        </div>
    </div>
</template>

<style>
.mt-2 {
    margin-top: 0.5rem;
}
</style>