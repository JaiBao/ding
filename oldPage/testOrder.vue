<template>
  <div class="orderArea">
    <h5>Step1:請選擇日期</h5>
    <h5>灰色已訂滿</h5>
    <p class="redBoxInfo" style="margin: 0">每日上限一百套</p>

    <!-- Quasar 日期選擇器 -->
    <q-date v-model="selectedDate" :options="dateOptions" @input="onDateChange" style="margin-bottom: 2%" />

    <div v-if="selectedDate">
      <!-- 當天已訂購的總數說明 -->
      <div class="text">
        <h5>Step2:請選擇時段</h5>
        <div>您選擇的 {{ selectedDate }} 已訂購了 {{ totalOrdersForSelectedDate }} 套。</div>
        <div>請選擇時段：</div>
        <!-- 紅色框框的說明 -->
        <div class="redBoxInfo">紅色時段代表當日已經訂滿</div>
      </div>

      <div class="timeSlot">
        <q-btn
          v-for="slot in timeSlots"
          :key="slot"
          :color="getTimeSlotOrderCount(selectedDate, slot) >= 10 ? 'red' : 'primary'"
          @click="selectTime(slot)"
          :disable="getTimeSlotOrderCount(selectedDate, slot) >= 10">
          {{ slot }}
        </q-btn>
      </div>

      <div class="text" v-if="selectedTime">
        <h5>Step3:請選擇訂購數量</h5>
        <div>您選擇了 {{ selectedDate }} 的 {{ selectedTime }} 時段。</div>
        <div>該時段已訂購了 {{ getTimeSlotOrderCount(selectedDate, selectedTime) }} 套。</div>

        <!-- 新增訂購選項和按鈕 -->
        <div>我想訂購:</div>
        <div class="ex">
          <q-select outlined v-model="orderCount" :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" style="width: 80%; margin-bottom: 1%" />
          <div style="font-size: 2rem">套</div>
        </div>
        <q-btn v-if="canAddOrder" @click="addOrder" color="primary">新增訂購</q-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
const selectedDate = ref(null)
const selectedTime = ref(null)
const orderCount = ref(1) // 默認訂購數量

const timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']

const orders = reactive({})

const dateOptions = computed(() => {
  return date => {
    const parsedDate = new Date(date)
    const dayOfWeek = parsedDate.getUTCDay()

    // 若日期為星期六(6)或星期日(0)，則不可選擇
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return false
    }

    let total = 0
    if (orders[date]) {
      for (let time in orders[date]) {
        total += orders[date][time]
      }
    }
    return total < 100
  }
})

function onDateChange() {
  selectedTime.value = null
}

function selectTime(time) {
  selectedTime.value = time
}

const canAddOrder = computed(() => {
  const currentOrders = getTimeSlotOrderCount(selectedDate.value, selectedTime.value)
  return currentOrders + orderCount.value <= 10
})
const totalOrdersForSelectedDate = computed(() => {
  let total = 0
  if (orders[selectedDate.value]) {
    for (let time in orders[selectedDate.value]) {
      total += orders[selectedDate.value][time]
    }
  }
  return total
})

function getTimeSlotOrderCount(date, time) {
  if (orders[date] && orders[date][time]) {
    return orders[date][time]
  }
  return 0
}

function addOrder() {
  if (!orders[selectedDate.value]) {
    orders[selectedDate.value] = {}
  }
  if (!orders[selectedDate.value][selectedTime.value]) {
    orders[selectedDate.value][selectedTime.value] = 0
  }
  orders[selectedDate.value][selectedTime.value] += orderCount.value
}
</script>

<style lang="scss" scoped>
/* 一些基本的樣式 */
.timeSlot {
  /* margin-top: 20px; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 8%;
  /* align-items: center; */
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 2%;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  padding: 8%;
}
.orderArea {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  h5 {
    margin: 0;
    text-align: center;
    margin-bottom: 5px;
  }
}

.redBoxInfo {
  color: red;
  margin-top: 10px;
}
.ex {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
