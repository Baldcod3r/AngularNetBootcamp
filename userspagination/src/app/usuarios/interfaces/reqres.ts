export interface ReqRes {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Usuarios[];
    support:     Support;
}

export interface Usuarios {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}