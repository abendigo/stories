<app-header-layout>
  <app-header slot="header" reveals effects="waterfall">
    <app-toolbar>
      <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
      <div main-title>Title</div>
    </app-toolbar>
  </app-header>
</app-header-layout>

<script>
  import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
  import '@polymer/app-layout/app-drawer/app-drawer.js';
  import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
  import '@polymer/app-layout/app-header/app-header.js';
  import '@polymer/app-layout/app-header-layout/app-header-layout.js';
  import '@polymer/app-layout/app-toolbar/app-toolbar.js';
</script>

 <style>
  app-header {
    background-color: #00897B;
    color: #fff;
  }
</style>
