import { graph, auth, connector, config } from '@grafbase/sdk'

// Welcome to Grafbase!
//
// Configure authentication, data sources, resolvers and caching for your GraphQL API.

const g = graph.Standalone()


const mongodb = connector.MongoDB('MongoDB', {
  url: 'mongodb://atlas-sql-659763ea7dc99a684b468386-dsnks.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin',
  apiKey: 'SECRET',
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

const jwt=auth.JWT({
  issuer:'grafbase',
  secret:'A/f/pbn/l7NiCliPr9OS2SzmoACxvpQBF62rDHTP1KA='
})

export default config({
  graph: g,
  auth:{
    providers:[jwt],
    rules:(rules)=> rules.private()
  }

})
