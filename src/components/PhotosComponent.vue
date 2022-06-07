<template>
  <div class="overflow-y-auto">
    <div class="flex-1 flex items-stretch overflow-hidden">
      <main class="flex-1 overflow-y-auto">
        <!-- Primary column -->
        <div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex">
            <h1 class="flex-1 text-2xl font-bold text-gray-900">Photos</h1>
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
                {{ photos.length }} photo(s)
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
              <li
                v-for="(file, index) in photos"
                :key="file.name"
                class="relative"
                @click="changeCurrentPhoto(index)"
              >
                <div
                  :class="[
                    file.current
                      ? 'ring-2 ring-offset-2 ring-blue-500'
                      : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-blue-500',
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

      <!-- Secondary column (hidden on smaller screens) -->
      <aside
        class="
          hidden
          w-96
          bg-white
          p-8
          border-l border-gray-200
          overflow-y-auto
          lg:block
        "
      >
        <div class="pb-16 space-y-6">
          <div>
            <div
              class="
                block
                w-full
                aspect-w-10 aspect-h-7
                rounded-lg
                overflow-hidden
              "
            >
              <img :src="currentFile.source" alt="" class="object-cover" />
            </div>
            <div class="mt-4 flex items-start justify-between">
              <div>
                <h2 class="text-lg font-medium text-gray-900">
                  <span class="sr-only">Details for </span
                  >{{ currentFile.name }}
                </h2>
                <p class="text-sm font-medium text-gray-500">
                  {{ currentFile.size }}
                </p>
              </div>
              <!-- Heart button-->
              <!--<button
                type="button"
                class="
                  ml-4
                  bg-white
                  rounded-full
                  h-8
                  w-8
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:bg-gray-100 hover:text-gray-500
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                "
              >
                <HeartIcon class="h-6 w-6" aria-hidden="true" />
                <span class="sr-only">Favorite</span>
              </button>-->
            </div>
          </div>

          <!-- Information -->
          <div>
            <h3 class="font-medium text-gray-900">Information</h3>
            <dl
              class="
                mt-2
                border-t border-b border-gray-200
                divide-y divide-gray-200
              "
            >
              <div
                v-for="key in Object.keys(currentFile.information)"
                :key="key"
                class="py-3 flex justify-between text-sm font-medium"
              >
                <dt class="text-gray-500">{{ key }}</dt>
                <dd class="text-gray-900">
                  {{ currentFile.information[key] }}
                </dd>
              </div>
            </dl>
          </div>
          <!-- Image description -->
          <!--<div>
            <h3 class="font-medium text-gray-900">Description</h3>
            <div class="mt-2 flex items-center justify-between">
              <p class="text-sm text-gray-500 italic">
                Add a description to this image.
              </p>
              <button
                type="button"
                class="
                  bg-white
                  rounded-full
                  h-8
                  w-8
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:bg-gray-100 hover:text-gray-500
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                "
              >
                <PencilIcon class="h-5 w-5" aria-hidden="true" />
                <span class="sr-only">Add description</span>
              </button>
            </div>
          </div>-->

          <!-- Shared with -->
          <div>
            <h3 class="font-medium text-gray-900">Shared with</h3>
            <ul
              role="list"
              class="
                mt-2
                border-t border-b border-gray-200
                divide-y divide-gray-200
              "
            >
              <li
                v-for="person in currentFile.sharedWith"
                :key="person.id"
                class="py-3 flex justify-between items-center"
              >
                <div class="flex items-center">
                  <img
                    :src="blankProfile"
                    alt=""
                    class="w-8 h-8 rounded-full"
                  />
                  <p class="ml-4 text-sm font-medium text-gray-900">
                    {{ person.name }}
                  </p>
                </div>
                <button
                  type="button"
                  class="
                    ml-6
                    bg-white
                    rounded-md
                    text-sm
                    font-medium
                    text-blue-600
                    hover:text-blue-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-blue-500
                  "
                >
                  Download<span class="sr-only"> {{ person.name }}</span>
                </button>
              </li>
              <li class="py-2 flex justify-between items-center">
                <button
                  type="button"
                  class="
                    group
                    -ml-1
                    bg-white
                    p-1
                    rounded-md
                    flex
                    items-center
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                >
                  <span
                    class="
                      w-8
                      h-8
                      rounded-full
                      border-2 border-dashed border-gray-300
                      flex
                      items-center
                      justify-center
                      text-gray-400
                    "
                  >
                    <PlusSmIconSolid class="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span
                    class="
                      ml-4
                      text-sm
                      font-medium
                      text-blue-600
                      group-hover:text-blue-500
                    "
                    >Share</span
                  >
                </button>
              </li>
            </ul>
          </div>

          <!-- Leak Discover -->
          <div>
            <h3 class="font-medium text-gray-900">Leaked photo?</h3>
            <ul
              role="list"
              class="
                mt-2
                border-t border-b border-gray-200
                divide-y divide-gray-200
              "
            >
              <li class="py-2 justify-between items-center">
                <div class="sm:col-span-6">
                  <div
                    class="
                      mt-1
                      flex
                      justify-center
                      px-6
                      pt-5
                      pb-6
                      border-2 border-gray-300 border-dashed
                      rounded-md
                      w-full
                    "
                  >
                    <div class="space-y-1 text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          class="
                            relative
                            cursor-pointer
                            bg-white
                            rounded-md
                            font-medium
                            text-blue-600
                            hover:text-blue-500
                            focus-within:outline-none
                            focus-within:ring-2
                            focus-within:ring-offset-2
                            focus-within:ring-blue-500
                          "
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            class="sr-only"
                          />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div class="pt-4 pb-1">
                  <div class="flex justify-end">
                    <button
                      type="submit"
                      class="
                        ml-3
                        inline-flex
                        justify-center
                        py-2
                        px-4
                        border border-transparent
                        shadow-sm
                        text-sm
                        font-medium
                        rounded-md
                        text-white
                        bg-blue-600
                        hover:bg-blue-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-blue-500
                      "
                    >
                      Discover
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="flex">
            <button
              type="button"
              class="
                flex-1
                ml-3
                bg-white
                py-2
                px-4
                border border-gray-300
                rounded-md
                shadow-sm
                text-sm
                font-medium
                text-gray-700
                hover:bg-gray-50
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-blue-500
              "
            >
              Delete
            </button>
          </div>
        </div>
      </aside>
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
  //HeartIcon,
  MenuAlt2Icon,
  PlusSmIcon as PlusSmIconOutline,
  XIcon,
} from "@heroicons/vue/outline";
import {
  PencilIcon,
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

/*const currentFile = {
  name: "IMG_4985.HEIC",
  size: "3.9 MB",
  source:
    "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  information: {
    Created: "June 8, 2020",
    "Last modified": "June 8, 2020",
    Dimensions: "4032 x 3024",
  },
  sharedWith: [
    {
      id: 1,
      name: "Aimee Douglas",
    },
    {
      id: 2,
      name: "Andrea McMillan",
    },
  ],
};*/

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
    //HeartIcon,
    MenuAlt2Icon,
    PencilIcon,
    PlusSmIconOutline,
    PlusSmIconSolid,
    SearchIcon,
    ViewGridIconSolid,
    ViewListIcon,
    XIcon,
  },
  /////////////////////////////////////
  computed: {
    ...mapState(["photos", "currentFile"]),
  },
  methods: {
    ...mapMutations(["changeCurrentPhoto", "currentPhotoAtStart"]),
  },
  //////////////////////////////////////
  setup() {
    return {
      //tabs,
      //files,
      //currentFile,
    };
  },
  created() {
    this.currentPhotoAtStart();
  },
  data() {
    return {
      blankProfile:
        "data:image/png;base64,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",
    };
  },
};
</script>