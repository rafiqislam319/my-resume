import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import About from '../components/home/About'
import Experience from '../components/home/Experience'
import Education from '../components/home/Education'
import Skill from '../components/home/Skill'
import Interests from '../components/home/Interests'
import Awards from '../components/home/Awards'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/experience',
      component: Experience
    },
    {
      path: '/education',
      component: Education
    },
    {
      path: '/skill',
      component: Skill
    },
    {
      path: '/interest',
      component: Interests
    },
    {
      path: '/awards',
      component: Awards
    }
  ],
  mode: 'history'
})
