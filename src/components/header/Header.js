import React from 'react';
import logo from '../../util/assets/marvel.svg';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {clear} from '../../redux/actions/charactersAction'
import { Header } from './styles.js';
import { useHistory } from 'react-router-dom'


const Menu = ({clear}) => {

  const handleClick = () => {
    window.location.href = '/marvel-app/';
  }

  return (
  <Header>
    <button onClick={() => handleClick()}>
      <img src={logo} width="30" height="30" className="logo" alt="Logo Marvel" />
    </button>
  </Header>
  )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({clear}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Menu)