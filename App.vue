<template>
  <div class="app-container">
    <div v-if="currentComponent === 'Home'">
      <Nav></Nav>
      <Slider></Slider>
      <Cat @changeComponent="loadComponent"></Cat>
      <About></About>
      <Contact></Contact>
    </div>

    <component v-else :is="currentComponent"></component>

    <!-- WhatsApp Icon -->
    <a
      href="https://wa.me/8780532068"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-icon"
    >
      <img src="https://img.icons8.com/?size=48&id=16713&format=png" alt="WhatsApp Logo" class="logo-icon" />
    </a>
  </div>
</template>

<script>
import Nav from './src/components/nav.vue'; 
import Cat from './src/components/catagory.vue';
import Slider from './src/components/slider.vue'; 
import About from './src/components/about.vue'; 
import Contact from './src/components/contact.vue';
import Rings from './src/components/cat/rings.vue';
import Earrings from './src/components/cat/earring.vue'; 
import Necklaces from './src/components/cat/neck.vue'; 
import Bracelets from './src/components/cat/bracelets.vue';


export default {
  name: 'App',
  components: {
    Nav,
    Cat,
    Slider,
    About,
    Contact,
    Rings,
    Earrings,
    Necklaces,
    Bracelets,
  },
  data() {
    return {
      currentComponent: 'Home',
    };
  },
  methods: {
    loadComponent(componentName) {
      this.currentComponent = componentName;
    },
  },
};
</script>

<style>
/* WhatsApp Icon Styles */
.whatsapp-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  border-radius: 50%;
  padding: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  z-index: 1000;
}

.whatsapp-icon:hover {
  transform: scale(1.1);
}

.logo-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
