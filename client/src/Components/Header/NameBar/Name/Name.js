import React, { PureComponent } from 'react';
import classes from './Name.module.scss';


class Name extends PureComponent{
  render(){
    let nameState = this.props.active ? classes.active : null;
    nameState = this.props.complete ? classes.complete : nameState;
    return (
      <div className={classes.Name}>
        <span
          onClick={() => this.props.click(this.props.content)}
          className={nameState}>
          {this.props.content}
        </span>
      </div>
    );
  }
}

export default Name;