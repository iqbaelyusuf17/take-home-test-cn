<template>
  <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-2">
    <!-- Total Records Count Saja -->
    <div class="text-xs text-slate-500 font-medium order-2 sm:order-1">
      Total: <span class="font-bold text-slate-800">{{ meta.total_records }}</span> data panggilan
    </div>

    <!-- Tombol Navigasi Paginasi (AC-3, AC-11) -->
    <div class="inline-flex items-center space-x-2 order-1 sm:order-2">
      <!-- Tombol Sebelumnya (Previous) -->
      <button
        @click="$emit('change-page', meta.page - 1)"
        :disabled="!meta.has_previous"
        class="inline-flex items-center px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all"
        :class="
          meta.has_previous
            ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 shadow-sm cursor-pointer'
            : 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
        "
      >
        <ChevronLeft class="w-4 h-4 mr-1" />
        Sebelumnya
      </button>

      <!-- Tombol Selanjutnya (Next) -->
      <button
        @click="$emit('change-page', meta.page + 1)"
        :disabled="!meta.has_next"
        class="inline-flex items-center px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all"
        :class="
          meta.has_next
            ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 shadow-sm cursor-pointer'
            : 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
        "
      >
        Selanjutnya
        <ChevronRight class="w-4 h-4 ml-1" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

defineProps({
  meta: {
    type: Object,
    required: true,
  },
})

defineEmits(['change-page'])
</script>
