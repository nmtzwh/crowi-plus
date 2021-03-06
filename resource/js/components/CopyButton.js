import React from 'react';
import ClipboardButton from 'react-clipboard.js';

export default class CopyButton extends React.Component {

  constructor(props) {
    super(props);

    this.showToolTip = this.showToolTip.bind(this);
  }

  showToolTip() {
    const buttonId = `#${this.props.buttonId}`;
    $(buttonId).tooltip('show');
    setTimeout(() => {
      $(buttonId).tooltip('hide');
    }, 1000);
  }

  render() {
    const containerStyle = {
    }
    const style = Object.assign({
      fontSize: "0.8em",
      padding: "0 2px",
      border: 'none',
      verticalAlign: 'text-top',
    }, this.props.buttonStyle);

    return (
      <span className="btn-copy-container" style={containerStyle}>
        <ClipboardButton className={this.props.buttonClassName}
            button-id={this.props.buttonId} button-data-toggle="tooltip" button-title="copied!" button-data-placement="bottom" button-data-trigger="manual"
            button-style={style}
            data-clipboard-text={this.props.text} onSuccess={this.showToolTip}>

          <i className={this.props.iconClassName}></i>
        </ClipboardButton>
      </span>
    );
  }
}

CopyButton.propTypes = {
  text: React.PropTypes.string.isRequired,
  buttonId: React.PropTypes.string.isRequired,
  buttonClassName: React.PropTypes.string.isRequired,
  buttonStyle: React.PropTypes.object,
  iconClassName: React.PropTypes.string.isRequired,
};
CopyButton.defaultProps = {
  buttonId: 'btnCopy',
  buttonStyle: {},
};
