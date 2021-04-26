<template>
    <div class="home">
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/Createabsen">Tambah Data Absensi</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Waktu Absen</th>
      <th scope="col">Mahasiswa ID</th>
      <th scope="col">Mata Kuliah ID</th>
      <th scope="col">Keterangan</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(ab, index) in Absen" :key="index">
      <td>{{ ab.waktu_absen }}</td>
      <td>{{ ab.mahasiswa_id }}</td>
      <td>{{ ab.matkul_id }}</td>
      <td>{{ ab.keterangan }} </td>
      <td> 
        <button class="btn btn-warning">Edit</button>
        <button class="btn btn-danger"> Delete </button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>

import axios from 'axios'

// @ is an alias to /src
//import Slider from '@/components/Slider.vue'
import { onMounted, ref } from 'vue'
  
export default {
  name: 'Home',
  components: {
    
        
  },

  setup(){
    let absen = ref([])

    onMounted(() => {
      axios.get('localhost:8000/api/absen/')
      .then(response => {
        absen.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function absenDelete(id){
      axios.delete(`localhost:8000/api/absen/${id}`)
      .then(() =>{
        let x = this.absen.map(absen => absen.id).indexOf(id);
        this.absen.splice(x, 1)
      }).catch(error =>{
        console.log(error)
      })
    }

    return  {
      absen,
      absenDelete
    }
  }
    
};
</script>
