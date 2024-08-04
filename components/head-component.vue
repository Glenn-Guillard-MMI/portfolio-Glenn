<template>
  <header>
    <div>
      <h1 class="pres">Glenn <br />Guillard</h1>
      <h2 class="pres">Développeur web</h2>
      <div id="buttons-in-header">
        <a
          class="link-image-title"
          href="https://fr.linkedin.com/in/glenn-guillard-08204724a"
          target="_blank"
        >
          <img src="../static/images/LinkedIn.svg" alt="LinkedIn" />Linkdin
        </a>
        <a
          class="link-image-title"
          href="https://github.com/Glenn-Guillard-MMI"
          target="_blank"
        >
          <img src="../static/images/GitHub.svg" alt="github" />Github
        </a>
      </div>
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

  $gsap.from("#buttons-in-header", {
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
