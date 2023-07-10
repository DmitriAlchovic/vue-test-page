<template>
  <div class="small-article-container">
    <div class="img-container small-article-img">
      <img v-if="article" alt="no img" :src="require('@/assets/' + article.image + '')" />
    </div>
    <div class="small-article-info">
      <div class="small-article-title">{{ article?.title }}</div>
      <div class="small-article-body">{{ article?.body }}</div>
      <primary-btn>{{ article?.linkTitle }}</primary-btn>
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
.small-article-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  flex-wrap: wrap;
  position: relative;

  .small-article-img{
    max-width: 345px;
    max-height: 227px;
  }

  .small-article-info {
    margin: 1.25rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .small-article-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.56rem;
    }

    .small-article-body {
      width: 14rem;
    }

  }

}
</style>
