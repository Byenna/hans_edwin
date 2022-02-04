Vue.component('nav_bar',{

    template: `
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-transparant fixed-top ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="/assets/images/website/logo.png"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="home fs-2 text-white  nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class=" over_ons fs-2 text-white  nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Over ons
            </a>
            <ul class="fs-3 dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="about_edwin.html">Edwin Tepper</a></li>
              <li><a class="dropdown-item" href="about_hans.html">Hans Krens</a></li>
              <li><a class="dropdown-item" href="about_geert.html">Geert Boer</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="onze_visie fs-2 text-white  nav-link" href="#">Onze visie</a>
          </li>
          <li class="nav-item dropdown">
            <a class="informatie fs-2 text-white  nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Informatie
            </a>
            <ul class="fs-3 dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Soorten in het voedselbos</a></li>
              <li><a class="dropdown-item" href="#">Soorten die wij vermeerderen</a></li>
              <li><a class="dropdown-item" href="#">Onze werkwijze</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `
});