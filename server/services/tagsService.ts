import { ITag } from "@/interfaces";
import BaseContext from "../di/baseContext";

export class TagsService extends BaseContext {
    constructor(opts) {
        super(opts)
        this.findAllTags = this.findAllTags.bind(this)
        this.findTagById = this.findTagById.bind(this)
        this.handleSSRFindAllTags = this.handleSSRFindAllTags.bind(this)
        this.handleSSRFindTag = this.handleSSRFindTag.bind(this)
    }

    public findAllTags(): Promise<ITag[]> {
        return this.di.Tag.findAll()
    }

    public findTagById(id): Promise<ITag> {
        return this.di.Tag.findByPk(id)
    }

    public handleSSRFindAllTags(): Promise<ITag> {
        return this.di.Tag.findAll()
    }

    public handleSSRFindTag(id): Promise<ITag> {

        return this.di.Tag.findByPk(id)
    }

}