import Education from './resume/education/Education.vue'
import Projects from './resume/projects/Projects.vue'
import Work from './resume/work/Work.vue'
import TeachingExperience from './resume/teaching/TeachingExperience.vue'
import Welcome from './resume/Welcome.vue'
import ContactMe from './resume/about/ContactMe.vue'


export const routes = [
    {path: '/', component: Welcome},
    {path: '/education', component: Education},
    {path: '/work', component: Work},
    {path: '/teaching', component: TeachingExperience},
    {path: '/projects', component: Projects},
    {path: '/contact', component: ContactMe},
    {path: '*', component: Welcome}
]