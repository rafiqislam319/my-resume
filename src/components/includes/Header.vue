<template>
    <div class="my-header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="/">
                <span class="d-block d-lg-none">Clarence Taylor</span>
                <span class="d-none d-lg-block">
        <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="../../../static/img/me.jpg" alt="">
      </span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link js-scroll-trigger" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link js-scroll-trigger" to="/experience">Experience</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link js-scroll-trigger" to="/education">Education</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link js-scroll-trigger" to="/skill">Skills</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link js-scroll-trigger" to="/interest">Interests</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link js-scroll-trigger" to="/awards">Awards</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
