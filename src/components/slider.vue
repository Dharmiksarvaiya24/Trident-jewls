<template>
  <div class="relative w-full max-w-[1850px] mx-auto overflow-hidden carousel-container">
    <!-- Carousel Wrapper -->
    <div 
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <!-- Display only one image at a time -->
      <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0 relative">
        <img :src="image.src" :alt="`Slide ${index + 1}`" class="w-full h-[400px] object-cover" />
        <!-- Content on top of the image -->
      </div>
    </div>

    <!-- Indicators -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button
        v-for="(_, index) in images"
        :key="index"
        @click="setCurrentIndex(index)"
        :class="[
          'w-3 h-3 rounded-full transition-all duration-300',
          currentIndex === index ? 'bg-white' : 'bg-white/50'
        ]"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  {
    src: 'https://i.ibb.co/84YH0L35/Screenshot-from-2025-01-31-15-13-01.png',
  },
  {
    src: 'https://i.ibb.co/gWTky36/Screenshot-from-2024-12-07-19-34-58.png',
  },
  {
    src: 'https://i.ibb.co/cQyYzLg/Screenshot-from-2024-12-07-19-34-29.png',
  }
]

const currentIndex = ref(0)
let intervalId = null

// Set current slide based on the clicked indicator
const setCurrentIndex = (index) => {
  currentIndex.value = index
}

// Move to the next slide
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

// Set autoplay to start when the component is mounted
const startAutoplay = () => {
  intervalId = setInterval(nextSlide, 3000) // Change slide every 3 seconds
}

// Pause the autoplay when user hovers over the carousel
const pauseAutoplay = () => {
  if (intervalId) {
    clearInterval(intervalId)
  }
}

// Start autoplay when the component is mounted
onMounted(() => {
  startAutoplay()
})

// Clean up when the component is unmounted
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
/* Add smooth transition for carousel images */
.carousel-container {
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for the carousel container */
  border-radius: 10px; /* Rounded corners for a polished look */
  overflow: hidden; /* Ensure images don't spill out */
}

/* Add a background shadow beneath the carousel */
.carousel-container::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.1) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: -1;
  border-radius: 15px;
}

/* Add shadow to individual images */
img {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for images */
  border-radius: 8px; /* Slight rounding of image edges */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
}

/* Add hover effect to images for interactivity */
img:hover {
  transform: scale(1.03); /* Slight zoom-in on hover */
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
}

/* Style for indicators */
button.w-3 {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Shadow for indicators */
}

button.w-3:hover {
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2); /* Slightly stronger shadow on hover */
}

button.bg-white {
  background-color: white;
}

/* Style for content over images */
div.absolute {
  transition: opacity 0.3s ease;
}

div.absolute:hover {
  opacity: 0.8;
}

</style>
