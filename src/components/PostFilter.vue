<script setup>
import { ref, computed, onMounted } from 'vue'
// import PostVue from './Post.vue';
import posts from '../store/postStore';
import mail from '../store/userMail'; 
import { getPosts } from '../firebase/posts';

onMounted (() => getPosts())

const postsWithemail = ref(null)

const waitUser =  computed(() => {
    postsWithemail.value = posts.value.filter(post => post.email == mail.value)
    console.log(postsWithemail.value)
})

</script>
<!-- <template>
    {{ waitUser }}
    <userItemVue v-for="user in usersWithemail" :userL="user" :key="user.id" />
</template>  -->