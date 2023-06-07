<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCards from "../components/BlogCard.vue";
export default{
  name: "Home",
  components: { BlogPost, BlogCards },
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
      sampleBlogCards: [
        { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "June 07, 2023"},
        { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "June 07, 2023"},
        { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "June 07, 2023"},
        { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "June 07, 2023"},
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .blog-card-wrap {
    h3 {
      font-weight: 300;
      font-size: 28px;
      margin-bottom: 32px;
    }
  }
</style>
