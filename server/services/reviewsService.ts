import { NextApiRequest, NextApiResponse } from "next";
import BaseContext from "../di/baseContext";
export class ReviewService extends BaseContext {
    constructor(opts) {
        super(opts)
        this.findAllReviews = this.findAllReviews.bind(this)
        this.findReviewById = this.findReviewById.bind(this)
        this.handleSSRFindAllReviews = this.handleSSRFindAllReviews.bind(this)
        this.handleSSRFindReview = this.handleSSRFindReview.bind(this)
    }

    public findAllReviews(): Promise<IReview[]> {
        return this.di.Review.findAll()
    }

    public findReviewById(id): Promise<IReview> {
        return this.di.Review.findByPk(id)
    }

    public handleSSRFindAllReviews(): Promise<IReview[]> {
        return this.di.Review.findAll()
    }

    public handleSSRFindReview(id): Promise<IReview[]> {
        return this.di.Review.findByPk(id)
    }

}