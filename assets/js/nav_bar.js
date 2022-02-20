Vue.component('nav_bar', {

  template: `
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-transparant fixed-top ">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html"><img class="logo" src="/assets/images/website/logo.png"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="home fs-1 text-white  nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class=" over_ons fs-1 text-white  nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Over ons
            </a>
            <ul class="fs-3 dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="about_edwin.html">Edwin Tepper</a></li>
              <li><a class="dropdown-item" href="about_hans.html">Hans Krens</a></li>
              <li><a class="dropdown-item" href="about_gerrit.html">Gerrit Keijzer</a></li>
            </ul>
          </li>

          <li class="nav-item ">
          <a class="informatie fs-1 text-white  nav-link" href="planten.html" >
           Onze planten
          </a>
         
        </li>

         
          <li class="nav-item dropdown">
            <a class="informatie fs-1 text-white  nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Informatie
            </a>
            <ul class="fs-3 dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="index.html#about-container">Visie</a></li>
              <li><a class="dropdown-item" href="#">Werkwijze</a></li>
              <li><a class="dropdown-item" href="contact.html">Contact</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `
});