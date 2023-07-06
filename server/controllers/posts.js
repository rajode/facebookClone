import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const post = req.body;
  const id = req.params.id;
  try {
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {...post, id}, {new:true})
    res.json(updatedPost)
    res.status(201)
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const post = req.body;
  const id = req.params.id;
  try {
    const {data} = await PostMessage.findByIdAndRemove(id)
    res.json({message: "post deleted success"})
    res.status(201)
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const likePost = async (req, res) => {
//   const post = req.body;
//   const id = req.params.id;
//   const likeCount = likeCount+1;
//   try {
//     const updatedPost = await PostMessage.findByIdAndUpdate(id, {...post, id, likeCount}, {new:true})
//     res.json(updatedPost)
//     res.status(201)
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };
