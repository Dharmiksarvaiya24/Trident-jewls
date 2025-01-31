<template>
  <section class="about-us py-24 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-4">
      <h2 class="text-5xl font-bold text-gray-800 mb-8 text-center font-serif">
        About Us
      </h2>
      <div class="max-w-4xl mx-auto">
        <p class="text-xl text-gray-600 mb-12 text-center leading-relaxed">
          At <strong class="text-gold">Trident Jewelry</strong>, we believe that every piece of jewelry tells a unique story. Crafted with passion, precision, and creativity, our designs bring elegance to life. Whether you're looking for timeless classics or modern masterpieces, we have something that suits every style.
        </p>
      </div>
      
      <!-- Centered Feature Card -->
      <div class="flex justify-center items-center mb-16">
        <div v-for="(feature, index) in features" :key="feature.title" 
             class="feature-card bg-white rounded-lg shadow-xl p-6 transform transition-all duration-300 hover:scale-105"
             :class="{'animate-fade-in-up': isVisible}"
             :style="{ animationDelay: `${index * 200}ms` }">
          <div class="relative mb-6">
            <div class="absolute inset-0 bg-gold rounded-full opacity-10"></div>
            <img :src="feature.image" :alt="feature.title" class="w-32 h-32 mx-auto rounded-full object-cover">
          </div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>

      <div class="max-w-4xl mx-auto text-center" v-intersect="onIntersect">
        <p class="text-lg text-gray-600 mb-8 leading-relaxed transition-opacity duration-1000"
           :class="{ 'opacity-0': !isVisible, 'opacity-100': isVisible }">
          Our mission is to bring you jewelry that is not only beautiful but built to last. Every design is a reflection of our dedication to superior craftsmanship and high-quality materials. Join us on a journey to discover timeless pieces crafted with love and passion.
        </p>
        <button @click="showModal = true" 
                class="bg-gold text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50">
          Learn More About Our Craft
        </button>
      </div>
    </div>

    <!-- Modal -->
    <Transition name="modal">
      <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-8 max-w-2xl mx-4">
          <h3 class="text-3xl font-bold text-gray-800 mb-4">Sorry !</h3>
          <p class="text-gray-600 mb-6">
            We are working on crafting of jewelry but unfortunately, we cannot provide this service for now.
          </p>
          <button @click="showModal = false" 
                  class="bg-gold text-white font-semibold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out">
            Close
          </button>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const features = [
  {
    title: 'Pritesh Prajapati',
    description: 'Lead Designer and founder of Trident Jewelry',
    image: 'https://i.imghippo.com/files/egLF7525lAc.jpeg'
  },
]

const isVisible = ref(false)
const showModal = ref(false)

const onIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      isVisible.value = true
    }
  })
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 500)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');

.text-gold {
  color: #D4AF37;
}

.bg-gold {
  background: linear-gradient(to right, #fbbf24, #fb7185);
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
