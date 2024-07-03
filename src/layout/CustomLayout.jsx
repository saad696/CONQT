import { Layout, Breadcrumb, Avatar, Button, Row, Col } from 'antd';
import LeftBar from './LeftBar';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Rightbar } from '../';

const { Header, Content } = Layout;

const CustomLayout = ({ children }) => {
    return (
        <>
            <Layout className='min-h-screen'>
                <Header className='flex items-center justify-between bg-purple-600'>
                    <h1 className='text-white font-bold text-3xl'>CONQT</h1>

                    <div className='space-x-4 flex items-center'>
                        <Avatar>CQ</Avatar>
                        <Button
                            type='text'
                            icon={
                                <ShoppingCartOutlined
                                    className='text-white'
                                    size={24}
                                />
                            }
                        />
                    </div>
                </Header>
                <Layout>
                    <LeftBar />
                    <Layout className='px-[24px]'>
                        <Breadcrumb className='my-[16px]' separator='>'>
                            <Breadcrumb.Item>Accounting</Breadcrumb.Item>
                            <Breadcrumb.Item>Purchase Order</Breadcrumb.Item>
                            <Breadcrumb.Item>Edit</Breadcrumb.Item>
                            <Breadcrumb.Item>PO-20311</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content>
                            <Row gutter={16}>
                                <Col xs={16}>{children}</Col>
                                <Col xs={8}>
                                    {' '}
                                    <Rightbar />
                                </Col>
                            </Row>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
};

export default CustomLayout;
