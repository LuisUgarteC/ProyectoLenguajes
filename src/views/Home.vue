<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in blogPostsFeed" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Ver recetas más recientes</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in blogPostsCards" :key="index"/>
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>No te pierdas ninguna receta. Registrate ahora mismo</h2>
        <router-link class="router-button" to="Register">
          Registro para Yojada Cuisine <Arrow class="arrow arrow-light"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default{
  name: "Home",
  components: { BlogPost, BlogCard, Arrow },
  data() {
    return {
      welcomeScreen: {
        title: "Bienvenido/a",
        blogPost:
          "Satisface tu pasión por la gastronomía: nuestro blog de recetas te inspira a crear platos memorables",
        welcomeScreen: true,
        photo: "comida",
      },
      // sampleBlogPost: [
      //   {
      //     title: "Title is a Filler Title",
      //     blogHTML: "This is a filler Blog post title!",
      //     blogCoverPhoto: "menu-chido2",
      //   },
      //   {
      //     title: "Title is a Filler Title2",
      //     blogHTML: "This is a filler Blog post title!",
      //     blogCoverPhoto: "cheetos",
      //   },
      // ],
    };
  },
  computed: {
    blogPostsFeed() {
      return this.$store.getters.blogPostsFeed;
    },
      blogPostsCards() {
      return this.$store.getters.blogPostsCards;
    },
    user() {
      return this.$store.state.user;
    },
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

  .updates {
    .container {
      padding: 100px 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media(min-width: 800px) {
        padding: 125px 25px;
        flex-direction: row;
      }

      .router-button {
        display: flex;
        font-size: 14px;
        text-decoration: none;
        @media(min-width: 800px) {
          margin-left: auto;
        }
      }

      h2  {
        font-weight: 300;
        font-size: 32px;
        max-width: 425px;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        @media(min-width: 800px) {
          text-align: initial;
          font-size: 40px;
        }
      }
    }
  }
</style>
