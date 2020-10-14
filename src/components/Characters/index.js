import {MDBTable, MDBTableHead, MDBTableBody, MDBContainer} from "mdbreact";
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {axiosRequest} from "../../axiosRequest";
import {extractId} from "../../utils/extractId";
import {Search} from "../Search";

export const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axiosRequest.get('/people', { params: { search } }).then(response => (
      setCharacters(response.data.results)
    ))
  }, [search]);

  return (
    <MDBContainer>
      <Search
        setSearch={setSearch}
        search={search}
      />
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>.</th>
            <th>Name</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          { characters.map(character => {
            const id = extractId(character.url)
            return (
              <tr>
                <td>
                  { id }
                </td>
                <td>
                  <Link to={`/characters/${id}`}>
                    { character.name }
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
