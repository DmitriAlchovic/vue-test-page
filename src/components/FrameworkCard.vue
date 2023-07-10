<template>
  <div :class="isOdd ? 'article-container-odd' : 'article-container'">
    <div class="img-container article-img">
      <img v-if="article" alt="no image" :src="require('@/assets/' + article.image + '')" />
    </div>
    <div class="article-info-container">
      <div>
        <div class="article-title">{{ article?.title }}</div>
        <div class="article-body">{{ article?.body }}</div>
      </div>
      <div class="btn-container">
        <primary-btn>Read more</primary-btn>
        <secondary-btn>Webinar</secondary-btn>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { ArticlePreview } from '@/types';

export default {
  props: {
    isOdd: Boolean,
    article: Object as PropType<ArticlePreview>,
  },
};
</script>
<style lang="scss">
.article-container {
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  max-width: 74.75rem;
  border-radius: 5px;
  background: #FFF;
  flex-wrap: wrap;
}

.article-container-odd {
  display: flex;
  position: relative;
  justify-content: space-between;
  max-width: 74.75rem;
  border-radius: 5px;
  background: #FFF;
  flex-wrap: wrap;
}

.article-info-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1.6rem 0.7rem 0;
}

.article-img {
  max-width: 535px;
}

@media (max-width:1371px) {
  .article-img {
    max-width: none;
  }

  .article-container-odd {
    display: block;
  }

  .article-container {
    display: block;
  }
}

.article-title {
  margin-bottom: 0.56rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.article-body {
  max-width: 35.75rem;
}
</style>
