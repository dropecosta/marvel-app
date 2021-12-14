import React from 'react'
import logo from '../../util/assets/marvel.svg'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {clear} from '../../redux/actions/charactersAction'
import { Header } from './styles.js';

const Menu = ({clear}) => (
  <Header className="navbar navbar-dark">
    <a className="navbar-brand" href="/" onClick={() => clear()}>
      <img src={logo} width="30" height="30" className="logo" alt="Logo Marvel" />
    </a>
  </Header>
)

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({clear}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Menu)