<template>
  <div class="container">
    <h1 class="title" v-text="title">
    </h1>

    <p class="subtitle" v-text="description">
    </p>

    <links-menu :links="trainNumberContentPageLinks" class="mt-5">
    </links-menu>
  </div>
</template>

<script lang="ts">
import LinksMenu from '~/components/ui/LinksMenu';
import type { Link } from '~/types';

export default defineNuxtComponent({
  head: {},
  setup () {
    const title = ref<string>('列車番号メモ');
    const description = ref<string>('入出場，車輪転削などの予定臨や，パターンが概ね決まっている臨工や臨単の列車番号のメモ．');
    const trainNumberContentPageLinks = ref<Link[]>([
      {
        title: '2018年3月17日 改正',
        to: '/train-number/2018-03-17',
      },
      {
        title: '2019年3月16日 改正',
        to: '/train-number/2019-03-16',
      },
      {
        title: '2020年3月14日 改正',
        to: '/train-number/2020-03-14',
      },
      {
        title: '2021年3月13日 改正',
        to: '/train-number/2021-03-13',
      },
    ]);

    useHead(() => ({
      title: title.value,
      meta: [
        { name: 'description', content: description.value },
        { property: 'og:title', content: title.value },
        { property: 'og:description', content: description.value },
      ],
    }));

    return {
      title,
      description,
      trainNumberContentPageLinks,
    };
  },
  components: {
    LinksMenu,
  },
});
</script>
