
export enum RoleEnum {
    USER = 'user',
    ADMIN = 'admin',
    MODERATOR = 'moderator',
    OPERATOR = 'operator'
}

export enum EventStatus {
    DRAFT = 'draft',
    OPEN = 'open',
    SOLD_OUT = 'sold_out',
    FINISHED = 'finished',
}

export enum TagEnum {
    EVENT_TYPE = 'event_type',
    GENRE = 'genre',
    AGE = 'age',
    DURATION = 'duration',
    CITY = 'city',
}

export enum TicketStatus {
    FREE = 'free',
    RESERVED = 'reserved',
    SOLD = 'sold',
    USED = 'used',
    REFUND = 'refund',
}

export enum ReviewStatus {
    PENDING = 'pending',
    APPROVED = 'approved'
}