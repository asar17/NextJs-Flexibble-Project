import { graph, connector, config } from '@grafbase/sdk'

// Welcome to Grafbase!
//
// Configure authentication, data sources, resolvers and caching for your GraphQL API.

const g = graph.Standalone()


const mongodb = connector.MongoDB('MongoDB', {
  url: 'mongodb+srv://aelhaidary2019:789000@cluster0.ehpiiw6.mongodb.net/',
  apiKey: 'grafbase',
  dataSource: 'Cluster0',
  database: 'database_flex',
})

g.datasource(mongodb)



// @ts-ignore
const project=mongodb.model('Project', {
      title: g.string().length({ min: 3 }),
      description: g.string(), 
      image: g.url(),
      liveSiteUrl: g.url(), 
      githubUrl: g.url(), 
      category: g.string(),
      //.search(),
     //createdBy: g.ref(user),
    }).collection('project')


// @ts-ignore
const user=mongodb.model('User', {
      name: g.string().length({ min: 2, max: 100 }),
      email: g.string().unique(),
      avatarUrl: g.url(),
      description: g.string().length({ min: 2, max: 1000 }).optional(),
      githubUrl: g.url().optional(),
      linkedinUrl: g.url().optional(), 
      //projects: g.relation(()=>project).list().optional(),

  }) .collection('user')

export default config({
  graph: g,

})
