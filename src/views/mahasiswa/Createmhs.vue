<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="store">
      <h5 class="card-title"> Tambah Mahasiswa </h5>
  <div class="form-group">
    <label for="exampleInputEmail1">Nama Mahasiswa</label>
    <input type="text" class="form-control"  placeholder="Masukkan Nama Mahasiswa ..." v-model="mahasiswa.nama_mahasiswa">
  </div>
  <div class="alert alert-danger" v-if="validation.nama_mahasiswa">
    {{ validation.nama_mahasiswa=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Nomor Telepon</label>
    <input type="text" class="form-control" placeholder="Masukkan Nomor Telepon" v-model="mahasiswa.no_tlp">
  </div>
  <div class="alert alert-danger" v-if="validation.no_tlp">
    {{ validation.no_tlp=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Alamat</label>
    <textarea type="text" class="form-control" placeholder="Masukkan Alamat" v-model="mahasiswa.alamat"> </textarea>
  </div>
  <div class="alert alert-danger" v-if="validation.alamat">
    {{ validation.alamat=[0] }}
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
import { reactive, ref } from 'vue'
import {useRouter } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const mahasiswa = reactive({
      nama: '',
      no_tlp: '',
      alamat: '',
      email: ''
    })

    const validation = ref ([])

    const router = useRouter()

    function store(){
      let nama = mahasiswa.nama
      let no_tlp = mahasiswa.no_tlp
      let alamat = mahasiswa.alamat
      let email = mahasiswa.email

      axios.post('localhost:8000/api/mahasiswa/', {
        nama: nama,
        no_tlp: no_tlp,
        alamat: alamat,
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
      store
    }

  },
}
</script>