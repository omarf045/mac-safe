<template>
  <div class="overflow-y-auto">
    <div class="flex-1 flex items-stretch overflow-hidden">
      <main class="flex-1 overflow-y-auto">
        <!-- Primary column -->
        <div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex">
            <h1 class="flex-1 text-2xl font-bold text-gray-900">Trash</h1>
            <div class="ml-6 p-0.5 rounded-lg flex items-center">
              <p
                class="
                  block
                  text-sm
                  font-medium
                  text-gray-500
                  pointer-events-none
                "
              >
                {{ trash.length }} photo(s)
              </p>
            </div>
          </div>

          <!-- Tabs -->
          <!--
          <div class="mt-3 sm:mt-2">
            <div class="sm:hidden">
              <label for="tabs" class="sr-only">Select a tab</label>
              <!- - Use an "onChange" listener to redirect the user to the selected tab URL. - ->
              <select
                id="tabs"
                name="tabs"
                class="
                  block
                  w-full
                  pl-3
                  pr-10
                  py-2
                  text-base
                  border-gray-300
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500
                  sm:text-sm
                  rounded-md
                "
              >
                <option selected="">Recently Viewed</option>
                <option>Recently Added</option>
                <option>Favorited</option>
              </select>
            </div>
            <div class="hidden sm:block">
              <div class="flex items-center border-b border-gray-200">
                <nav
                  class="flex-1 -mb-px flex space-x-6 xl:space-x-8"
                  aria-label="Tabs"
                >
                  <a
                    v-for="tab in tabs"
                    :key="tab.name"
                    :href="tab.href"
                    :aria-current="tab.current ? 'page' : undefined"
                    :class="[
                      tab.current
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                      'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                    ]"
                  >
                    {{ tab.name }}
                  </a>
                </nav>
                <div
                  class="
                    hidden
                    ml-6
                    bg-gray-100
                    p-0.5
                    rounded-lg
                    items-center
                    sm:flex
                  "
                >
                  <button
                    type="button"
                    class="
                      p-1.5
                      rounded-md
                      text-gray-400
                      hover:bg-white hover:shadow-sm
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-blue-500
                    "
                  >
                    <ViewListIcon class="h-5 w-5" aria-hidden="true" />
                    <span class="sr-only">Use list view</span>
                  </button>
                  <button
                    type="button"
                    class="
                      ml-0.5
                      bg-white
                      p-1.5
                      rounded-md
                      shadow-sm
                      text-gray-400
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-blue-500
                    "
                  >
                    <ViewGridIconSolid class="h-5 w-5" aria-hidden="true" />
                    <span class="sr-only">Use grid view</span>
                  </button>
                </div>
              </div>
            </div>
          </div>-->

          <!-- Gallery -->
          <section class="mt-8 pb-16" aria-labelledby="gallery-heading">
            <!--<h2 id="gallery-heading" class="sr-only">Recently viewed</h2>-->
            <ul
              role="list"
              class="
                grid grid-cols-2
                gap-x-4 gap-y-8
                sm:grid-cols-3 sm:gap-x-6
                md:grid-cols-4
                lg:grid-cols-3
                xl:grid-cols-4 xl:gap-x-8
              "
            >
              <li v-for="file in trash" :key="file.name" class="relative">
                <div
                  :class="[
                    'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-blue-500',
                    'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden',
                  ]"
                >
                  <img
                    :src="file.source"
                    alt=""
                    :class="[
                      file.current ? '' : 'group-hover:opacity-75',
                      'object-cover pointer-events-none',
                    ]"
                  />
                  <button
                    type="button"
                    class="absolute inset-0 focus:outline-none"
                  >
                    <span class="sr-only"
                      >View details for {{ file.name }}</span
                    >
                  </button>
                </div>
                <p
                  class="
                    mt-2
                    block
                    text-sm
                    font-medium
                    text-gray-900
                    truncate
                    pointer-events-none
                  "
                >
                  {{ file.name }}
                </p>
                <p
                  class="
                    block
                    text-sm
                    font-medium
                    text-gray-500
                    pointer-events-none
                  "
                >
                  {{ file.size }}
                </p>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>


<script>
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  MenuAlt2Icon,
  PlusSmIcon as PlusSmIconOutline,
  XIcon,
} from "@heroicons/vue/outline";
import {
  PlusSmIcon as PlusSmIconSolid,
  SearchIcon,
  ViewGridIcon as ViewGridIconSolid,
  ViewListIcon,
} from "@heroicons/vue/solid";

import { mapState, mapMutations } from "vuex";

/*const tabs = [
  { name: "Recently Viewed", href: "#", current: true },
  { name: "Recently Added", href: "#", current: false },
  { name: "Favorited", href: "#", current: false },
];*/

export default {
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    MenuAlt2Icon,
    PlusSmIconOutline,
    PlusSmIconSolid,
    SearchIcon,
    ViewGridIconSolid,
    ViewListIcon,
    XIcon,
  },
  /////////////////////////////////////
  computed: {
    ...mapState(["trash"]),
  },
  methods: {
    ...mapMutations([""]),
  },
  /////////////////////////////////////
  setup() {
    return {
      //tabs,
      //files,
    };
  },
};
</script>