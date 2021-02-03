//protecting routes 

const jwt = require('jsonwebtoken');
const User = require('../models/User');

// protect routes

// header gonna look like this 
// Authorization: Bearer ${whatevertokenyoustoredincookie}
// in request headers it gonna turn like this: authorization: "Bearer ${whatevertokenyoustoredincookie}"

// header is  content type application in JSON format
const protect = async (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization && authorization.startsWith('Bearer')) {
    const token = authorization.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);
      req.user = await User.findById(decoded.id);
      next();
    } catch {
      res.status(401).json({ success: false, message: 'Not authorized' });
    }
  } else {
    res.status(401).json({ success: false, message: 'Not authorized' });
  }
};

module.exports = protect;