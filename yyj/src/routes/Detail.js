import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
                const json = await response.json();
                console.log(json);
                setMovie(json.data.movie);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        getMovie();
    }, [id]);

    // movie가 null이면 아무것도 반환하지 않음
    if (!movie) {
        return null;
    }

    // movie가 null이 아닐 때만 아래 내용을 반환
    return (
        <div className={styles.detail}>
            <img src={movie.medium_cover_image} alt={movie.title} className={styles.movie__img} />
            <h2 className={styles.movie__title}>{movie.title}</h2>
            <h3 className={styles.movie__year}>{movie.year}</h3>
            <p>{movie.description_full.length > 235 ? `${movie.description_full.slice(0, 235)}`: movie.description_full}</p>
            <ul className={styles.movie__genres}>
                {movie.genres.map(g => (<li key={g}>{g}</li>))}
            </ul>
        </div>
    );
}

Detail.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Detail;
