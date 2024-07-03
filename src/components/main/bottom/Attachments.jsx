import { InboxOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import Dragger from 'antd/es/upload/Dragger';

const arr = new Array(10).fill(0);

const Attachments = () => {
    return (
        <>
            <Row gutter={16} className='p-4'>
                <Col xs={12}>
                    <Dragger>
                        <p className='ant-upload-drag-icon'>
                            <InboxOutlined />
                        </p>
                        <p className='ant-upload-text'>
                            Click or drag file to this area to upload
                        </p>
                        <p className='ant-upload-hint'>
                            Support for a single or bulk upload. Strictly
                            prohibited from uploading company data or other
                            banned files.
                        </p>
                    </Dragger>
                </Col>
                <Col xs={12} className='border rounded space-y-4 py-6 max-h-60 overflow-y-scroll'>
                    {arr.map((_, i) => (
                        <Card key={i}>Upload {i+1}</Card>
                    ))}
                </Col>
            </Row>
        </>
    );
};

export default Attachments;
