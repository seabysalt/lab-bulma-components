import React, { Component } from 'react';


export default class CoolButton extends Component {
  render() {
    const bulmaButtons = {
      isActive: 'is-active',
      isBlack: 'is-black',
      isCentered: 'is-centered',
      isDanger: 'is-danger',
      isDark: 'is-dark',
      isFocused: 'is-focused',
      isGrouped: 'is-grouped',
      isHovered: 'is-hovered',
      isInfo: 'is-info',
      isInverted: 'is-inverted',
      isLarge: 'is-large',
      isLight: 'is-light',
      isLink: 'is-link',
      isLoading: 'is-loading',
      isMedium: 'is-medium',
      isOutlined: 'is-outlined',
      isPrimary: 'is-primary',
      isRight: 'is-right',
      isRounded: 'is-rounded',
      isSelected: 'is-selected',
      isSmall: 'is-small',
      isStatic: 'is-static',
      isSuccess: 'is-success',
      isText: 'is-text',
      isWarning: 'is-warning',
      isWhite: 'is-white',
    }
    
    // let cls = Object.keys(this.props).filter(x => { 
    //   if(x in classes) x
    // } );
    // console.log(this.props)
    // console.log(cls)
    // const btn = `button is-small ${this.props.className} ${cls.split(' ')}`

    // let selectedClasses = "button " + 
    //     this.props.className || "";

    //     if(this.props.isSmall) {
    //       classes += "is-small";
    //       }  
    //     if(this.props.isDanger) {
    //       classes += "is-danger";
    //       }  
    //     if(this.props.isRounded) {
    //         classes += "is-rounded";
    //         } ;

      let classes = "button ";

      Object.keys(this.props).forEach(key => {
        if (key === 'className') classes += this.props[key] + " ";
        else if (key != "children") classes += bulmaButtons[key] + " ";
      })

      return (
      <div>
        <button className = {classes} >{this.props.children}</button>
      </div>
    )
  }
}
