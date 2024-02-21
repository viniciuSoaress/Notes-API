import { Router } from "express";
import AddNots from "../core/note/service/add-note";
import RepoPrismaNote from "../external/repoPrismaNote";
import AddNoteController from "../controller/note/add-note";
import GetNotes from "../core/note/service/get-note";
import GetNotesController from "../controller/note/get-notes";
import DeleteNote from "../core/note/service/delete-note";
import DeleteNoteController from "../controller/note/delete-note";

export const routerNote = Router()

const prisma = new RepoPrismaNote()

const addNote = new AddNots(prisma)
new AddNoteController(routerNote, addNote)

const getNotes = new GetNotes(prisma)
new GetNotesController(routerNote, getNotes)

const deleteNote = new DeleteNote(prisma)
new DeleteNoteController(routerNote, deleteNote)