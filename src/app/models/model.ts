export interface CriteriaFormModel {
    title?: string;
    type: string;
    releaseYear?: string;
}

export interface CriteriaSearchApiModel {
    s?: string;
    page?: number;
    type?: string;
    y: string
}