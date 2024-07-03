import { Card, Checkbox, Col, Divider, Row } from 'antd';
import {
    tncMethodsSelectOptionsText,
    tncOptions,
} from '../../../utils/constants';
import { useState } from 'react';
import { TncMethodsOptions } from '../../../';

const firstMethod = tncOptions[0].toLowerCase().split(' ').join('_');

const TermsAndCondition = () => {
    const [selectedMethods, setSelectedMethods] = useState(firstMethod);

    const [selectedValuesText, setSelectedValuesText] = useState({
        payment_terms: {
            value: 'net-13',
            text: tncMethodsSelectOptionsText['net-13'],
        },
        delivery_terms: null,
        shipment_methods: null,
    });

    const onCheckboxSelect = (checkValues) => {
        setSelectedMethods(checkValues);
    };

    const onSelectChange = (value, type) => {
        console.log(value, type);
        setSelectedValuesText((prevState) => ({
            ...prevState,
            [type]: { value, text: tncMethodsSelectOptionsText[value] },
        }));
    };

    return (
        <div className='space-y-8'>
            <Card className='bg-gray-100'>
                <Checkbox.Group
                    options={tncOptions.map((x) => ({
                        label: x,
                        value: x.toLowerCase().split(' ').join('_'),
                    }))}
                    defaultValue={[firstMethod]}
                    onChange={onCheckboxSelect}
                />
            </Card>
            {selectedMethods.includes('payment_terms') && (
                <Row>
                    <Col xs={10}>
                        <TncMethodsOptions
                            title='Payment Terms'
                            onSelectChange={onSelectChange}
                            selectedValuesText={selectedValuesText}
                        />
                    </Col>
                    <Divider />
                </Row>
            )}
            {selectedMethods.includes('delivery_terms') && (
                <Row>
                    <Col xs={10}>
                        <TncMethodsOptions
                            title='Delivery Terms'
                            onSelectChange={onSelectChange}
                            selectedValuesText={selectedValuesText}
                        />
                    </Col>
                    <Divider />
                </Row>
            )}
            {selectedMethods.includes('shipment_method') && (
                <Row>
                    <Col xs={10}>
                        <TncMethodsOptions
                            title='Shipment Method'
                            onSelectChange={onSelectChange}
                            selectedValuesText={selectedValuesText}
                        />
                    </Col>
                    <Divider />
                </Row>
            )}
        </div>
    );
};

export default TermsAndCondition;
