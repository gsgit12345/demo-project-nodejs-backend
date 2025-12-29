const users=require("../data/users")


console.log(users)

function fetchAllUsers()
{
    return users;
}

function fetchUserById(id)
{
    return (users.find(user=>user.id==Number(id)))

}

module.exports={fetchAllUsers,fetchUserById};