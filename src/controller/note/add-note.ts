import { Router } from "express"
import AddNots from "../../core/note/service/add-note";


export default class AddNoteController {

  constructor(
    server: Router,
    casoDeUso: AddNots
  ) {
    server.post('/', async (req, res, next) => {

      const { description } = req.body as any
      try {
        const newNote = await casoDeUso.handle(description)

        res.send(newNote)
      } catch (error) {
        next(error)
      }
    })
  }
}