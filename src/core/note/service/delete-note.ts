import CasoDeUso from "../../shared/casoDeUso";
import ModelNote from "../model/note";
import RepoNotePrisma from "./repoNotePrisma";



export default class DeleteNote implements CasoDeUso<string, ModelNote | void>{

  constructor(private readonly repoNote: RepoNotePrisma) { }

  async handle(data: string): Promise<ModelNote | void> {
    return await this.repoNote.deleteNote(data) ?? undefined
  }
}