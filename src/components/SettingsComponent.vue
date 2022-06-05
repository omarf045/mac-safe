<template>
    <div>
        <div class="flex-1 flex items-stretch overflow-hidden">
            <main class="flex-1 overflow-y-auto">
                <!-- Primary column -->
                <section aria-labelledby="primary-heading" class="min-w-0 flex-1 h-full flex flex-col lg:order-last">
                    <h1 id="primary-heading" class="sr-only">Photos</h1>
                    <!-- Your content -->
                    Main
                    <!-- End main content -->
                </section>
            </main>

            <!-- Secondary column (hidden on smaller screens) -->
            <aside class="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block">
                <!-- Your content -->
                Secondary
                <!-- End secondary content -->
            </aside>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
