<template>

    <InnerPageHero imageUrl="/images/image-3.jpg" title="Contact Us" />



    <div class="container mx-auto py-8 sm:py-12 px-4 sm:px-0">
        <div class="grid sm:grid-cols-3 sm:gap-4">
            <div><span class="text-gray-600">Address : </span> Lorem Ipsum</div>
            <div><span class="text-gray-600">Phone : </span> +6280000</div>
            <div><span class="text-gray-600">Email : </span> info@afvofficial.com</div>
        </div>

        <div class="mt-8 sm:mt-16 grid sm:grid-cols-2 gap-8 sm:gap-12">
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32658806.600958798!2d99.46167851319343!3d-2.276034755635573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sid!2sid!4v1670642597823!5m2!1sid!2sid"
                    class="w-full" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <form class="p-8 bg-gray-300 shadow rounded space-y-4">
                <div>
                    <input type="text" placeholder="Enter Name"
                        class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200 required">
                    <!-- <span class="text-red-600 text-sm">The Error Message</span> -->
                </div>

                <div>
                    <input type="emai" placeholder="Enter Email"
                        class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200 required">
                    <!-- <span class="text-red-600 text-sm">The Error Message</span> -->
                </div>

                <div>
                    <input type="phone" placeholder="Phone Number"
                        class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200 required">
                    <!-- <span class="text-red-600 text-sm">The Error Message</span> -->
                </div>

                <div>
                    <textarea placeholder="Enter Message"
                        class="px-4 py-2 w-full order focus:border-primary focus:outline-none rounded bg-gray-200"
                        rows="5" required></textarea>
                    <!-- <span class="text-red-600 text-sm">The Error Message</span> -->
                </div>

                <!-- <div class="px-4 py-2 bg-red-600 text-white rounded">
                    Lorem ipsum dolor sit amet.
                </div> -->

                <!-- <div class="px-4 py-2 bg-green-600 text-white rounded">
                    Lorem ipsum dolor sit amet.
                </div> -->

                <button class="px-4 py-2 sm:px-6 bg-primary text-white rounded focus:outline-none">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import InnerPageHero from '@/components/InnerPageHero.vue';

export default {
    components: {
        InnerPageHero
    }
}
</script>

<style>

</style>