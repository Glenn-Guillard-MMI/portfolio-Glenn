<template>
  <section id="about">
    <h3>{{ $t("about.title") }}</h3>
    <div id="card-profil">
      <div class="prentation">
        <h4>
          <span class="text-full">Glenn</span>
          <span class="text-stoke"> Guillard</span>
        </h4>
        <h5 v-html="$t('about.actifFunction')"></h5>

        <p id="descript" v-html="$t('about.descript')"></p>
      </div>
    </div>
  </section>
</template>
