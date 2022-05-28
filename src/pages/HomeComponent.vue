<template>
  <div>
    <div class="py-10">
      <header>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">Home</h1>
        </div>
      </header>
      <main>
        <div class="min-h-full">
          <main class="mt-8 pb-8">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 class="sr-only">MacSafe</h1>
              <!-- Main 3 column grid -->
              <div
                class="
                  grid grid-cols-1
                  gap-4
                  items-start
                  lg:grid-cols-3 lg:gap-8
                "
              >
                <!-- Left column -->
                <div class="grid grid-cols-1 gap-4 lg:col-span-2">
                  <section aria-labelledby="section-1-title">
                    <h2 class="sr-only" id="section-1-title">Section title</h2>
                    <div class="rounded-lg bg-white overflow-hidden shadow">
                      <div class="p-6">HELLO WORLD</div>
                    </div>
                  </section>
                </div>

                <!-- Right column -->
                <div class="grid grid-cols-1 gap-4">
                  <section aria-labelledby="section-2-title">
                    <h2 class="sr-only" id="section-2-title">Section title</h2>
                    <div class="rounded-lg bg-white shadow">
                      <div class="p-6">
                        <NameInput />
                        <FolderSelectMenu />
                        <FileUploadInput />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import FolderSelectMenu from "./components/FolderSelectMenu.vue";
import NameInput from "./components/NameInput.vue";
import FileUploadInput from "./components/FileUploadInput.vue";

export default {
  components: {
    FolderSelectMenu,
    NameInput,
    FileUploadInput,
    FileUploadInput,
  },
};
</script>

<style>
</style>