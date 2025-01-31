<template>
  <div class="font-sans">
    <nav
      class="bg-white shadow-lg fixed w-full z-10 transition-all duration-300"
      :class="{ 'py-2 bg-opacity-90 backdrop-blur-md': scrolled, 'py-4': !scrolled }"
    >
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div class="flex items-center">
            <img
              src="../assets/img.png"
              alt="Trident Jewellery Logo"
              class="h-12 w-auto transition-transform duration-300 ease-in-out transform hover:scale-110 sm:h-16"
            >
          </div>

          <!-- Navigation Buttons -->
          <div class="flex space-x-2 sm:space-x-4">
            <button
              v-for="(section, index) in ['About', 'Contact']"
              :key="index"
              @click="scrollToSection(section.toLowerCase())"
              class="px-4 py-2 sm:px-6 sm:py-3 rounded-full text-white font-semibold transition-all duration-300 ease-in-out bg-gradient-to-r from-amber-400 to-rose-400 hover:from-amber-500 hover:to-rose-500 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-sm sm:text-base relative overflow-hidden group"
            >
              <span class="relative z-10">{{ section }}</span>
              <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden min-h-screen flex items-center">
      <div class="absolute inset-0 overflow-hidden">
        <div class="diamond-pattern"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl md:text-6xl tracking-tight font-extrabold text-gray-900 mb-4">
            <span class="block">Welcome to</span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
              Trident Jewellery
            </span>
          </h1>
          <transition name="fade" mode="out-in">
            <p
              :key="currentIndex"
              class="mt-3 max-w-md mx-auto text-xl text-gray-600 sm:text-2xl md:mt-5 md:max-w-3xl"
              ref="textContainer"
            >
              {{ displayText }}
            </p>
          </transition>
          <div class="mt-8 flex justify-center">
            <button
              v-if="showScrollButton"
              @click="scrollForMore"
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Scroll for More
              <svg class="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Jewellery Icons -->
    <div class="absolute top-1/4 left-10 animate-float-slow">
      <svg class="h-12 w-12 text-amber-300 opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2l2 7h7l-6 4.5 2 7-6-4.5-6 4.5 2-7-6-4.5h7l2-7z" />
      </svg>
    </div>
    <div class="absolute top-1/3 right-10 animate-float-medium">
      <svg class="h-10 w-10 text-rose-300 opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2l2 7h7l-6 4.5 2 7-6-4.5-6 4.5 2-7-6-4.5h7l2-7z" />
      </svg>
    </div>
    <div class="absolute bottom-1/4 left-20 animate-float-fast">
      <svg class="h-8 w-8 text-purple-300 opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2l2 7h7l-6 4.5 2 7-6-4.5-6 4.5 2-7-6-4.5h7l2-7z" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const texts = [
  "Discover timeless elegance and craftsmanship",
  "Luxury in Every Detail",
  "Jewelry as Unique as You",
];

const displayText = ref('');
const currentIndex = ref(0);
const scrolled = ref(false);
const showScrollButton = ref(true); // Initially show the button

const typeWriter = (text, index = 0) => {
  if (index < text.length) {
    displayText.value = text.substring(0, index + 1);
    setTimeout(() => typeWriter(text, index + 1), 50);
  }
};

const changeText = () => {
  currentIndex.value = (currentIndex.value + 1) % texts.length;
};

watch(currentIndex, (newIndex) => {
  typeWriter(texts[newIndex]);
});

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const scrollForMore = () => {
  // Scroll the page 100px down
  window.scrollBy({ top: 100, behavior: 'smooth' });
  
  // Hide the button after clicking
  showScrollButton.value = false;
};

onMounted(() => {
  typeWriter(texts[0]);
  setInterval(changeText, 5000);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Add your styles here */
</style>
