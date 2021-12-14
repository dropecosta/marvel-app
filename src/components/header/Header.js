import React from 'react';
import logo from '../../util/assets/marvel.svg';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {clear} from '../../redux/actions/charactersAction'
import { Header } from './styles.js';


const Menu = ({clear}) => {;

  return (
      <Header>
          <img src={logo} width="30" height="30" className="logo" alt="Logo Marvel" />
      </Header>
  )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({clear}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Menu)