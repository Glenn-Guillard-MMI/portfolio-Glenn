<template>
  <header>
    <div>
      <h1 class="pres">Glenn <br />Guillard</h1>
      <h2 class="pres">Développeur web</h2>
    </div>
    <img
      id="eiffelTower"
      src="../static/images/tour-eiffel-2.png"
      alt="Tour Eiffel"
    />
  </header>
</template>
<script setup lang="ts">
const { $gsap } = useNuxtApp();

onMounted(() => {
  $gsap.from(".pres", {
    duration: 3.5,
    opacity: 0,
    y: 150,
    ease: "power4.out",
  });

  $gsap.from("#eiffelTower", {
    duration: 2,
    opacity: 0,
    ease: "bounce.out",
  });
});
</script>
