import Film from "./Film";

interface FilmSet {
    page: number;
    results: Film[];
    total_results: number;
    total_pages: number;
}

export default FilmSet;