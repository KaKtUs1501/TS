<template>
  <div class="user-card" :class="ageClass">
    <h2>{{ userData.firstName }} {{ userData.lastName }}</h2>
    <p v-if="userData.age > 18">Вік: {{ userData.age }}</p>
    <p>Стать: {{ userData.gender }}</p>
    <p>Посада: {{ userData.position }}</p>
    <div v-if="userData.hobbies && userData.hobbies.length">
      <h4>Хобі:</h4>
      <ul>
        <li v-for="(hobby, index) in userData.hobbies" :key="index">{{ hobby }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userData: Object
  },
  computed: {
    ageClass() {
      return this.userData.age > 18 ? 'adult' : 'young';
    }
  }
}
</script>

<style scoped>
.user-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 200px;
  text-align: center;
  transition: background-color 0.3s;
}

.user-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 16px;
}

.adult {
  background-color: #e0f7fa;
}

.young {
  background-color: #ffe0b2;
}
</style>
