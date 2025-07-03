<template>
  <div>
    <Header />
    <Slider/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Header from '@components/Header.vue';
import Slider from '@components/Slider.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(()=>{
  AOS.init();
}) 
  
</script>

<style scope></style>
