import { gql } from "@apollo/client";
export const getUserQuery =`
query GetUser($email:String!){
  mongoDB{
    user(by:{email:$email}){
        id 
        name
        avatarUrl
        description
        githubUrl
        linkedinUrl
        description
    }
  }
}
`;

export const createUserMutation=`
mutation CreateUser($input:UserCreateInput!) {
    mongoDB {
      userCreate(input: $input) {
        name
        email
        avatarUrl
        linkedinUrl
        githubUrl
        id
        description
        
      }
    }
  }
`