import { users } from "../../../usersData";

export default function handler(req, res){
    const {userId} = req.query;
    const user = users.find((user) => user.id == parseInt(userId))
    res.status(200).json(user)
}