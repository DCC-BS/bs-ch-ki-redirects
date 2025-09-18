<script setup lang="ts">
import videoSrc from "@/assets/404.WeNjJPA6.mp4"

</script>

<template>
    <main>
        <div>
            <div tag="div"
                class="border-b border-b-gray-400 bg-white transition ease-in-out duration-250 z-app-top will-change-transform top-0 sticky">
                <div>
                    <header class="page-header grid items-center relative container is-wide">
                        <h1 class="sr-only">Hauptnavigation</h1>
                        <div class="flex items-center grid-area-l relative z-30"><a
                                class="nuxt-link-exact-active inline-block hover:opacity-80"
                                href="https://www.bs.ch/schwerpunkte/daten/databs/schwerpunkte/kuenstliche-intelligenz">
                                <div
                                    class="flex whitespace-nowrap leading-none relative text-base lg:text-lg xl:text-2xl">
                                    <span class="h-[1.2083em] ml-[0.3em] pl-[0.25em] leading-[1.2em] font-bold"><span
                                            class="sr-only">Herausgeber/Éditeur/Editore/Publisher:</span> Kanton
                                        Basel-Stadt </span>
                                </div><span class="sr-only"> (Dieser Link führt zur
                                    Startseite) </span>
                            </a></div>
                    </header>
                </div>
            </div>
            <div
                class="relative flex items-end justify-center overflow-hidden h-[calc(100vh-var(--page-header-height))]">
                <h1 class="container relative z-30 w-full text-white text-5xl font-bold mb-40">Die Seite, die Sie
                    suchen, existiert anscheinend nicht.</h1><video loop="true" muted="true"
                    class="motion-reduce:hidden absolute z-10 w-auto min-w-full min-h-full object-cover"
                    aria-hidden="true" autoplay="true">
                    <source :src="videoSrc" type="video/mp4">
                </video>
            </div>
        </div>
    </main>
</template>