import Pagination from "components/Pagination";
import MovieCard from "components/MovieCards";
import axios from "axios";
import { BASE_URL } from "utils/request";

//forma errada

axios.get(`${BASE_URL}/movies?size=12&page=0`)
.then(response => {
    console.log(response.data);

});


function Listing(){
    return (
        <> 
            <Pagination />

            <div className="container">
                <div className="row"> 
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3 ">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>  
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div> 
                </div>
            </div>

            
            
        </>
      
    );
}

export default Listing;