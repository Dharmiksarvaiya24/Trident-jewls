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
    
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Our Earring Products</h1>
          
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div v-for="product in products" :key="product.id" class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="product.image" :alt="product.name" class="w-full h-48 sm:h-56 lg:h-64 object-cover">
            <div class="p-4 sm:p-6">
              <h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{{ product.name }}</h2>
              <p class="text-sm sm:text-base text-gray-600 mb-4">{{ product.description }}</p>
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                <span class="text-xl sm:text-2xl font-bold text-gray-900">₹{{ product.price.toFixed(2) }}</span>
                <button 
                  @click="redirectToWhatsApp(product)"
                  class="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-rose-400 text-white px-4 py-2 rounded-full hover:from-amber-500 hover:to-rose-500 transition duration-300 text-sm sm:text-base"
                >
                  Shop Now
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
      name: "Gold Hoop Earrings",
      description: "Elegant gold earrings perfect for any occasion.",
      price: 3999.99,
      image: "https://i.ibb.co/wFyZgTQJ/Screenshot-from-2025-01-31-14-37-42.png"
    },
    {
      id: 2,
      name: "Silver Stud Earrings",
      description: "Sleek and stylish silver studs.",
      price: 1999.99,
      image: "https://i.ibb.co/XxJTcWKb/Screenshot-from-2025-01-31-14-39-24.png"
    },
    {
      id: 3,
      name: "Diamond Drop Earrings",
      description: "Luxurious diamond drop earrings for a fancy look.",
      price: 7999.99,
      image: "https://i.ibb.co/sJHZjfJR/Screenshot-from-2025-01-31-14-39-58.png"
    },
    {
      id: 4,
      name: "Pearl Earrings",
      description: "Timeless and classic pearl earrings.",
      price: 2999.99,
      image: "https://i.ibb.co/rRkZxvWx/Screenshot-from-2025-01-31-14-40-33.png"
    },
    {
      id: 5,
      name: "Crystal Dangle Earrings",
      description: "Sparkling crystal earrings with a modern touch.",
      price: 2499.99,
      image: "https://i.ibb.co/k2GnbkTD/Screenshot-from-2025-01-31-14-42-03.png"
    },
    {
      id: 6,
      name: "Chandelier Earrings",
      description: "Glamorous chandelier earrings that catch the eye.",
      price: 5499.99,
      image: "https://i.ibb.co/3YmmQWfz/Screenshot-from-2025-01-31-14-42-47.png"
    }
  ])
  
  const redirectToWhatsApp = (product) => {
    const message = `Hi, I'm interested in purchasing ${product.name} for ₹${product.price.toFixed(2)}.`
    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/+918780532068?text=${encodedMessage}`
    window.open(whatsappURL, '_blank')
  }
  
  const goBack = () => {
    window.location.href = "/"; // Redirects to App.vue without reloading
  }
  </script>
  