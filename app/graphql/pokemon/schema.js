import axios from 'axios'

const typeDefs = `
  type Pokemon {
    id: String!
    name: String!
    nameJP: String!
    type: [String]
    species: String
    height: Float
    weight: Float
    generationId: Int!
  }
`

const query = `
  getPokemon: [Pokemon]
`

const resolvers = {
  Query: {
    getPokemon(root, args, context) {
      return axios.get('http://localhost:3002/pokemon', {})
      .then(result => result.data)
    }
  }
}

export  {
  typeDefs,
  query,
  resolvers
}