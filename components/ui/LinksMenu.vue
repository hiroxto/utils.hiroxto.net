<template>
  <aside class="menu">
    <p class="menu-label" v-text="props.label">
    </p>

    <ul class="py-1 list-unstyled fw-normal small">
      <li
        v-for="(link, linksKey) in props.links"
        :key="linksKey"
      >
        <nuxt-link
          :to="link.to"
          :title="link.title"
          class="ml-5 py-2 transition-colors duration-200 relative flex items-center flex-wrap hover:text-gray-900 text-gray-500 hover:bg-slate-100"
        >
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import type { Link } from '~/types';

interface Props {
  links: Link[]
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: 'pages',
});
</script>
