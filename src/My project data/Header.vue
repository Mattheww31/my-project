<template>
  <div class="container">
    <nav class="navbar navbar-default">


      <div class="container-fluid">
          <div class="navbar-header">
              <router-link to="/" ><a class="navbar-brand">Pokemon Collector</a></router-link>
          </div>

          <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                  <router-link to="/Collection"><a class="navbar-brand">Collection</a></router-link>
                  <router-link to="/Store"><a class="navbar-brand">Pokemon Store</a></router-link>
              </ul>
              <strong class="navbar-text navbar-right">Pokemon: 0</strong>
              <ul class="nav navbar-nav navbar-right">
                  <li class="dropdown open">
                      <a
                              href="#"
                              class="dropdown-toggle"
                              data-toggle="dropdown"
                              role="button"
                              aria-haspopup="true"
                              aria-expanded="false">Save & Load <span class="caret"></span></a>
                      <ul class="dropdown-menu">
                          <li><a href="#">Save Data</a></li>
                          <li><a href="#">Load Data</a></li>
                      </ul>
                  </li>
              </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
  </div>
</template>
