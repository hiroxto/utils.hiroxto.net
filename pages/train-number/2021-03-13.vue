<template>
  <train-number-page
    :title="title"
    :source="source"
  >
  </train-number-page>
</template>

<script lang="ts">
import TrainNumberPage from '~/components/pages/train-number/TrainNumberPage';
import contentSource from '~/assets/train-number/2021-03-13.md?raw';

export default defineNuxtComponent({
  name: 'TrainNumber20210313Page',
  components: {
    TrainNumberPage,
  },
  setup () {
    const title = ref<string>('2021年3月13日 改正');
    const source = computed<string>(() => contentSource);

    return {
      title,
      source,
    };
  },
});
</script>
