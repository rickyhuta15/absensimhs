import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AbsenIndex from '../views/absensi/Index.vue'
import MhsIndex from '../views/mahasiswa/Index.vue'
import MatkulIndex from '../views/matkul/Index.vue'
import Createabsen from '../views/absensi/Createabsen.vue'
import Createmhs from '../views/mahasiswa/Createmhs.vue'
import Creatematkul from '../views/matkul/Creatematkul.vue'
import Editmhs from '../views/mahasiswa/Editmhs.vue'
import Editabsen from '../views/absensi/Editabsen.vue'
import Editmatkul from '../views/matkul/Editmatkul.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/absensi',
    name: 'Absensi',
    component: AbsenIndex
  },

  {
    path: '/mahasiswa',
    name: 'Mahasiswa',
    component: MhsIndex
  },

  {
    path: '/matkul',
    name: 'Matkul',
    component: MatkulIndex
  },

  {
    path: '/Createabsen',
    name: 'Absen',
    component: Createabsen
  },

  {
    path: '/Createmhs',
    name: 'Mahasiswa',
    component: Createmhs
  },

  {
    path: '/Creatematkul',
    name: 'Mata Kuliah',
    component: Creatematkul
  },

  {
    path: '/Editmhs/:id',
    name: 'Editmhs',
    component: Editmhs
  },

  {
    path: '/Editabsen/:id',
    name: 'Editabsen',
    component: Editabsen
  },

  {
    path: '/Editmatkul/:id',
    name: 'Editmatkul',
    component: Editmatkul
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
