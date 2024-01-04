import { graph, config } from '@grafbase/sdk'


const g = graph.Standalone()


const Project= g.type('Project',{
  title: g.string(),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string(),
  //createdBy: g.ref(User),
})

const User= g.type('User',{
  name: g.string(),
  email: g.string(),
  avatarUrl: g.string(),
  description: g.string().optional(),
  githubUrl: g.string().optional(),
  linkedInUrl: g.string().optional(),
  projects: g.ref(Project).list().optional(),

})
export default config({
  schema: g,

})
