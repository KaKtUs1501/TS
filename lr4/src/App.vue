<template>
  <div id="app">
    <div class="toolbar">
      <button @click="filterGender('all')">Всі</button>
      <button @click="filterGender('male')">Чоловіки</button>
      <button @click="filterGender('female')">Жінки</button>
    </div>

    <div v-if="filteredUsers.length > 0" class="user-list">
      <UserCard v-for="(user, index) in filteredUsers" :key="index" :userData="user" />
    </div>
    <p v-else>Список юзерів пустий</p>
  </div>
</template>

<script>
import UserCard from './components/UserCard.vue'

export default {
  components: {
    UserCard
  },
  data() {
    return {
      users: [
        {
          firstName: 'Іван',
          lastName: 'Петров',
          gender: 'male',
          age: 25,
          position: 'Developer',
          photo: 'https://via.placeholder.com/100',
          hobbies: ['Футбол', 'Читання']
        },
        {
          firstName: 'Олена',
          lastName: 'Коваль',
          gender: 'female',
          age: 22,
          position: 'Designer',
          photo: 'https://via.placeholder.com/100',
          hobbies: ['Малювання', 'Йога']
        },
        {
          firstName: 'Андрій',
          lastName: 'Іванов',
          gender: 'male',
          age: 17,
          position: 'Student',
          photo: 'https://via.placeholder.com/100',
          hobbies: ['Ігри', 'Баскетбол']
        },
        {
          firstName: 'Наталя',
          lastName: 'Ткаченко',
          gender: 'female',
          age: 30,
          position: 'HR Manager',
          photo: 'https://via.placeholder.com/100',
          hobbies: ['Музика', 'Подорожі']
        },
        {
          firstName: 'Дмитро',
          lastName: 'Сидоренко',
          gender: 'male',
          age: 35,
          position: 'CEO',
          photo: 'https://via.placeholder.com/100',
          hobbies: ['Туризм', 'Фотографія']
        },
        {
          firstName: 'Марія',
          lastName: 'Горбунова',
          gender: 'female',
          age: 19,
          position: 'QA Engineer',
          photo: 'https://via.placeholder.com/100',
          hobbies: ['Програмування', 'Бігання']
        },
        {
          firstName: 'Сергій',
          lastName: 'Мельник',
          gender: 'male',
          age: 45,
          position: 'Team Lead',
          photo: 'https://via.placeholder.com/100',
          hobbies: ['Гра на гітарі', 'Фільми']
        },
        {
          firstName: 'Ірина',
          lastName: 'Лисенко',
          gender: 'female',
          age: 28,
          position: 'Project Manager',
          photo: 'https://via.placeholder.com/100',
          hobbies: ['Мистецтво', 'Йога']
        },
        {
          firstName: 'Олег',
          lastName: 'Кравченко',
          gender: 'male',
          age: 18,
          position: 'Intern',
          photo: 'https://via.placeholder.com/100',
          hobbies: ['Комп\'ютери', 'Шахи']
        },
        {
          firstName: 'Катерина',
          lastName: 'Дубенко',
          gender: 'female',
          age: 21,
          position: 'Support',
          photo: 'https://via.placeholder.com/100',
          hobbies: ['Волонтерство', 'Танці']
        },
      ],
      filter: 'all'
    };
  },
  computed: {
    filteredUsers() {
      if (this.filter === 'all') {
        return this.users;
      }
      return this.users.filter(user => user.gender === this.filter);
    }
  },
  methods: {
    filterGender(gender) {
      this.filter = gender;
    }
  }
}
</script>

<style scoped>
#app {
  text-align: center;
  padding: 20px;
}

.toolbar {
  margin-bottom: 20px;
}

button {
  margin: 5px;
  padding: 10px;
}

.user-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
