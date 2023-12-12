import { usersService } from "../services/users.service";

class UsersController {
  findAllUser = async (req, res) => {
    try {
      const result = await usersService.findAll();
      res.status(200).json({users: result});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  findUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await usersService.findById(id);
      res.status(200).json({user: result});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}
