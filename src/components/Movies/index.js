import {MDBTable, MDBTableHead, MDBContainer, MDBTableBody} from "mdbreact";
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {axiosRequest} from "../../axiosRequest";
import {extractId} from "../../utils/extractId";
import {Search} from "../Search";

export const Movies = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axiosRequest.get('/films', { params: { search } }).then(response => (
      setMovies(response.data.results)
    ))
  }, [search]);

  return (
    <MDBContainer>
      <Search search={search} setSearch={setSearch} />
      <MDBTable className="table-dark">
        <MDBTableHead>
          <tr>
            <th>.</th>
            <th>Name</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
        { movies.map(movie => {
          const id = extractId(movie.url)
          return (
            <tr>
              <td>{ id }</td>
              <td>
                <Link to={`/movies/${id}`}>
                  { movie.title }
                </Link>
              </td>
            </tr>
          )
        }) }
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  )
}
