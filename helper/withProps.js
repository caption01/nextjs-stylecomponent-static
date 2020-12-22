import React, { useEffect, useState } from "react";

export const useProps = (recieveProps) => (Component) => (props) => {
  const [effectProps, setEffectProps] = useState({});

  useEffect(() => {
    setEffectProps(recieveProps);
  }, [recieveProps]);

  const initProps = {
    title: "intiProps",
  };

  return <Component {...initProps} {...props} {...effectProps} />;
};

export const withProps = (recieveProps) => (Component) => {
  const hocProps = {
    hoc: "get this props",
  };

  class WithProps2 extends React.Component {
    state = {
      stateProps: null,
    };

    componentDidMount() {
      this.setState({
        stateProps: recieveProps,
      });
    }

    render() {
      const stateProps = this.state;

      return <Component {...hocProps} {...stateProps} />;
    }
  }

  return WithProps2;
};
