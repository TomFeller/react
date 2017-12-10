import React from 'react';

class Panel extends React.Component {
  render() {
    return (
      <article className="panel">
        <div className="panel__header">{this.props.title}</div>
        <div className="panel__content">{this.props.content}</div>
        <div className="panel__footer">{this.props.footer}</div>
      </article>
    )
  }
}

export default Panel;