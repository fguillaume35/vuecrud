<template>
  <div id="Edit">
      <h3>          
        <span v-if="$route.params.id == '0'">
            Création
        </span>
        <span v-else>
            Modification
        </span>
      </h3>
      <form  v-on:submit.prevent="AddOrUpdate">
        <div class="form-group" >
          <label for="add-name">Nom :</label>
          <input class="form-control" id="add-nom" v-model="newLib.nom" required/>
        </div>
        <div class="form-group">
          <label for="add-description">Description :</label>
          <textarea class="form-control" id="add-categorie" rows="10" v-model="newLib.categorie"></textarea>
        </div>
         <div class="form-group">
          <label for="add-installation">Installation :</label>
          <textarea class="form-control" id="add-installation" rows="10" v-model="newLib.installation"></textarea>
        </div>
         <router-link class="btn btn-success" to="/listing">Retour</i></router-link>
         <button type="submit" class="btn btn-info" style="margin-left:10px">Valider</button>
      </form>
  </div>
</template>

<script>
import { db } from '../config/db';
let libsRef = db.ref('libs');

export default {
  name: 'Edit',
  firebase: {
    libs: libsRef,
    libsObj: {
      source: libsRef,
      asObject: true
    }
  },
    data () {
      return {
          newLib: {}
      }
  },
    created() {
     let librairie = this.libsObj[this.$route.params.id];
     if(this.$route.params.id == '0')
     {
        this.newLib = {
        nom: '',
        categorie: '',
        installation:''
      };
     }
     else
     {
      this.newLib = {
        nom: librairie.nom,
        categorie: librairie.categorie,
        installation : librairie.installation
      };
     }
  },
     methods: {
      AddOrUpdate: function () {
        if(this.$route.params.id==0)
        {
          this.$firebaseRefs.libs.push({
              nom: this.newLib.nom,
              categorie: this.newLib.categorie,
              installation : this.newLib.installation
              });
          this.newLib.nom = '';
          this.newLib.categorie = '';
          this.newLib.installation = '';
        }
        else
        {
          this.$firebaseRefs.libs.child(this.$route.params.id).set(this.newLib);
        }
        this.$router.push('/listing');
      }
  }
}
</script>



