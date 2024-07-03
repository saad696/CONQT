import { LinkOutlined } from '@ant-design/icons';
import {
    Button,
    Card,
    Col,
    Divider,
    Form,
    Input,
    Row,
    Segmented,
    Table,
    Tabs,
} from 'antd';
import { useEffect } from 'react';
import { tableColumns, tableData } from '../../utils/constants';
import { Attachments, TermsAndCondition, Editor } from '../../';

const tabItems = [
    {
        key: '1',
        label: 'Purchase Information',
        children: <Table dataSource={tableData} columns={tableColumns} />,
    },
    {
        key: '2',
        label: 'Attachments',
        children: <Attachments />,
    },
    {
        key: '3',
        label: 'Terms and Conditions',
        children: <TermsAndCondition />,
    },
    {
        key: '4',
        label: 'Additional Information',
        children: <Editor />,
    },
];

const PoDetails = () => {
    const [vendorForm] = Form.useForm();
    const [shipform] = Form.useForm();

    useEffect(() => {
        vendorForm.setFieldsValue({
            company: 'Parsian - Reichert',
            address: '1234 Park Avenue, Mumbai Maharashtra 400001',
        });

        shipform.setFieldsValue({
            company: 'Parsian - Reichert',
            address: '1234 Park Avenue, Mumbai Maharashtra 400001',
        });
    }, [vendorForm, shipform]);

    return (
        <Card>
            <div className='mb-6 flex justify-between items-center'>
                <h2 className='text-xl font-bold'>PO Details</h2>
                <Segmented
                    defaultChecked='Generate PO'
                    options={['Generate PO', 'Update PO']}
                />
            </div>
            <Divider />

            <Row gutter={16}>
                <Col xs={12}>
                    <Card className='bg-blue-50'>
                        <h2 className='text-xl font-bold mb-6'>Vendor</h2>
                        {/* form */}
                        <Form
                            form={vendorForm}
                            name='generalInfo'
                            layout='vertical'
                        >
                            <Form.Item label='Company Name' name='company'>
                                <Input readOnly />
                            </Form.Item>

                            <Form.Item label='Address' name='address'>
                                <Input readOnly />
                            </Form.Item>
                        </Form>
                        {/* form */}
                    </Card>
                </Col>
                <Col xs={12}>
                    <Card className='bg-blue-50'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-xl font-bold mb-6'>Ship To</h2>
                            <Button type='link' className='underline'>
                                Update Information <LinkOutlined />
                            </Button>
                        </div>
                        {/* form */}
                        <Form form={shipform} name='shipForm' layout='vertical'>
                            <Form.Item label='Company Name' name='company'>
                                <Input readOnly />
                            </Form.Item>

                            <Form.Item label='Address' name='address'>
                                <Input readOnly />
                            </Form.Item>
                        </Form>
                        {/* form */}
                    </Card>
                </Col>
            </Row>

            {/* bottom tabs */}
            <Tabs className='mt-8' defaultActiveKey='1' items={tabItems} />
            {/* bottom tabs */}
        </Card>
    );
};

export default PoDetails;
