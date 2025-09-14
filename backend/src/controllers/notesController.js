// * Now lets make the constrollers some fun
import Note from "../../models/Note.js";

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const notesGet = async (req, res) => {
  // * Get method
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    console.error("Get request failed : ", error);
    res.json({ message: "Internal Server error" });
  }
};
export const notesPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const newNote = await note.save();
    console.log("Note created successfully !");
    res.json(newNote);
  } catch (error) {
    console.error("Note can't be created : ", error);
    res.json({ message: "Internal server error" });
  }
};
export const notesPut = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
    });
    if (!updatedNote) return res.sendStatus(404);
    await updatedNote.save();
    console.log("Updated successfully");
    res.json({ message: "Updated Successfully" });
  } catch (error) {
    console.error("Error in controller in Put method");
    res.json({ message: "Can't be updated" });
  }
};
export const notesDelete = async (req, res) => {
  try {
    const { title, content } = req.body;
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) return res.sendStatus(404);
    console.log("Note Deleted successfully !");
    res.json({ message: "The note has been deleted" });
  } catch (error) {
    console.error("The note can't be deleted", error);
    res.json({ message: "Note can't be deleted" });
  }
};
