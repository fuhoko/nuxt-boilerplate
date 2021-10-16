<template>
  <i class="loading fas fa-spinner-third"></i>
</template>

<style scoped>
@keyframes loading-rotation {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  animation: loading-rotation 0.5s linear 0s infinite;
}
</style>
