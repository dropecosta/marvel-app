import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  edit,
  changeName,
  changeDescription,
  selectCharacter,
} from "../../redux/actions/charactersAction";
import {
  Container,
  Content,
  Button,
  InputName,
  DescriptionName,
  Series,
} from "./styles.js";

const CharacterDetail = ({
  selectCharacter,
  characterData,
  edit,
  editable,
  changeName,
  changeDescription,
}) => {
  useEffect(() => {
    selectCharacter(JSON.parse(localStorage.getItem("charData")));
  }, []);

  const renderSeries = () => {
    const series = characterData.series;
    return series.map((serie) => (
      <li className="seriesList list-group-item" key={serie.id}>
        {serie.name}
      </li>
    ));
  };

  return (
    characterData && (
      <Container>
        <div className="img-content">
          <img
            src={`${characterData.imgPath}/portrait_fantastic.jpg`}
            alt="character"
          />
        </div>

        <Content>
          <Button type="button" onClick={() => edit()}>
            {editable ? "Edit" : "Save Info"}
          </Button>

          <InputName
            type="text"
            className="input-name"
            disabled={editable}
            value={characterData.name}
            onChange={changeName}
          />
          <DescriptionName
            className="detailsDescription"
            disabled={editable}
            value={characterData.description}
            onChange={changeDescription}
          />

          <Series>
            <h2>Series</h2>
            <ul>{renderSeries()}</ul>
          </Series>

          <Link to="/">
            <Button type="button" className="back-button">
              Back
            </Button>
          </Link>
        </Content>
      </Container>
    )
  );
};

const mapStateToProps = (state) => ({
  characterData: {
    name: state.character.characterData.name,
    id: state.character.characterData.id,
    description: state.character.characterData.description,
    imgPath: state.character.characterData.imgPath,
    series: state.character.characterData.series,
  },
  editable: state.character.editable,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { edit, changeName, changeDescription, selectCharacter },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
