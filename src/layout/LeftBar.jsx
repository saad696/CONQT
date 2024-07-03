import { Layout, Menu } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const LeftBar = () => {
    return (
        <>
            <Layout.Sider width={200}>
                <Menu
                    className='!bg-purple-900 h-full border-r-0'
                    mode='inline'
                    defaultOpenKeys={['accounting']}
                    items={[
                        {
                            key: 'accounting',
                            icon: (
                                <CheckCircleOutlined className='!text-white' />
                            ),
                            label: <p className='text-white'>Accounting</p>,
                            children: [
                                {
                                    key: 'purchase_order',
                                    label: (
                                        <p className='text-white'>
                                            Purchase Order
                                        </p>
                                    ),
                                },
                            ],
                        },
                    ]}
                />
            </Layout.Sider>
        </>
    );
};

export default LeftBar;
