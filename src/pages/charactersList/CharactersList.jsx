import React, { useEffect } from "react";
import Cards from "../../components/cards";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  request,
  clear,
  changesSearch,
  pageChange,
} from "../../redux/actions/charactersAction";
import { Container, Search, List } from "./styles.js";

const CharactersList = ({
  request,
  list,
  pageChange,
  term,
  changesSearch,
  pageNumber,
}) => {
  useEffect(() => {
    request();
  }, []);

  const renderCards = () => {
    const character = list.results;
    return character?.map((card) => <Cards card={card} key={card.id} />);
  };

  const handlePageChange = (pageNumber) => {
    pageChange(pageNumber);
    request();
  };

  return (
    <Container>
      <Search>
        <input
          className="searchTerm"
          type="text"
          placeholder="Find character by name"
          value={term}
          onChange={changesSearch}
        />
        <div>
          <button
            className="searchButton"
            type="button"
            onClick={() => request()}
          >
            Search
          </button>
        </div>
      </Search>
      <List>{renderCards()}</List>
      <div className="footer">
        <Pagination
          activePage={pageNumber}
          itemsCountPerPage={20}
          totalItemsCount={list.total}
          pageRangeDisplayed={5}
          onChange={handlePageChange.bind(this)}
        />
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  term: state.character.term,
  list: state.character.list,
  pageNumber: state.character.pageNumber,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ request, clear, changesSearch, pageChange }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);
