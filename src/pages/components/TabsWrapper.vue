<script setup>
import { useSlots, ref, provide } from "vue";
const slots = useSlots();
const tabTitles = ref(slots.default().map((tab) => tab.props.title));
const selectedTitle = ref(tabTitles.value[0]);
provide("selectedTitle", selectedTitle);
</script>

<template>
  <div class="tabs border-b border-gray-200">
    <ul class="tabs-header -mb-px flex space-x-8">
      <li
        v-for="title in tabTitles"
        :key="title"
        :class="[
          selectedTitle === title
            ? 'border-indigo-500 text-indigo-600'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
          'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
          'tabs-item cursor-pointer',
        ]"
        @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>

    <slot />
  </div>
</template>

<style>
</style>