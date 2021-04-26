<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="update">
      <h5 class="card-title"> Edit Mahasiswa </h5>
  <div class="form-group">
    <label for="exampleInputEmail1">Nama Mahasiswa</label>
    <input type="text" class="form-control"  placeholder="Masukkan Nama Mahasiswa ..." v-model="mahasiswa.nama_mahasiswa">
  </div>
  <div class="alert alert-danger" v-if="validation.nama_mahasiswa">
    {{ validation.nama_mahasiswa=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Alamat</label>
    <input type="text" class="form-control" placeholder="Masukkan Alamat ..." v-model="mahasiswa.alamat">
  </div>
  <div class="alert alert-danger" v-if="validation.alamat">
    {{ validation.alamat=[0] }}
  </div>

    <div class="form-group">
    <label for="exampleInputPassword1">Nomor Telepon</label>
    <input type="text" class="form-control" placeholder="Masukkan Nomor Telepon ..." v-model="mahasiswa.no_tlp">
  </div>
  <div class="alert alert-danger" v-if="validation.no_tlp">
    {{ validation.no_tlp=[0] }}
  </div>

    <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="text" class="form-control" placeholder="Masukkan Email ..." v-model="mahasiswa.email">
  </div>
  <div class="alert alert-danger" v-if="validation.email">
    {{ validation.email=[0] }}
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

    const mahasiswa = reactive({
      nama_mahasiswa: '',
      alamat: '',
      no_tlp: '',
      email: ''
    })

    const validation = ref ([])

    const router = useRouter()

    const route = useRoute()

    onMounted(() =>{
      axios.get(`localhost:8000/api/mahasiswa/${route.params.id}`)
      .then(response => {
        mahasiswa.nama_mahasiswa = response.data.data.nama_mahasiswa
        mahasiswa.alamat = response.data.data.alamat
        mahasiswa.no_tlp = response.data.data.no_tlp
        mahasiswa.email = response.data.data.email
      }).catch(error =>{
        console.log(error)
      })
    })

    function update(){
      let nama_mahasiswa = mahasiswa.nama_mahasiswa
      let alamat = mahasiswa.alamat
      let no_tlp = mahasiswa.no_tlp
      let email = mahasiswa.email

      axios.put(`localhost:8000/api/mahasiswa/${route.params.id}`, {
        nama_mahasiswa: nama_mahasiswa,
        alamat: alamat,
        no_tlp: no_tlp,
        email: email
      }).then(() => {
        router.push({
          name: 'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }

    return {
      mahasiswa,
      validation,
      router,
      update,
      route
    }

  },
}
</script>