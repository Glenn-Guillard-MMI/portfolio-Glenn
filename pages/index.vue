<template>
  <html>
    <HeadComponent></HeadComponent>
    <div id="chevron">
      <img
        id="chvr1"
        alt="icon chevron first"
        src="/static/images/Chevron-Down.svg"
      />
      <img
        id="chvr2"
        alt="icon chevron second"
        src="/static/images/Chevron-Down.svg"
      />
    </div>
    <main>
      <AboutComponent></AboutComponent>
    </main>
  </html>
</template>

<script setup lang="ts">
import AboutComponent from "~/components/about-component.vue";

const { $gsap } = useNuxtApp();
onMounted(() => {
  $gsap.from("#chevron", {
    opacity: 0,
    duration: 2,

    y: 150,
    ease: "linear",
  });

  $gsap.fromTo(
    "#chvr1",
    {
      opacity: 0,
      duration: 1,
    },
    {
      opacity: 1,
      duration: 1,
      delay: 2,
      repeat: -1,
      yoyo: true,
    }
  );

  $gsap.fromTo(
    "#chvr2",
    {
      opacity: 0,
      duration: 1,
    },
    {
      opacity: 1,
      duration: 1,
      delay: 2.25,
      repeat: -1,
      yoyo: true,
    }
  );
});
</script>
