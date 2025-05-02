import BaseContext from "../di/baseContext";
import { ITag } from "../models/tag";

export class TagsController extends BaseContext {
    constructor(opts) {
        super(opts)
        this.getAllTags = this.getAllTags.bind(this)
        this.getTagById = this.getTagById.bind(this)
        this.handleSSRGetTag = this.handleSSRGetTag.bind(this)
        this.handleSSRGetAll = this.handleSSRGetAll.bind(this)
    }
    public getAllTags(req, res): Promise<ITag[]> {
        const tags = this.di.TagsService.findAllTags().then(tags => {

            return res.json({
                error: false,
                message: '',
                data: tags,
            })
        }).catch(e => {

            return res.status(404).json({
                error: true,
                message: "No tags found!",
                data: null,
            })
        });
        return tags;
    }
    public getTagById(req, res): Promise<ITag> {

        return this.di.TagsService.findTagById(req?.query?.id).then(tag => {

            return res.json({
                error: false,
                message: "",
                data: tag,
            })
        }).catch(e => {

            return res.status(404).json({
                error: true,
                message: `Tag with id ${req?.query?.id} was not found!`,
                data: null,
            })
        });;

    }

    public handleSSRGetTag(req, res): Promise<ITag[]> {
        const { id } = req.contextParams;
        return this.di.TagsService.handleSSRFindTag(id).then(tag => {
            const serializableTag = JSON.parse(JSON.stringify(tag) ?? '')

            return { props: { tag: serializableTag } }
        }).catch(e => {

            return { props: { notFound: true } };
        });

    }
    public handleSSRGetAll(req, res): Promise<ITag> {
        return this.di.TagsService.handleSSRFindAllTags().then(tags => {
            const serializableTags = JSON.parse(JSON.stringify(tags) ?? '')

            return { props: { tags: serializableTags } }
        }).catch(e => {

            return { props: { notFound: true } }
        });

    }

}