import React, { Component } from 'react';
import SessionOption from './sessionOption';
import errorReport from '../../../modules/errorReport';
import address from '../../../config/address.json';
import getCookieValue from '../../../modules/getCookieValue';
import Loading from '../../common/loading';

class DetgoriUpload extends Component {
  static defaultProps={
    seasonInfo: { session: [] }
  }
  state = {
    opened: false,
    onUpload: null,
    uploading: false,
    uploadError: false,
  };

  handleClick = () => {
    this.setState({ opened: this.state.opened ? false : true });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.opened === false && this.state.opened === true) {
    }
  };

  handlePost = (e) => {
    this.setState({ uploading: true });
    e.preventDefault();
    let formElement = e.target;
    let data = new FormData(formElement);
    let request_url = address.back + 'detgori/';
    const xhr = new XMLHttpRequest();
    xhr.open('POST', request_url);
    xhr.withCredentials = true;
    const csrfToken = getCookieValue(document.cookie, 'csrftoken');
    xhr.setRequestHeader('X-CSRFToken', csrfToken);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 201) {
        this.setState({ opened: false, uploading: false, uploadError: false });
        this.props.onUpload();
      }
      if (xhr.readyState === 4 && xhr.status >= 400) {
        this.setState({ uploading: false, uploadError: true });
        errorReport(xhr.statusText, 'detgori-upload');
      }
    };
    xhr.send(data);
  };

  render() {
    if (this.state.uploading) {
      return (
        <Loading/>
      );
    }

    if (this.state.opened === true) {
      const sessionOptions = this.props.seasonInfo.session.slice().reverse().map(
        (sessionInfo, idx) => <SessionOption info={sessionInfo} key={idx} />,
      );
      return (
        <div className="border rounded mb-3">
          <div className="m-3 row " width="100%">
            <form id="detgoriForm" onSubmit={this.handlePost}>
              <select
                className="form-select form-select-md mb-3"
                name="parentSession"
              >
                {sessionOptions}
              </select>
              <p>
                <input
                  className="form-control"
                  name="title"
                  type="text"
                  placeholder="????????? ??????????????????"
                />
              </p>
              <p>
                <input className="form-control" name="pdf" type="file" />
              </p>
              {this.state.uploadError ? (
                <p className="text-danger">
                  ????????? ???????????? ????????? ???????????????. (PDF????????? ?????????
                  ???????????????.)
                </p>
              ) : (
                ''
              )}
              <button className="btn btn-light border float-end">
                {' '}
                ????????????{' '}
              </button>
              <button
                className="btn float-end mx-2 btn-light border"
                onClick={this.handleClick}
              >
                ????????? ??????
              </button>
            </form>
          </div>
        </div>
      );
    }

    return (
      <div className="row m-0">
        <div className="col-sm-9"></div>
        <button
          onClick={this.handleClick}
          className="col-sm-3 btn btn-outline-secondary mb-3"
        >
          ????????? ?????????
        </button>
      </div>
    );
  }
}

export default DetgoriUpload;
