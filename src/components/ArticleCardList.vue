<template>
  <div class="article-list-container">
    <div class="category-title">Frameworks</div>
    <div
    class="article-card-container"
    v-for="(framework, index) in frameworks"
    :key="framework.id">
      <ArticleCard :article="framework" :is-odd="index % 2 == 0" />
    </div>
    <div class="article-card-container">
        <SmallArticleCard v-for="article in smallArticles" :key="article.id" :article="article" />
    </div>
  </div>
</template>
<script lang="ts">
import frameworksArr from '../content/frameworks';
import smallArticleArr from '../content/small-article';
import ArticleCard from './ArticleCard.vue';
import SmallArticleCard from './SmallArticleCard.vue';

export default {
  components: { ArticleCard, SmallArticleCard },
  data() {
    return {
      frameworks: frameworksArr,
      smallArticles: smallArticleArr,
    };
  },
};
</script>
<style lang="scss">
.article-list-container{
  margin-top: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.article-card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.8rem 8.5vw;
  flex-wrap: wrap;
}
</style>
