<template>
  <div class="timeline row">
    <div class="timeline-item row col-12" v-for="item in timelineItems" :key="item.year">
      <div class="timeline-year col-2 ">{{ item.year }}</div>
      <div class="timeline-content row col-10">
        <div class="timeline-separator"></div>
        <div class="content row">
          <div v-for="(text, index) in item.texts" :key="index" class="text-block">
            <div class="avatars-text row">
              <div class="avatars column">
                <q-avatar v-if="text.image" >
                  <NuxtImg format="webp" :src="text.image" >
                </q-avatar>
              </div>
              <div class="text-content column">
                <div class="text">
                  <h5 class="text-time">{{text.time}}</h5>
                  <div v-for="(line, i) in text.text" :key="i">
                    <p>{{line}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const timelineItems = ref([
  // ... your data
])
</script>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.timeline-year{
  height: 100%;
}

.timeline-item {
  display: flex;
  flex: row;
  width: 100%;
}

.timeline-separator {
  position: relative;
  width: 2px;
  height: 100%;
  background: red;
  z-index: -1;
}

.timeline-separator::before {
  content: "";
  position: absolute;
  top: 0;
  left: -7px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: black;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20%;
}

.avatars-text {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
}

.text-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.text-content {
  display: flex;
  flex-direction: column;
}

.avatars {
  position: absolute;
  top: -3%;
  left: -270px;
}

.timeline-content{
  position: relative;
  z-index: -1;
}
</style>
