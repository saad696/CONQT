import { Button } from 'antd';
import GeneralInfo from './components/main/GeneralInfo';
import PoDetails from './components/main/PoDetails';
import CustomLayout from './layout/CustomLayout';
import { BookOutlined } from '@ant-design/icons';

function App() {
    return (
        <>
            <CustomLayout>
                <div className='space-y-6'>
                    <GeneralInfo />
                    <PoDetails />

                    <div className='flex justify-end gap-4 p-6'>
                        <Button size='large' type='dashed' icon={<BookOutlined />}>Save as Draft</Button>
                        <Button size='large' type='primary' icon={<BookOutlined />}>
                            Save and send for approval
                        </Button>
                    </div>
                </div>
            </CustomLayout>
        </>
    );
}

export default App;
