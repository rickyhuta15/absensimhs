<template>
    <div class="home">
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/Creatematkul">Tambah Matakuliah</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nama Mata Kuliah</th>
      <th scope="col">SKS</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(matkul, index) in Matkul" :key="index">
      <td>{{ matkul.nama_matakuliah }}</td>
      <td>{{ matkul.sks }}</td>
      <td> 
        <button class="btn btn-warning" :to="{name: 'Editmatkul', params:{id:matkul.id}}">Edit</button>
        <button @click.prevent="matkulDelete(matkul.id)" class="btn btn-danger"> Delete </button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'
export default {
  name: 'Home',
  components: {
    
},
setup(){
    let matkul = ref([])

    onMounted(() => {
      axios.get('localhost:8000/api/matkul/')
      .then(response => {
        matkul.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function matkulDelete(id){
      axios.delete(`localhost:8000/api/matkul/${id}`)
      .then(() =>{
        let x = this.matkul.map(matkul => matkul.id).indexOf(id);
        this.matkul.splice(x, 1)
      }).catch(error =>{
        console.log(error)
      })
    }

    return  {
      matkul,
      matkulDelete
    }
  }
    
};
</script>