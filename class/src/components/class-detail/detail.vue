<template>
  <div>
    <img src="../../../static/images/detail/banner.png" alt="">
    <DetailAddress></DetailAddress>
    <Buy :buy_info="buy_info" :lesson_info="lesson_info"></Buy>
    <IntroduceTab :lesson_tab="lesson_tab" :change_tab="change_tab"></IntroduceTab>
    <Introduce :lesson_info="lesson_info" :teacher_info="teacher_info" :recommend_lesson="recommend_lesson" v-show="lesson_tab == 1"></Introduce>
    <Catalogue :lesson_mulu="lesson_mulu" v-show="lesson_tab == 2"></Catalogue>
  </div>
</template>

<script>
import DetailAddress from './detail-address'
import Buy from './buy'
import IntroduceTab from './introduce-tab'
import Introduce from './introduce'
import Catalogue from './catalogue'

export default {
  name: 'detail',
  components: {
    DetailAddress,
    Buy,
    IntroduceTab,
    Introduce,
    Catalogue
  },
  data () {
    return {
      // 购买信息
      buy_info: {
        Islike: false, // 是否收藏
        Isbuy: false // 是否购买
      },
      // 课程信息
      lesson_info: {
        cover: '../../static/images/detail/class-cover.png',
        tit: '中国培训行业发展趋势解读',
        teacher: '崔连斌',
        postion: '留美人力资源开发博士',
        lesson_num: '6课时',
        per: 100,
        lesson_time: '1.6小时',
        now_price: 299,
        old_price: 599,
        // 课程介绍
        lesson_introduce: '当面对企业高速发展、企业对人才培养的速度要求不断提高的情况下，让员工学习什么内容才是“接地气”和“即学即用”的？   答案是：来自企业内部的实践！',
        // 课程定位
        lesson_position: {
          tit: '或许对于很多培训专业人士而言，下面的问题早已屡见不鲜',
          summarize: '或许对于很多培训专业人士而言，下面的问题早已屡见不鲜',
          detail: [
            '业务部门说需要什么培训就提供什么培训，该培训是否能够解决工作戒绩问题却未能深思熟虑',
            '业务部门说需要什么培训就提供什么培训，该培训是否能够解',
            '业务部门说需要什么培训就提供什么培训，该培训是否能够解该培训是否能够解',
            '业务部门说需要什么培训就提供什么培训，该培训是否能够解该培训是否能够解培训是否能够解决工作戒'
          ]
        },
        //  课程特色
        lesson_youshi: [
          '该课程经过多名具有人力资源开发硕士及博士学位的资深课程设计开发与家和具有丰富企业实戓经验的培训管理与家联合打造,能够保证学习内容充分满足企业实践需求',
          '该课程经过多名具有人力资源开发硕士及博士学位的资深课程设计开发与家和具有丰富企业实戓经验的培训管理与家联合打造,能够保证学习内容充分满足企业实践需求',
          '该课程经过多名具有人力资源开发硕士及博士学位的资深课程设计开发与家和具有丰富企业实戓经验的培训管理与家联合打造,能够保证学习内容充分满足企业实践需求',
          '该课程经过多名具有人力资源开发硕士及博士学位的资深',
          '该课程经过多名具有人力资源',
          '该课程经力资源',
          '该课程经过多名具有人力资源博士学位的',
          '该课程经过多名具有人力资源充分满足企业实践需'
        ],
        // 课程模型
        lesson_medol: {
          src: '../../static/images/detail/class-model.png',
          pic_sm: '安迪曼基于岗位序列的课程体系设计模型（TOCMART）™'
        },
        // 课程收益
        lesson_get: [
          '现场互动解决业内争论戒困惑（工作仸务分析 Vs.核心能力分析建立课程体系）',
          '获得大量的课程体系建设的工具、模版和表达,辅助工具',
          '获得大量的课程体系建设的工具、模版和表达,辅助工具',
          '获得大量的课程体系建设的工具、模版和表达,辅助工具'
        ],
        // 课程目标
        lesson_target: {
          last_target: '在明确某个关键岗位序列的前提下，运用科学的课程体系构建的斱法和工具，建立以结果为导向的、覆盖关键岗位序列、内容没有重叠',
          detail: [
            '编写科学的学习目标',
            '学习目标详细目标2',
            '学习目标详细目标3',
            '学习目标详细目标4',
            '学习目标详细目标5'
          ]
        },
        // 学员对象
        lesson_stu: [
          '企业培训总监、培训经理、培训主管',
          '培训项目管理人员 ',
          '课程设计不开发人员',
          '讲师',
          '课程设计不开发人员',
          '培训项目管理人员 ',
          '讲师'
        ],
        //  课程大纲
        lesson_outline: [
          {
            tit: '模块一：课程体系构建概述 ',
            detail: [
              '课程体系Vs.学习地图',
              '基于岗位序列的课程体系设计模型'
            ]
          },
          {
            tit: '模块二：课程体系构建概述 ',
            detail: [
              '课程体系Vs.学习地图',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型'
            ]
          },
          {
            tit: '模块三：课程体系构建概述 ',
            detail: [
              '课程体系Vs.学习地图',
              '课程体系Vs.学习地图',
              '课程体系Vs.学习地图',
              '课程体系Vs.学习地图',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型'
            ]
          },
          {
            tit: '模块四：课程体系构建概述 ',
            detail: [
              '课程体系Vs.学习地图',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型'
            ]
          },
          {
            tit: '模块五：课程体系构建概述 ',
            detail: [
              '课程体系Vs.学习地图',
              '课程体系Vs.学习地图',
              '课程体系Vs.学习地图',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型'
            ]
          },
          {
            tit: '模块六：课程体系构建概述 ',
            detail: [
              '课程体系Vs.学习地图',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型'
            ]
          },
          {
            tit: '模块七：课程体系构建概述 ',
            detail: [
              '课程体系Vs.学习地图',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型',
              '基于岗位序列的课程体系设计模型'
            ]
          }
        ]
      },
      // 老师信息
      teacher_info: {
        pic: '../../static/images/detail/introduce/teacher-header.png',
        name: '崔连斌 博士 ',
        english_name: 'Lianbin Cui, Ph.D.',
        introduce: '他是美国柯氏公司讣证的第一位中文讲师和顾问，是美国讣证的模拟课程设计不开发师，是国内少有的拥有培训不发展领域与业背景的人士。他',
        tips: [
          '首席培训技术官',
          '柯氏四级',
          '留美博士',
          'DACUM导引师'
        ],
        // 老师相关的课程
        about_lesson: [
          {
            cover: '../../static/images/detail/introduce/cover.png',
            tit: '中国培训行业发展趋势解读',
            id: 1
          },
          {
            cover: '../../static/images/detail/introduce/cover.png',
            tit: '中国培训行业发展趋势解读',
            id: 2
          },
          {
            cover: '../../static/images/detail/introduce/cover.png',
            tit: '中国培训行业发展趋势解读',
            id: 3
          }
        ],
        about_project: [
          {
            cover: '../../static/images/detail/introduce/pr-cover.png',
            name: '东方航空',
            id: 1
          },
          {
            cover: '../../static/images/detail/introduce/pr-cover.png',
            name: '东方航空',
            id: 2
          },
          {
            cover: '../../static/images/detail/introduce/pr-cover.png',
            name: '东方航空',
            id: 3
          },
          {
            cover: '../../static/images/detail/introduce/pr-cover.png',
            name: '东方航空',
            id: 4
          },
          {
            cover: '../../static/images/detail/introduce/pr-cover.png',
            name: '东方航空',
            id: 5
          },
          {
            cover: '../../static/images/detail/introduce/pr-cover.png',
            name: '东方航空',
            id: 6
          },
          {
            cover: '../../static/images/detail/introduce/pr-cover.png',
            name: '东方航空',
            id: 7
          },
          {
            cover: '../../static/images/detail/introduce/pr-cover.png',
            name: '东方航空',
            id: 8
          }
        ]
      },
      // 推荐课程
      recommend_lesson: [
        {
          cover: '../../static/images/detail/introduce/cover.png',
          tit: '中国培训行业发展趋势解读',
          id: 1
        },
        {
          cover: '../../static/images/detail/introduce/cover.png',
          tit: '中国培训行业发展趋势解读',
          id: 2
        },
        {
          cover: '../../static/images/detail/introduce/cover.png',
          tit: '中国培训行业发展趋势解读',
          id: 3
        },
        {
          cover: '../../static/images/detail/introduce/cover.png',
          tit: '中国培训行业发展趋势解读',
          id: 4
        },
        {
          cover: '../../static/images/detail/introduce/cover.png',
          tit: '中国培训行业发展趋势解读',
          id: 5
        }
      ],
      // 课程目录
      lesson_mulu: [
        {
          tit: '章节1',
          detail: [
            {
              id: 1,
              solt: '第1课时',
              name: '数据收集',
              time: '09:25'
            },
            {
              id: 2,
              solt: '第2课时',
              name: '数据收集',
              time: '09:25'
            },
            {
              id: 3,
              solt: '第3课时',
              name: '数据收集',
              time: '09:25'
            },
            {
              id: 4,
              solt: '第4课时',
              name: '数据收集',
              time: '09:25'
            }
          ]
        },
        {
          tit: '章节2',
          detail: [
            {
              id: 1,
              solt: '第1课时',
              name: '数据收集',
              time: '09:25'
            },
            {
              id: 2,
              solt: '第2课时',
              name: '数据收集',
              time: '09:25'
            },
            {
              id: 3,
              solt: '第3课时',
              name: '数据收集',
              time: '09:25'
            },
            {
              id: 4,
              solt: '第4课时',
              name: '数据收集',
              time: '09:25'
            }
          ]
        }
      ],
      lesson_tab: 1 // 课程介绍切换  1表示课程概述  2表示课程目录

    }
  },

  methods: {
    change_tab (val) {
      this.lesson_tab = val
    }
  }
}
</script>

<style scoped>
  ul, li, ol {
    list-style-type: none;
  }
</style>
