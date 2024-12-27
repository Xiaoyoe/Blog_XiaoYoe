<template>
  <div class="calendar-box">
     <NavTop />
     <div class="calendarp-body">
    <div class="shell">
        <div class="year-box">{{yearDate}}</div>
        <div class="cir" :style="circleStyle" @click="goToToday()"></div>
      <header>
        <div id="day" class="day">{{ currentDate.getDate() }}</div>
        <div id="month" class="month">{{ monthNames[currentDate.getMonth()] }}</div>
      </header>
      <table class="calendar">
        <thead>
          <tr>         
            <td>今</td>
            <td></td>
            <td>天</td>
            <td></td>
            <td>是</td>
            <td></td>
            <td>{{yearDate}}</td>
            <td></td>
            <td>年</td> 
            <td></td>
            <td>{{ currentDate.getMonth() + 1 }} 月 {{ currentDate.getDate() }}日</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(week, index) in weeks" :key="index">
            <td
              v-for="(day, dayIndex) in week"
              :key="dayIndex"
              :class="['day-cell', { 'current-day': day === currentDate.getDate() }]"
              @click="selectDay(day)"
            >
              {{ day }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="ring-left arrow" @click="changeMonth(-1)"></div>
      <div class="ring-right arrow" @click="changeMonth(1)"></div>
    </div>
     </div>
  </div>
</template>

<script>
import NavTop from '@/views/NavBar/NavTop.vue'

export default {
  components: { NavTop },
  data() {
    return {
      currentDate: new Date(),  // 当前日期
      monthNames: [
        "一月", "二月", "三月", "四月", "五月", "六月", 
        "七月", "八月", "九月", "十月", "十一月", "十二月"
      ],
      yearDate: new Date().getFullYear() // 初始化年份为当前年份
    };
  },
  computed: {
    // 计算圆点颜色
    circleStyle() {
      // 判断当前日期是否为今天，今天是 pink，其他是 red
      const isToday = this.currentDate.toDateString() === new Date().toDateString();
      return {
        backgroundColor: isToday ? '#f36e84' : 'red'
      };
    },
    weeks() {
      const daysInMonth = this.getDaysInMonth(this.currentDate.getMonth() + 1, this.currentDate.getFullYear());
      const firstDay = this.getFirstDayOfMonth(this.currentDate.getMonth() + 1, this.currentDate.getFullYear());
      const weeks = [];
      let week = Array(7).fill(null);
      // 填充第一周
      for (let i = firstDay; i < 7; i++) {
        week[i] = i - firstDay + 1;
      }
      weeks.push(week);
      // 填充后续周
      let currentDay = 8 - firstDay;
      while (currentDay <= daysInMonth) {
        week = Array(7).fill(null);
        for (let i = 0; i < 7; i++) {
          if (currentDay <= daysInMonth) {
            week[i] = currentDay;
            currentDay++;
          }
        }
        weeks.push(week);
      }

      return weeks;
    }
  },
  methods: {
    goToToday() {
        this.currentDate = new Date(); // 设置为当前日期
        this.updateYear(); // 每次选择“今天”时更新年份
    },
    getDaysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    },
    getFirstDayOfMonth(month, year) {
      return new Date(year, month - 1, 1).getDay();
    },
    changeMonth(increment) {
      const newMonth = this.currentDate.getMonth() + increment;
      const daysInNewMonth = this.getDaysInMonth(newMonth + 1, this.currentDate.getFullYear());

      // 设置新的月份
      this.currentDate.setMonth(newMonth);

      // 如果当前日期大于新月份的天数，修正日期为新月份的最大天数
      if (this.currentDate.getDate() > daysInNewMonth) {
        this.currentDate.setDate(daysInNewMonth);
      }
      this.currentDate = new Date(this.currentDate);
      this.updateYear(); // 月份变化时更新年份
    },
    selectDay(day) {
      if (day) {
        this.currentDate.setDate(day);
        this.updateYear(); // 选择日期后更新年份
      }
    },
    updateYear() {
      // 根据 currentDate 更新年份
      this.yearDate = this.currentDate.getFullYear();
    }
  }
};
</script>

<style scoped>
@import '@/assets/less/Calendar.less';
</style>