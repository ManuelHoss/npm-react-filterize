import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    data: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    filterDefinitions: PropTypes.object,
};

const Filterize = ({ data, onChange, filterDeclaration }) => {
    // const renderSwitch = ({ values, path }) => {
    //     return (
    //         <div
    //             style={{
    //                 width: '100%',
    //                 height: 50,
    //             }}
    //             key={path}>
    //             <label>{get(values, 'label')}</label>
    //             <checkbox onValueChange={input => handleChange(path, input)} value={get(values, 'value')} />
    //         </div>
    //     );
    // };

    // const renderTextInput = ({ values, path, placeholder }) => {
    //     return (
    //         <Item
    //             style={{
    //                 width: '100%',
    //                 height: 50,
    //             }}
    //             key={path}>
    //             <Icon name="ios-search" />
    //             <Input
    //                 placeholder={placeholder}
    //                 value={get(values, 'value', '')}
    //                 onChangeText={input => handleChange(path, input)}
    //             />
    //             <Icon name="times" type="FontAwesome5" onPress={() => handleChange(path, '')} />
    //         </Item>
    //     );
    // };

    const renderSelect = ({ values, path }) => {
        return (
            <div
                style={{
                    width: '100%',
                    height: 50,
                }}
                key={path}>
                <label>{get(values, 'label')}</label>
                <div picker>
                    <select
                        onValueChange={input => handleChange(path, input)}
                        style={{
                            inputIOS: {
                                height: '100%',
                                width: '100%',
                                fontSize: 18,
                            },
                            inputAndroid: {},
                            placeholder: {
                                color: 'black',
                                fontSize: 18,
                            },
                            viewContainer: {
                                width: '100%',
                            },
                        }}
                        value={get(values, 'value')}
                        placeholder={get(values, 'placeholder', {})}
                        options={get(values, 'items', [])}
                    />
                </div>
            </div>
        );
    };

    const renderItems = () => {
        const filterTypes = {
            switch: renderSwitch,
            select: renderSelect,
            text: renderTextInput,
        };

        return Object.keys(filterDeclaration).map(filterKey => {
            let values = filterDeclaration[filterKey];
            let path = `${filterKey}.value`;
            let { type, placeholder } = values;
            let render = get(filterTypes, type, () => {});
            return render({ values, path, placeholder });
        });
    };

    return (
        <div
            style={{
                backgroundColor: styling.mainForegroundColor,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                paddingTop: 0,
                flexDirection: 'column',
                width: '100%',
            }}>
            {renderItems()}
        </div>
    );
};

Filterize.propTypes = propTypes;

export default Filterize;
