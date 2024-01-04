export const getUserQuery =`
query GetUser($email:String!){
    user(by:{email:$email}){
        id 
        name
        avatarUrl
        githubUrl
        linkedInUrl
        description
    }

}
`;

export const createUserMutation=`
mutation CreateUser($input:UserCreateInput!){
    userCreate(input:$input){
        user{
            name
            email
            avatarUrl
            linkedInUrl
            githubUrl
            id
            description
        }

    }

}
`