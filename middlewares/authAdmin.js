import jwt from 'jsonwebtoken';

// ADMIN AUTHENTICATION MIDDLEWARE
const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;

    if (!atoken) {
      return res.json({ success: false, message: 'Not Authorized Login Again' });
    }

    const decoded = jwt.verify(atoken, process.env.JWT_SECRET);

    // ✅ FIX: Compare decoded email
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.json({ success: false, message: 'Not Authorized Login Again' });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authAdmin;
