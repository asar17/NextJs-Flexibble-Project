import { graph, config } from '@grafbase/sdk'

// Welcome to Grafbase!
//
// Configure authentication, data sources, resolvers and caching for your GraphQL API.

const g = graph.Standalone()



// @ts-ignore
const project = g.type('Project', {
  title: g.string(),
  //.length({ min: 3 }),
  description: g.string(), 
  image: g.url(),
  liveSiteUrl: g.url(), 
  githubUrl: g.url(), 
  category: g.string()
  //.search(),
  //createdBy: g.relation(() => User),
})


const user = g.type('User', {
  name: g.string(),
  //.length({min: 2, max: 100 }),
  email: g.string(),
  //.unique(),
  avatarUrl: g.url(),
  description: g.string(),
  //.length({ min: 2, max: 1000 }).optional(),
  githubUrl: g.url(),
  //.optional(),
  linkedinUrl: g.url(),
  //.optional(), 
 projects: g.ref(project).list().optional(),
})

export default config({
  graph: g,

})
