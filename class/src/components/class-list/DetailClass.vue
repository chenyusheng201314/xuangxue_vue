<template>
  <li class="detail-class" @click="viea_skip(lesson.id)">
    <a :href="lesson.src">
      <img :src="lesson.cover" alt="" width="230" height="150">
      <p class="class-title">{{lesson.tit}}</p>
      <p class="class-teacher">{{lesson.teacher}}|{{lesson.position}}</p>
      <p class="class-teacher">
        <span class="class-num">
          <img src="../../../static/images/class/num.png" alt="" width="16" height="16">
          <span>{{lesson.num}}</span>
        </span>
        <span class="class-time">
          <img src="../../../static/images/class/time.png" alt="" width="16" height="16">
          <span>{{lesson.num}}</span>
        </span>
      </p>
      <div class="class-price">
          <p class="now-price">
            <span>{{lesson.now_price}}</span>学币
          </p>
        <p class="old-price">
          <span>{{lesson.old_price}}</span>学币
        </p>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'DetailClass',
  props: ['lesson'],
  methods: {
    viea_skip (lesson_id) {
      this.$router.push({path: '/class-detail', query: {id: lesson_id}})
    }
  }
}
</script>

<style scoped>
  a:hover {
    text-decoration: none;
  }
  .detail-class {
    width: 230px;
    height: auto;
    overflow: hidden;
    border: 1px solid #dcdcdc;
    float: left;
    margin-left: 12px;
    margin-top: 13px;
    cursor: pointer;
    transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
  }

  .detail-class:nth-child(5n+1) {
    margin-left: 0;
  }
  .detail-class:hover{
    transform: scale(1.05);
    box-shadow: 0 0  5px 3px rgba(0,0,0,0.4);
  }
  .detail-class .class-title {
    width: 230px;
    height: auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    padding: 0 10px;
    text-align: center;
    font-size: 15px;
    color: #333;
    margin-top: 10px;
    margin-bottom: 0;
  }
  .class-teacher {
    width: 230px;
    height: auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    padding: 0 15px;
    color: #999;
    font-size: 12px;
    text-align: center;
    margin-top: 3px;
    margin-bottom: 0;
    overflow: hidden;
  }
  .class-teacher .class-num{
    float: left;
    margin-left: 5px;
  }
  .class-teacher .class-time{
    float: right;
    margin-right: 5px;
  }
  .class-teacher .class-num img,.class-teacher .class-time img{
    margin-right: 5px;
  }
  .class-price{
    width: 230px;
    height: auto;
    overflow: hidden;
    margin-top: 18px;
    margin-bottom: 8px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    padding: 0 20px;
  }
  .class-price .now-price{
    font-size: 15px;
    float: left;
    color: #ff6900;
    margin-bottom: 0;
  }
  .class-price .now-price span{
    font-size: 18px;
    margin-right: 5px;
  }
  .class-price .old-price{
    font-size: 15px;
    color: #999;
    float: right;
    text-decoration: line-through;
    margin-bottom: 0;
  }
</style>
