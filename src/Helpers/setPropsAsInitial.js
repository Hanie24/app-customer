// Highe Order Component: un tipo de patron de diseño que añade funcionalidad a un componente u objeto y regrasa otro objeto con la nueva funcionalidad, pero sin modificar el objeto original
import React, { Component } from 'react';

export const setPropsAsInitial = WrappedComponent => (
    class extends Component {
        render() {
            return <WrappedComponent {...this.props} 
                initialValues={this.props} />;
        }
    }
);