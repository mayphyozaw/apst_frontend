<template>
  <header
    class="bg-gradient-to-r  from-[#deefdf] to-[#3c893f] sticky top-0 z-50"
  >
    <div
      class="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center"
    >
      <!-- Logo -->
      <a
        href="/"
        class="flex items-center focus:outline-none focus:ring-2 focus:ring-green-800 rounded"
      >
        <h2 class="text-2xl font-bold text-[#2e6130]">
          Aung Pann Si Tho Co.,Ltd
        </h2>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6" aria-label="Primary navigation">
        <a
          v-for="(link, index) in navlinks"
          :key="index"
          :href="link.href"
          class="text-green-900 hover:text-yellow-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-800 rounded"
          >{{ link.label }}</a
        >
      </nav>

      <!-- Appointment / JobApply Button (Desktop)  -->
      <div class="hidden md:block">
        <a
          href="#jobapply"
          class="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
        >
          Job Application Form
        </a>
      </div>
      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-green-800 rounded"
        @click="toggleMenu"
        aria-label="Toggle menu"
        :aria-expanded="isMenuOpen.toString()"
        aria-controls="mobile-menu"
      >
        <Icon :icon="isMenuOpen ? 'mdi:close' : 'mdi:menu'" class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <aside
      v-if="isMenuOpen"
      id="mobile-menu"
      class="md:hidden bg-white shadow-lg py-4 px-4 absolute top-full left-0 right-0 z-40"
      aria-label="Mobile Menu"
    >
      <nav aria-label="Mobile Navigation">
        <ul class="flex flex-col space-y-4">
          <li v-for="(link, index) in navlinks" :key="index">
            <a
              :href="link.href"
              class="block text-[#2e6130] hover:text-green-600 tranisition-colors duration-200 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-800 rounded"
              @click="toggleMenu"
            >
              {{ link.label }}
            </a>
          </li>
          <li>
            <a
              href="#jobapply"
              class="block bg-green-600 hover:bg-green-700 text-white text-center px-4 py-2 rounded-full transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
              @click="toggleMenu"
            >
              Job Application Form
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  </header>
</template>

<script setup>
import { ref } from "vue";
const navlinks = ref([
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us " },
  { href: "#profile", label: "Company Profile " },
  { href: "#services", label: "Our Services" },
  { href: "#network", label: "Our Network" },
  { href: "#jobapply", label: "JobApply" },
  { href: "#contact", label: "Contact" },
]);

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style></style>
