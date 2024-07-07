// src/middleware/authorization.js
const authorizeUser = (requiredRole) => (req, res, next) => {
  const userRole = req.user.role;

  if (userRole !== requiredRole) {
    return res
      .status(403)
      .json({ error: "Authorization failed. Insufficient privileges." });
  }

  next();
};

module.exports = authorizeUser;
