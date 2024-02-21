import  ModelNote  from "../model/note";


export default interface RepoNotePrisma {
  addNote(data: string): Promise<ModelNote>,
  deleteNote(id: string): Promise<ModelNote | void>,
  getNotes(): Promise<ModelNote[]>
}