<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-5xl font-bold text-center mb-12 text-gray-800">Jewelry Collection</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="category in categories" :key="category.name" 
           class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
        <img :src="category.image" :alt="category.name" class="w-full h-64 object-cover">
        <div class="p-4">
          <h2 class="text-2xl font-semibold mb-2">{{ category.name }}</h2>
          <p class="text-gray-600">{{ category.description }}</p>
          <button 
            @click="changeComponent(category.component)"
            class="mt-4 inline-block bg-gradient-to-r from-amber-400 to-rose-400 text-white px-4 py-2 rounded-full hover:from-amber-500 hover:to-rose-500 transition-all">
            Explore {{ category.name }}
          </button>
        </div>
      </div>
    </div>
    <div class="text-center mt-8 text-xl text-gray-600">
      <p>More categories are coming soon! Stay tuned!</p>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['changeComponent']);

const categories = [
  { name: 'Rings', component: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80', description: 'Stunning rings to symbolize your love' },
  { name: 'Earrings', component: 'Earrings', image: 'https://i.pinimg.com/736x/ef/7d/7a/ef7d7a3d3cf5b2674dfe9d9f36454467.jpg', description: 'Beautiful earrings to complement your style' },
  { name: 'Necklaces', component: 'Necklaces', image: 'https://i.imghippo.com/files/MPqR1552NTc.png', description: 'Elegant necklaces for every occasion' },
  { name: 'Bracelets', component: 'Bracelets', image: 'https://i.imghippo.com/files/TeZ6727IM.png', description: 'Exquisite bracelets for a touch of elegance' },
];

const changeComponent = (component) => {
  emit('changeComponent', component);
};
</script>
