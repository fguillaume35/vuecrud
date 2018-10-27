
<template>
  <div id="Listing">
  <ConfirmDelete  v-if='confirmModal' v-on:confirm="deleteItem()" v-on:cancel="cancelDelete()" ></ConfirmDelete>
    <div class="actions" >
      <router-link class="btn btn-info" :to="{name:'edit', params:{id:0}}" id="ajout"  ><i  class="fa fa-plus"> Ajouter</i></router-link>
    </div>
    <div class="filters row">
      <div class="form-group col-sm-3">
        <label for="search-element">Recherche : </label>
        <input v-model="searchKey" class="form-control" id="search-element"/>
      </div>
    </div>
    <table class="table ">
      <thead>
      <tr>
        <th width="40%">Nom</th>
        <th width="40%">Catégorie</th>
        <th width="20%">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="lib in filteredLibs" :key="lib['.key']" >
        <td>
          {{ lib.nom }}
        </td>
        <td>{{ lib.categorie }}</td>
        <td>
          <router-link class="btn btn-info btn-sm" :to="{name:'edit', params: {id: lib['.key']}}">Edition</router-link>
          <button class="btn btn-danger btn-sm" style="margin-left:10px" v-on:click="confirmDelete(lib['.key'])" id="myBtn">Suppression</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  
</template>

<script>
import { db } from '../config/db';
import ConfirmDelete from '@/components/ConfirmDelete'
import 'bootstrap';
import jQuery from 'jquery'
// import plugins individually - require exports-loader
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/tooltip'
import 'bootstrap-confirmation2'

// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss'

// jquery
window.jQuery = window.$ = jQuery

let libsRef = db.ref('libs');

export default {
  name: 'Listing',
  components :{
    ConfirmDelete
  },
  firebase: {
    libs: libsRef
  },
  data : function () { 
    return {
        show:false,
        confirmModal: false,
		selectedItem: '',
        newLib: {
          nom: '',
          categorie: '',
          installation:''
        },
        libs:[],
        searchKey:""
      };
  },
  computed: {
    filteredLibs() {
      return this.libs.filter(lib => {
        return lib.nom.indexOf(this.searchKey) > -1;
      });
    }
  },

  methods: {

    confirmDelete(key) {
		this.selectedItem = key;
		this.confirmModal = true;
    },
    cancelDelete() {
        this.confirmModal = false;
        this.selectedItem = '';
    },
    deleteItem() {
        this.confirmModal = false;
        this.$firebaseRefs.libs.child(this.selectedItem).remove();
    }

  }
}

</script>
