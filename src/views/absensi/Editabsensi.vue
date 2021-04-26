<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="update">
      <h5 class="card-title"> Edit Absensi </h5>
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
    <input type="text" class="form-control" placeholder="Masukkan Matakuliah ID ..." v-model="absen.matkul_id">
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
import { onMounted, reactive, ref } from 'vue'
import {useRouter } from 'vue-router'
import axios from 'axios'
import {useRoute} from 'vue-router'
export default {
  setup() {

    const absen = reactive({
      waktu_absen: '',
      mahasiswa_id: '',
      matkul: '',
      sks: '',
      keterangan: ''
    })

    const validation = ref ([])

    const router = useRouter()

    const route = useRoute()

    onMounted(() =>{
      axios.get(`localhost:8000/api/absen/${route.params.id}`)
      .then(response => {
        absen.waktu_absen = response.data.data.waktu_absen
        absen.mahasiswa_id = response.data.data.mahasiswa_id
        absen.matkul_id = response.data.data.matkul_id
        absen.sks = response.data.data.sks
        absen.keterangan = response.data.data.keterangan
      }).catch(error =>{
        console.log(error)
      })
    })

    function update(){
      let waktu_absen = absen.waktu_absen
      let mahasiswa_id = absen.mahasiswa_id
      let matkul_id = absen.matkul_id
      let sks = absen.sks
      let keterangan = absen.keterangan

      axios.put(`localhost:8000/api/absen/${route.params.id}`, {
        waktu_absen: waktu_absen,
        mahasiswa_id: mahasiswa_id,
        matkul_id: matkul_id,
        sks: sks,
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
      update,
      route
    }

  },
}
</script>