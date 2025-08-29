import Note from "../models/Note.js"

export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({createdAt:-1});  //Shows newest created
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in getAllNotes controller", error);
    res.status(500).json({message: "Internal Server Error"});
  }
}

export async function getNoteById(req, res){
  try {
    const note = await Note.findById(req.params.id)
    if(!note) return res.status(404).json({message:"Note not found"});
    res.status(200).json(note);
  } catch (error) {
    console.log("Error in getAllNotes controller", error);
    res.status(500).json({message: "Internal Server Error"});    
  }
}

export async function createNote(req, res) {
  try {
    const {title, content} = req.body;
    const note = new Note({title, content});

    const saveNote = await note.save();
    res.status(201).json(saveNote);
  } catch (error) {
    console.log("Error in creating notes controller", error);
    res.status(500).json({message: "Internal Server Error"});
  }
}

export async function updateNote(req, res) {
  try {
    const {title, content} = req.body
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {title, content},
      {
        new: true,
      }
    );

    if (!updatedNote) return res.status(404).json({message: "Not not found"});
    
    res.status(200).json(updatedNote);
  } catch (error) {
    console.log("Error in updating notes in controller", error);
    res.status(500).json({message: "Internal Server Error"});    
  }
}

export async function deleteNote(req, res, next) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id)
    if(!deleteNote) return res.status(404).json({message: "Not not found"});

    res.status(200).json({message: "Deleted successfully"});
  } catch (error) {
    console.log("Error in updating notes in controller", error);
    res.status(500).json({message: "Internal Server Error"});
  }
}