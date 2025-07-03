<template>
  <header
    class="relative overflow-hidden bg-gradient-to-r from-[#3c893f] to-[#deefdf]"
    id="home"
  >
    <article
      class="max-w-screen-xl mx-auto px-4 sm:px-8 py-16 md:py-28 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20"
    >
      <!-- Slider Content -->
      <section class="w-full lg:w-1/2 text-center lg:text-left">
        <hgroup data-aos="fade-up" data-aos-delay="600">
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
          >
            Enhance Your Natural
            <mark class="text-green-700 bg-transparent">Today</mark>
          </h1>
          <p
            class="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, itaque
            consequuntur quidem delectus doloremque id sapiente numquam a nemo
            earum iusto alias at in. Aliquid ratione eos quis ut at?
          </p>
        </hgroup>
        <!-- CTA Buttoon -->
        <nav
          data-aos="fade-up"
          data-aos-delay="600"
          class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12"
        >
          <a
            href="#jobapply"
            class=" bg-green-600 hover:bg-green-700 text-white text-center px-8 py-3 rounded-full transition shadow-lg"
          >
            Book a Consultation
          </a>
          <a href="#services"
          class="border border-green-700 text-green-950 hover:bg-green-50 text-center px-8 py-3 rounded-full transition" aria-label="Explore our services">
          Explore Services
          </a>
        </nav>

        <!-- Stats Section -->
        <aside data-aos="fade-up" data-aos-delay="700" class="py-4">
            <ul class="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4 text-center">
                <li v-for="(stat,index) in stats" :key="index" class="w-1/2 sm:w-auto">
                <strong class="text-2xl font-bold text-green-900">{{ stat.value }}</strong>
                <small class="block text-sm  text-gray-600">{{ stat.label }}</small>
                </li>
            </ul>
        </aside>
      </section>

      <!-- Slider Image -->
      <figure data-aos="fade-up" data-aos-delay="800" class="w-full lg:w-1/2 flex justify-center relative">
            <div class="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                <span class="bg-green-500 rounded-full w-64 g-64 sm:w-80 sm:h-80 absolute -top-10 -left-10 opacity-2" 
                aria-hidden="true">
                </span>
                <img src="@assets/slider2.jpeg" alt="Overseas Employment Agency" class="relative z-10 rounded-full shadow-2xl w-full object-cover" width="600" height="400" loading="eager"/>

            </div>
      </figure>
    </article>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const stats = ref([
    {value:'2500+', label:'Happy Clients'},
    {value:'15+', label:'Countries'},
    {value:'50+', label:'Categories'},
    {value:'15+', label:'Years'},
]);
</script>

<style></style>
