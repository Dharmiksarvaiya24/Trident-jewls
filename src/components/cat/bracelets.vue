<template>
    <div class="min-h-screen bg-gray-100 py-6 sm:py-8 lg:py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-6 sm:mb-8">
          <button 
            @click="goBack" 
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300"
          >
            <svg class="mr-2 -ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
        </div>
  
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Our Bracelets Products</h1>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div v-for="product in products" :key="product.id" class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="product.image" :alt="product.name" class="w-full h-48 sm:h-56 lg:h-64 object-cover">
            <div class="p-4 sm:p-6">
              <h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{{ product.name }}</h2>
              <p class="text-sm sm:text-base text-gray-600 mb-4">{{ product.description }}</p>
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                <span class="text-xl sm:text-2xl font-bold text-gray-900">₹{{ product.price.toLocaleString() }}</span>
                <button 
                  @click="redirectToWhatsApp(product)"
                  class="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-rose-400 text-white px-4 py-2 rounded-full hover:from-amber-500 hover:to-rose-500 transition duration-300 text-sm sm:text-base"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const products = ref([
    {
      id: 1,
      name: "Golden Bracelet",
      description: "A stunning gold bracelet for any occasion.",
      price: 1499,
      image: "https://i.ibb.co/7xdBwPTk/Screenshot-from-2025-01-31-15-02-08.png"
    },
    {
      id: 2,
      name: "Silver Bangle",
      description: "Elegant silver bangle with a sleek design.",
      price: 999,
      image: "https://i.ibb.co/1GxsFqtD/Screenshot-from-2025-01-31-15-02-36.png"
    },
    {
      id: 3,
      name: "Diamond Cuff",
      description: "Luxurious diamond-studded cuff bracelet.",
      price: 4999,
      image: "https://i.ibb.co/M590d7wF/Screenshot-from-2025-01-31-15-03-07.png"
    },
    {
      id: 4,
      name: "Casual Bracelet",
      description: "Casual bracelet for everyday wear.",
      price: 6999,
      image: "https://i.ibb.co/n2gNL4S/Screenshot-from-2025-01-31-15-03-48.png"
    },
    {
      id: 5,
      name: "Charm Bracelet",
      description: "Personalized charm bracelet for a unique look.",
      price: 1299,
      image: "https://i.ibb.co/Gv131nQ9/Screenshot-from-2025-01-31-15-04-35.png"
    },
    {
      id: 6,
      name: "Beaded Bracelet",
      description: "Colorful beaded bracelet for a fun, vibrant style.",
      price: 499,
      image: "https://i.ibb.co/4R3Vtpd6/Screenshot-from-2025-01-31-15-05-18.png"
    }
  ])
  
  const redirectToWhatsApp = (product) => {
    const message = `Hi, I'm interested in purchasing ${product.name} for ₹${product.price.toLocaleString()}.`
    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/+918780532068?text=${encodedMessage}`
    window.open(whatsappURL, '_blank')
  }
  
  const goBack = () => {
    window.location.href = "/"; // Redirects to App.vue without reloading
  }
  </script>
  