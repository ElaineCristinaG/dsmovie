import './styles.css';
import {ReactComponent as Vector} from 'assets/img/Vector.svg';
import { MoviePage } from 'types/movie';

type Props = {
    page: MoviePage,
    onChange: Function;
}

function Pagination ({ page, onChange} : Props){


    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={page.first} onClick={() => onChange(page.number -1)} >
                    <Vector />
                </button>
                <p>{`${page.number + 1 } de ${page.totalPages}`}</p>
                <button className="dsmovie-pagination-button" disabled={page.last}onClick={() => onChange(page.number +1)} >
                    <Vector className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>

        
        );
}

export default Pagination;