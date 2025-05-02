
import BaseContext from "../di/baseContext";
import { IReview } from "../models/review";

export class ReviewsController extends BaseContext {
    constructor(opts) {
        super(opts);
        this.getAllReviews = this.getAllReviews.bind(this);
        this.getReviewById = this.getReviewById.bind(this);
        this.handleSSRGetAll = this.handleSSRGetAll.bind(this);
        this.handleSSRGetReview = this.handleSSRGetReview.bind(this);
    }

    public getAllReviews(req, res): Promise<IReview[]> {
        return this.di.ReviewsService.findAllReviews().then(reviews => {
            return res.json({
                error: false,
                message: "",
                data: reviews
            })
        }).catch(e => {
            return res.status(404).json({
                error: true,
                message: "No reviews found!",
                data: null,
            })
        });
    }

    public getReviewById(req, res): Promise<IReview> {
        return this.di.ReviewsService.findReviewById(req?.query?.id).then(review => {

            return res.json({
                error: false,
                message: "",
                data: review,
            })
        }).catch(e => {

            return res.status(404).json({
                error: true,
                message: `Review with id ${req?.query?.id} was not found!`,
                data: null,
            })
        });
    }

    public handleSSRGetReview(req, res): Promise<IReview> {
        const { id } = req.contextParams;
        return this.di.ReviewsService.handleSSRFindReview(id).then(review => {
            const serializableReview = JSON.parse(JSON.stringify(review) ?? '')

            return { props: { review: serializableReview } }
        }).catch(e => {

            return { props: { notFound: true } };
        });
    }

    public handleSSRGetAll(req, res): Promise<IReview[]> {
        return this.di.ReviewsService.handleSSRFindAllReviews().then(reviews => {
            const serializableReviews = JSON.parse(JSON.stringify(reviews) ?? '')

            return { props: { reviews: serializableReviews } }
        }).catch(e => {

            return { props: { notFound: true } }
        });
    }

}

