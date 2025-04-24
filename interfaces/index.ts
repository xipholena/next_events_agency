import { ReviewStatus, TagType, TicketStatus } from "../enums";

export interface ITicket  {
  id: number;
  status: TicketStatus;
  reserved_time: number;
  user_id: number;
  event_id: number;
}

export interface ITag {
    id: number;
    type: TagType;
    tag_name: string;
}

export interface IReview {
  id: number;
  date?: number;
  rating?: number;
  text?: string;
  status: ReviewStatus;
  event_id:number;
  user_id: number;
}

export enum EventStatus {
  DRAFT='draft',
  OPEN='open',
  SOLD_OUT='sold_out', 
  FINISHED='finished',
}