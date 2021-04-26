<template>
    <div class="home">
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/Createmhs">Tambah Mahasiswa</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nama Mahasiswa</th>
      <th scope="col">Alamat</th>
      <th scope="col">Nomor Telepon</th>
      <th scope="col">Email</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(mhs, index) in Mahasiswa" :key="index">
      <td>{{ mhs.nama_mahasiswa }}</td>
      <td>{{ mhs.alamat }}</td>
      <td>{{ mhs.no_tlp }}</td>
      <td>{{ mhs.email }} </td>
      <td> 
        <router-link class="btn btn-warning" :to="{name: 'Editmhs', params:{id:mhs.id}}">Edit</router-link>
        <button @click.prevent="MahasiswaDelete(mhs.id)" class="btn btn-danger"> Delete </button>
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
    let Mahasiswa = ref([])

    onMounted(() => {
      axios.get('localhost:8000/api/Mahasiswa/')
      .then(response => {
        Mahasiswa.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function MahasiswaDelete(id){
      axios.delete(`localhost:8000/api/Mahasiswa/${id}`)
      .then(() =>{
        let x = this.Mahasiswa.map(Mahasiswa => Mahasiswa.id).indexOf(id);
        this.Mahasiswa.splice(x, 1)
      }).catch(error =>{
        console.log(error)
      })
    }

    return  {
      Mahasiswa,
      MahasiswaDelete
    }
  }
    
};
</script>