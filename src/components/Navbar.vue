<template id="Navbar">
      <nav class="navbar bg-info navbar-dark navbar-expand-lg" style="margin-bottom:20px">
          <div class="container">
            <p style="font-size: 40px;float:left;padding:20px;line-height:20px;height:50px">Frameworks et librairies javascript</p>
            <div class="collapse navbar-collapse" style="margin-top:10px" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link :to="{ name: 'listing' }" class="nav-link">Liste des frameworks</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Nouveautés</a>
                </li>
                </ul>
            </div>
         </div>
      </nav>
</template>
<script>

export default {
  name: 'Navbar',
  data () {
    return {
    }
  }
}
</script>
