<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="update">
      <h5 class="card-title"> Edit Mata Kuliah </h5>
  <div class="form-group">
    <label for="exampleInputEmail1">Nama Mata Kuliah</label>
    <input type="text" class="form-control"  placeholder="Masukkan Nama Mata Kuliah ..." v-model="matkul.nama_matakuliah">
  </div>
  <div class="alert alert-danger" v-if="validation.nama_matakuliah">
    {{ validation.nama_matakuliah=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">SKS</label>
    <input type="text" class="form-control" placeholder="Masukkan Nomor Telepon" v-model="matkul.sks">
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
import { onMounted, reactive, ref } from 'vue'
import {useRouter } from 'vue-router'
import axios from 'axios'
import {useRoute} from 'vue-router'
export default {
  setup() {

    const matkul = reactive({
      nama_matakuliah: '',
      sks: '',
    })

    const validation = ref ([])

    const router = useRouter()

    const route = useRoute()

    onMounted(() =>{
      axios.get(`localhost:8000/api/matkul/${route.params.id}`)
      .then(response => {
        matkul.nama_matakuliah = response.data.data.nama_matakuliah
        matkul.sks = response.data.data.sks
      }).catch(error =>{
        console.log(error)
      })
    })

    function update(){
      let nama_matakuliah = matkul.nama_matakuliah
      let sks = matkul.sks

      axios.put(`localhost:8000/api/matkul/${route.params.id}`, {
        nama_matakuliah: nama_matakuliah,
        sks: sks
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
      update,
      route
    }

  },
}
</script>