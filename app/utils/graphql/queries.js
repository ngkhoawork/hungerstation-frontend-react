export const userQuery = `query ($id: ID!,){
  User(id: $id) {
    id
    name
    email
  }
}`;
