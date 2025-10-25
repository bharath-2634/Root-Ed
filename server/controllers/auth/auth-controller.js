const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const { OAuth2Client } = require("google-auth-library");


// Google OAuth2 Client
const client = new OAuth2Client(process.env.GOOGLE_OAUTH);

const registerUser = async (req, res) => {
    try {
        const { userName, email, password, authType = "email", MCID } = req.body;

        console.log("Received Data", req.body);

        let userExists = await User.findOne({ email });
        console.log("After Check",userExists)
        if (userExists)
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        console.log("After Check",userExists)
        // Hash the password only if authType is email
        let hashPassword = null;
        if (authType === "email") {
            if (!password) {
                return res.status(400).json({
                    success: false,
                    message: "Password is required for email authentication."
                });
            }
            hashPassword = await bcrypt.hash(password, 12);
        }

        console.log("after pass",req.body);
        // Generate MCID if not provided
        // const generatedMCID = MCID || `MC-${Math.floor(100000 + Math.random() * 900000)}`;

        // Create new user
        const newUser = new User({
            userName,
            email,
            password: hashPassword,
            authType,
            // MCID: generatedMCID,
        });

        console.log("newUser", newUser);

        await newUser.save();
        console.log("after Save");

        // Generate JWT Token
        const token = jwt.sign(
            {
                userName: newUser.userName,
                userId: newUser._id,
                email: newUser.email,
                role: newUser.role,
                // MCID: newUser.MCID,
            },
            "CLIENT_SECRET_KEY",
            { expiresIn: "7d" }
        );

        res.cookie("token", token, { httpOnly: true, secure: false });

        res.status(200).json({
            success: true,
            message: "User registered successfully",
            token,
            isAuthenticated : true,
            user: {
                id: newUser._id,
                userName: newUser.userName,
                email: newUser.email,
                role: newUser.role,
                // MCID: newUser.MCID,
            },
        });

    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
            error
        });
    }
};


// Login User
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("login",req.body);

        let checkUser = await User.findOne({ email });
        console.log(checkUser);
        if (!checkUser)
            return res.json({
                success: false,
                message: "You don't have an account in MC"
            });
        
        // Check Password
        const checkPasswordMatch = await bcrypt.compare(password, checkUser.password);
        
        if (!checkPasswordMatch) {
            return res.json({
                success: false,
                message: "Incorrect password.",
            });
        }

        
        // Generate JWT Token
        const token = jwt.sign(
            {
                userId: checkUser._id,
                email: checkUser.email,
                role: checkUser.role,
                // MCID: checkUser.MCID,
                userName : checkUser.userName
            },
            "CLIENT_SECRET_KEY",
            { expiresIn: "7d" }
        );

        res.cookie("token", token, { httpOnly: true, secure: false }).json({
            success: true,
            message: "Logged in successfully",
            user: {
                email: checkUser.email,
                role: checkUser.role,
                id: checkUser._id,
                userName: checkUser.userName,
                // MCID: checkUser.MCID,
            },
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
            error
        });
    }
};

// ✅ Google Login
const googleAuth = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) {
            return res.status(400).json({ success: false, message: "Token is required" });
        }

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_SECRET,
        });

        const payload = ticket.getPayload();
        // console.log("Google Payload:", payload);

        // Check if the user exists
        let user = await User.findOne({ email: payload.email });
        // console.log("user",user);
        if (!user) {
            // If the user doesn't exist, create a new one
            // const MCID = `MC-${Math.floor(100000 + Math.random() * 900000)}`;

           user = new User({
                userName: payload.family_name,
                email : payload.email,
                avatar_url: payload.picture,
                authType: "google",
            });
            await user.save();
        }

        const jwtToken = jwt.sign(
          {
              userName: payload.family_name || "",
              userId: user._id,
              email: user.email,
              role: user.role,
          },
          "CLIENT_SECRET_KEY",
          { expiresIn: "7d" }
      );
      res.cookie("token", jwtToken, { httpOnly: true, secure: false }).json({
        success: true,
        message: "Google login successful",
        token: jwtToken,
        isAuthenticated: true,
        user: {
            id: user._id,
            userName: user.userName,
            email: user.email,
            role: user.role,
            avatar_url: user.avatar_url,
        },
    });
    
        // res.cookie("token", jwtToken, { httpOnly: true, secure: false }).json(
        //     { success: true, message: "Google login successful", user });

    } catch (error) {
        console.error("Google Auth Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

const logoutUser = (req, res) => {
    res.clearCookie("token").json({
      success: true,
      message: "Logged out successfully!",
    });
};

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token)
      return res.status(401).json({
        success: false,
        message: "Unauthorised user!",
      });
  
    try {
      const decoded = jwt.verify(token, "CLIENT_SECRET_KEY");
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "Unauthorised user!",
      });
    }
  };
  

module.exports = { registerUser, loginUser, googleAuth , logoutUser , authMiddleware};
