<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
// import BlogCard from "../components/BlogCard";
// import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: { BlogPost },
  data() {
    return {
       welcomeScreen: {
        title: "Bienvenido/a",
        blogPost:
          "Blogs semanales con recetas deliciosas para cada ocación. ¡Registrate hoy para no perderte ninguna receta!",
        welcomeScreen: true,
        photo: "comida",
      },
      sampleBlogPost: [
        {
          title: "Title is a Filler Title",
          blogHTML: "This is a filler Blog post title!",
          // blogCoverPhoto: "beautiful-stories",
          blogCoverPhoto: "menu-chido2",
        },
        {
          title: "Title is a Filler Title2",
          blogHTML: "This is a filler Blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>
