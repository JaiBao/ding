<template>
  <ClientOnly>
    <FullCalendar :options="calendarOptions" />
  </ClientOnly>
</template>

<script setup>
import { ref } from 'vue'
import '@fullcalendar/core/vdom' // solve problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

const currentEvents = ref([]) // Reactive data

const handleWeekendsToggle = () => {
  calendarOptions.value.weekends = !calendarOptions.value.weekends
}

const handleDateSelect = selectInfo => {
  let title = prompt('輸入標題')
  let calendarApi = selectInfo.view.calendar

  calendarApi.unselect()

  if (title) {
    calendarApi.addEvent({
      id: Date.now().toString(), // Temporary ID generation, replace with your method if necessary
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    })
  }
}

const handleEventClick = clickInfo => {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove()
  }
}

const handleEvents = events => {
  currentEvents.value = events
}

const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  initialView: 'dayGridMonth',
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  eventColor: 'blue',
  select: handleDateSelect,
  eventClick: handleEventClick,
  eventsSet: handleEvents
})
</script>
