import { Card, Col, Form, Input, Row } from 'antd';
import { useState } from 'react';

const GeneralInfo = () => {
    const [generalForm] = Form.useForm();

    useState(() => {
        generalForm.setFieldsValue({
            pon: 'PO-20311',
            pod: '16/092023',
            dd: '24/10/2023',
            status: 'draft',
        });
    }, []);
    return (
        <Card>
            <h2 className='text-xl font-bold mb-6'>General information</h2>

            {/* form */}
            <Form form={generalForm} name='generalInfo' layout='vertical'>
                <Row gutter={16}>
                    <Col xs={12}>
                        <Form.Item label='Purchase Order Number' name='pon'>
                            <Input readOnly />
                        </Form.Item>
                    </Col>
                    <Col xs={12}>
                        <Form.Item label='Purchase Order Date' name='pod'>
                            <Input readOnly />
                        </Form.Item>
                    </Col>
                    <Col xs={12}>
                        <Form.Item label='Delivery Date' name='dd'>
                            <Input readOnly />
                        </Form.Item>
                    </Col>
                    <Col xs={12}>
                        <Form.Item label='Status' name='status'>
                            <Input readOnly />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            {/* form */}
        </Card>
    );
};

export default GeneralInfo;
