
const {
  checkUserAlreadyExists,
  createUser,
  getUserPassword,
  getUserById
} = require('../models/users.js');
const { newToken, checkPassword } = require('../utils/auth');

const signUp = async(req, res) => {
  const { email, password, first_name, last_name, address } = req.body;

  try {
    const user = await checkUserAlreadyExists(email);

    if (user.rows.length > 0) {
      return res.status(401).json({ msg: 'User already exists' });
    }

    const newUser = await createUser(email, password, first_name, last_name, address);

    const token = newToken(newUser.rows[0].id);

    return res.json({token});
  } catch (err) {
    console.error('SIGN_UP', err);
    res.sendStatus(400);
  }
};

const signIn = async(req, res) => {
  const {email, password} = req.body;

  try {
    const user = await getUserPassword(email);

    if (user.rows.length === 0) {
      return res.sendStatus(401).json({ msg: 'Unauthorized' });
    }
    const check = await checkPassword(password, user.rows[0].password);

    if (!check) {
      return res.sendStatus(401).json({ msg: 'Unauthorized' });
    }

    console.log(user.rows[0].id);
    const token = newToken(user.rows[0].id);

    return res.json({token});
  } catch (err) {
    console.log('SIGN_IN', err);
    res.sendStatus(400);
  }
};

const getUser = async(req, res) => {
  res.json(req.user);
  // try {
  //   const user = await getUserById(req.params.id);


  // } catch (err) {
  //   console.log('GET_USER_CON', err);
  //   res.sendStatus(400);
  // }
};

module.exports = {
  signUp,
  signIn,
  getUser
};