import React, { PureComponent } from 'react';
import classes from './Name.module.scss';


class Name extends PureComponent{
  render(){
    const spanClass = this.props.active ? classes.active : null;
    return (
      <div className={classes.Name}>
        <span
          onClick={() => this.props.click(this.props.content)}
          className={spanClass}>
          {this.props.content}
        </span>
      </div>
    );
  }
}

export default Name;