<template>
  <train-number-page
    :title="title"
    :source="source"
  >
  </train-number-page>
</template>

<script lang="ts">
import TrainNumberPage from '~/components/pages/train-number/TrainNumberPage';
import contentSource from '~/assets/train-number/2020-03-14.md?raw';

export default defineNuxtComponent({
  name: 'TrainNumber20200314Page',
  components: {
    TrainNumberPage,
  },
  setup () {
    const title = ref<string>('2020年3月14日 改正');
    const source = computed<string>(() => contentSource);

    return {
      title,
      source,
    };
  },
});
</script>
