export const userQuery = `query ($id: ID!,){
  User(id: $id) {
    name
    email
  }
}`;
