<template>

    <InnerPageHero imageUrl="/images/image-5.jpg" title="Article Title" />

    <div class="container mx-auto px-4 sm:px-0 py-8 sm:py-20">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between">

            <div class="flex items-center text-gray-700">
                <div>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z">
                        </path>
                    </svg>
                </div>
                <div class="ml-1">Category Name</div>
            </div>

            <div class="mt-2 sm:mt-0 text-sm flex items-center text-gray-700">
                <div>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <div class="ml-1">
                    Desember 10th, 2022
                </div>
            </div>

        </div>

        <div class="mt-4 sm:mt-16">
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat maxime rerum nesciunt atque
                itaque nostrum aliquid. Perspiciatis suscipit voluptates quia eligendi dicta aspernatur nobis nostrum!
                Perspiciatis magnam labore odio dolorem mollitia, fuga corporis ratione culpa nobis nisi accusamus at?
                Quisquam possimus ex pariatur cum sequi quasi nihil! Illo, quam.
            </p>
            <p class="mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat maxime rerum nesciunt atque
                itaque nostrum aliquid. Perspiciatis suscipit voluptates quia eligendi dicta aspernatur nobis nostrum!
                Perspiciatis magnam labore odio dolorem mollitia, fuga corporis ratione culpa nobis nisi accusamus at?
                Quisquam possimus ex pariatur cum sequi quasi nihil! Illo, quam.
            </p>
        </div>

    </div>

</template>

<script>
import InnerPageHero from '@/components/InnerPageHero.vue';

export default {
    components: {
        InnerPageHero,
    }
}
</script>

<style>

</style>