import React, { Component } from 'react'
import Settings from './Settings'
import PersonalInfo from './PersonalInfo'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      section: 'settings',
    }
    this._section = this._section.bind(this)
    this._onClick = this._onClick.bind(this)
  }

  componentWillMount() {
    // user query
  }

  _section() {
    switch(this.state.section) {
      case 'settings':
        return (<Settings />);
        break;
      case 'personal':
        return (<PersonalInfo />);
        break;
      default:
        return null;
    }
  }

  _onClick(section) {
    this.setState({
      section: section
    })
  }

  render() {
    return (
      <div className="col-md-offset-2 col-md-8">
        <h2>
          Profile
        </h2>
        <div>
          <ul className="ul-profile col-md-3">
            <li onClick={() => {this._onClick('settings')}} className="profile-list"><h3>Settings</h3></li>
            <li onClick={() => {this._onClick('personal')}} className="profile-list"><h3>Personal Info</h3></li>
          </ul>
        </div>
        <div className="col-md-9">
          {this._section()}
        </div>
      </div>
    )
  }
}