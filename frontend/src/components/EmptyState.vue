<template>
  <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center my-6">
    <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-100 shadow-inner">
      <SearchX class="w-7 h-7" />
    </div>
    <h3 class="text-base font-bold text-slate-800 mb-1.5">Tidak Ada Data Panggilan Ditemukan</h3>
    <p class="text-xs text-slate-500 max-w-md mx-auto mb-5 leading-relaxed">
      Tidak ada rekaman call monitoring yang cocok dengan kombinasi kata kunci, rentang periode tanggal, atau filter sentimen yang sedang dipilih.
    </p>
    <button
      @click="$emit('reset')"
      class="inline-flex items-center px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm transition"
    >
      <RotateCcw class="w-3.5 h-3.5 mr-1.5" />
      Reset Semua Filter
    </button>
  </div>
</template>

<script setup>
import { SearchX, RotateCcw } from 'lucide-vue-next'

defineEmits(['reset'])
</script>
