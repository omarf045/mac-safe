<template>
  <div class="justify-center">
    <div class="py-10">
      <header>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">Home</h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-6 sm:px-0">
            <!-- content -->
            <div>
              <TabsWrapper aria-label="Tabs">
                <TabItem title="Test Photo">
                  <div class="rounded-lg bg-white overflow-hidden shadow">
                    <div>
                      <div class="p-6 bg-gray-50">
                        <FolderSelectMenu />
                        <FileUploadInput padding="pb-14 pt-16" />
                        <SubmitButton />
                      </div>
                    </div>
                  </div>
                </TabItem>
                <TabItem title="Add Photo">
                  <div class="rounded-lg bg-white overflow-hidden shadow">
                    <div>
                      <div class="p-6 bg-gray-50">
                        <NameInput />
                        <FolderSelectMenu />
                        <FileUploadInput padding="pb-14 pt-16" />
                        <SubmitButton />
                      </div>
                    </div></div
                ></TabItem>
              </TabsWrapper>
            </div>
            <!-- ends content -->
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import FolderSelectMenu from "./components/FolderSelectMenu.vue";
import NameInput from "./components/NameInput.vue";
import FileUploadInput from "./components/FileUploadInput.vue";
import TabsWrapper from "./components/TabsWrapper.vue";
import TabItem from "./components/TabItem.vue";
import SubmitButton from "./components/SubmitButton.vue";

import { mapState } from "vuex";

export default {
  components: {
    FolderSelectMenu,
    NameInput,
    FileUploadInput,
    TabItem,
    TabsWrapper,
    SubmitButton,
  },
  computed: {
    ...mapState(["tabs"]),
  },
  setup() {
    return {};
  },
};
</script>

<style>
</style>