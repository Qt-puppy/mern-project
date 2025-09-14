import express from "express";
import {
  notesGet,
  notesPost,
  notesPut,
  notesDelete,
  getNoteById,
} from "../controllers/notesController.js";

const router = express.Router();

export default router;

router.get("/:id", getNoteById);

router.get("/", notesGet);

router.post("/", notesPost);

router.put("/:id", notesPut);

router.delete("/:id", notesDelete);
