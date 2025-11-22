const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: function () {
        return this.authType === "email"; 
    },
  },
  googleId: { 
    type: String, 
    unique: true, 
    sparse: true 
  },
  authType: { 
    type: String, 
    enum: ["email", "google"],
    required: true 
  },
  role: {
    type: String,
    enum: ["Student", "Tutor", "Admin"],
    default: "Student",
  },

  profile: {
    full_name: String,
    gender: {
      type: String,
      enum: ["male", "female", "trans"],
    },
    phone: String,
    location: String,
    DOB: Date,
    bio: String,
    avatar_url: String,
    links: {
      website: String,
      github: String,
      linkedin: String,
      instagram: String,
      threads: String,
      twitter: String,
    },
    experience: {
      work: String,
      education: String,
    },
    skills: [String],
    address: {
      street: String,
      city: String,
      state: String,
      postal_code: String,
      country: String,
    }
  },

  metadata: {
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "banned"],
      default: "active",
    },
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
