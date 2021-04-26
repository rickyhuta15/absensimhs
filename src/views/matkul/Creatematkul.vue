<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="store">
      <h5 class="card-title"> Tambah Mata Kuliah </h5>
  <div class="form-group">
    <label for="exampleInputEmail1">Nama Mata Kuliah</label>
    <input type="text" class="form-control"  placeholder="Masukkan Nama Mata Kuliah ..." v-model="matkul.nama_matakuliah">
  </div>
  <div class="alert alert-danger" v-if="validation.nama_matakuliah">
    {{ validation.nama_matakuliah=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">SKS</label>
    <input type="text" class="form-control" placeholder="Masukkan SKS ..." v-model="matkul.sks">
  </div>
  <div class="alert alert-danger" v-if="validation.sks">
    {{ validation.sks=[0] }}
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </div>
  </div>
  
</template>

<script>
import { reactive, ref } from 'vue'
import {useRouter } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const matkul = reactive({
      nama_matakuliah: '',
      sks: ''
    })

    const validation = ref ([])

    const router = useRouter()

    function store(){
      let nama_matakuliah = matkul.nama_matakuliah
      let sks = matkul.sks

      axios.post('localhost:8000/api/matkul/', {
        nama_matakuliah: nama_matakuliah,
        sks: sks,
      }).then(() => {
        router.push({
          name: 'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }

    return {
      matkul,
      validation,
      router,
      store
    }

  },
}
</script>