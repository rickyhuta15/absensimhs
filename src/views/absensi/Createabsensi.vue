<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="store">
      <h5 class="card-title"> Tambah Mahasiswa </h5>
  <div class="form-group">
    <label for="exampleInputEmail1">Waktu Absen</label>
    <input type="text" class="form-control"  placeholder="Masukkan Waktu Absen ..." v-model="absen.waktu_absen">
  </div>
  <div class="alert alert-danger" v-if="validation.waktu_absen">
    {{ validation.waktu_absen=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Mahasiswa ID</label>
    <input type="text" class="form-control" placeholder="Masukkan Mahasiswa ID ..." v-model="absen.mahasiswa_id">
  </div>
  <div class="alert alert-danger" v-if="validation.mahasiswa_id">
    {{ validation.mahasiswa_id=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Mata Kuliah ID</label>
    <textarea type="text" class="form-control" placeholder="Masukkan Mata Kuliah ID ..." v-model="absen.matkul_id"> </textarea>
  </div>
  <div class="alert alert-danger" v-if="validation.matkul_id">
    {{ validation.matkul_id=[0] }}
  </div>

    <div class="form-group">
    <label for="exampleInputPassword1">Keterangan</label>
    <input type="text" class="form-control" placeholder="Masukkan Keterangan ..." v-model="absen.keterangan">
  </div>
  <div class="alert alert-danger" v-if="validation.keterangan">
    {{ validation.keterangan=[0] }}
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

    const absen = reactive({
      waktu_absen: '',
      mahasiswa_id: '',
      matkul_id: '',
      keterangan: ''
    })

    const validation = ref ([])

    const router = useRouter()

    function store(){
      let waktu_absen = absen.waktu_absen
      let mahasiswa_id = absen.mahasiswa_id
      let matkul_id = absen.matkul_id
      let keterangan = absen.keterangan

      axios.post('localhost:8000/api/absen/', {
        waktu_absen: waktu_absen,
        mahasiswa_id: mahasiswa_id,
        matkul_id: matkul_id,
        keterangan: keterangan
      }).then(() => {
        router.push({
          name: 'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }

    return {
      absen,
      validation,
      router,
      store
    }

  },
}
</script>