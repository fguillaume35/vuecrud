<template>
 <div class="modal" id="confirmDelete">
	<div class="modal-window">
	  <p>Supprimer cet enregistrement ?</p>
	  <div class="actions">
		 <button class="cancel" v-on:click="onCancel()">Annuler</button>
		 <button class="confirm" v-on:click="onConfirm()">Confirmer</button>
	  </div>
	</div>
 </div>
</template>
<script>
    export default {
    name: 'confirmDelete',
    methods: {
        onConfirm() {
            this.$emit("confirm");
        },
        onCancel () {
            this.$emit("cancel");
        }
    }
    }
</script>
<style Scoped>
    #confirmDelete.modal {
     position: fixed;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0;
     background: rgba(0, 0, 0, .5);
     display: block;
    }
    
    .modal-window {
     position: absolute;
     top: 50%;
     left: 50%;
     transition: .5s;
     width: 25%;
     min-width: 300px;
     max-width: 600px;
     background: white;
     box-shadow: 0 0 10px rgba(0, 0, 0, .5);
     transform: translate(-50%, -50%);
     padding: 1em;
     color: black;
     text-align: center;
    }
    
    .actions button {
     font-size: inherit;
     margin: 4px;
     border: none;
     padding: 6px 8px;
     cursor: pointer;
    }
    
    .actions .cancel {
     background: darkred;
     color: white;
    }
    
    .actions .confirm {
     background: darkcyan;
     color: white;
    }
    
    .appear-enter {
     opacity: 0;
    }
    
    .appear-enter .modal-window {
     transform: translate(-75%, -50%);
    }
    
    .appear-enter-active {
     transition: .5s;
    }
    
    .appear-leave-active .modal-window {
     transform: translate(0, -50%);
    }
    
    .appear-leave-active {
     opacity: 0;
     transition: .5s;
    }
</style>