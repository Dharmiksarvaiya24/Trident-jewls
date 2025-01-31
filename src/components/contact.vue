<template>
    <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        <div class="flex flex-col md:flex-row">
          <!-- Contact Information Section -->    
          <div class="md:w-2/5 bg-gray-900 text-white p-8">
            <h2 class="text-3xl font-bold mb-6">Contact Us</h2>
            <div class="space-y-6">
              <div v-for="(item, index) in contactItems" :key="index" class="flex items-start">
                <img :src="item.icon" alt="icon" class="h-6 w-6 mr-3 flex-shrink-0" />
                <div>
                  <h3 class="text-lg font-medium">{{ item.title }}</h3>
                  <p class="mt-1 text-gray-300">{{ item.content }}</p>
                </div>
              </div>
            </div>
            <div class="mt-8">
              <h3 class="text-lg font-medium mb-4">Follow Us</h3>
              <div class="flex space-x-4">
                <a v-for="social in socialLinks" :key="social.name" :href="social.href" class="text-gray-300 hover:text-yellow-400">
                  <img :src="social.icon" alt="social icon" class="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
  
          <!-- Contact Form Section -->
          <div class="md:w-3/5 p-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Leave a Message For Us</h2>
            <form @submit.prevent="onSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full py-3 px-4 text-white bg-gradient-to-r from-yellow-400 to-pink-500 rounded-md shadow hover:from-yellow-500 hover:to-pink-600 disabled:opacity-50"
                >
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from "vue";
  
  const contactItems = [
    {
      icon: "https://img.freepik.com/free-vector/location_53876-25530.jpg?t=st=1733578928~exp=1733582528~hmac=1704ea167bf44635789f60aa998e05ae3bf0ebbc670b073edf678096c45ffac3&w=826",
      title: "Visit ",
      content: "F118,ABC apartment,ABC Circle,Sudama chowk,Surat,gujrat,394101",
    },
    {
      icon: "https://img.freepik.com/free-vector/phone_53876-25489.jpg?t=st=1733579289~exp=1733582889~hmac=3b56d2fc2185d9d68148739a74d74184e473d9d9c16fc1678f4950437f36f10d&w=826",
      title: "Call ",
      content: "+91 87805432068",
    },
    {
      icon: "https://img.freepik.com/free-vector/mail-envelope-with-1-alert_78370-3334.jpg?t=st=1733579340~exp=1733582940~hmac=5e9a7c7967a140358eee41a7260d1a044e0448e5834cada49ef8a4a4fe041f16&w=826",
      title: "Email ",
      content: "priteshsarvaiya20@gmail.com",
    },
    {
      icon: "https://img.freepik.com/premium-vector/red-house-with-circle-side_764382-15225.jpg?w=826",
      title: "Opening Hours",
      content: "8am to 8pm",
    },
  ];
  
  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/trident_jewelles/", icon: "https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?t=st=1733579331~exp=1733582931~hmac=5057c3064b38eebd5cd7e4b92beb56e073efd380cb7a83f41a8bf78a1008c88a&w=826" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/saravaiya-pritesh-8802b2328/", icon: "https://img.freepik.com/free-psd/social-media-logo-design_23-2151296991.jpg?t=st=1733579495~exp=1733583095~hmac=59dbf9ca707d8aa3e297f7aad231a17f8f528fb366311b6d6d2fd5956df70f4e&w=826" },
  ];
  
  const form = reactive({
    name: "",
    email: "",
    message: "",
  });
  
  const isSubmitting = ref(false);
  
  const onSubmit = () => {
    if (!form.name || !form.email || !form.message) return alert("All fields are required.");
  
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:Sarvaiyapritesh52@gmail.com?subject=${subject}&body=${body}`;
  
    form.name = "";
    form.email = "";
    form.message = "";
    isSubmitting.value = false;
  };
  </script>
  
  <style>
  /* Optional CSS for improved appearance */
  </style>
  