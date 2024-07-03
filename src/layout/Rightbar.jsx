import { Card, Tabs } from 'antd';

import { Vendor, History, PRComponent, Quotation } from '..';
import { useEffect, useState } from 'react';

const Rightbar = () => {
    const [tabItems, setTabItems] = useState();

    useEffect(() => {
        const tabItems = [
            {
                key: '1',
                label: 'Vendor',
                children: <Vendor />,
            },
            {
                key: '2',
                label: 'PR',
                children: <PRComponent />,
            },
            {
                key: '3',
                label: 'Quotation',
                children: <Quotation />,
            },
            {
                key: '4',
                label: 'History',
                children: <History />,
            },
        ];

        setTabItems(tabItems);
    }, []);

    return (
        <>
            <Card styles={{ body: { padding: 0 } }}>
                <div className='border-b-[1px] one-edge-shadow'>
                    <h2 className='text-xl font-bold p-4 rounded-none'>
                        PO Details
                    </h2>
                </div>

                <div className='p-4 pt-0'>
                    <Tabs defaultActiveKey='1' items={tabItems} />
                </div>
            </Card>
        </>
    );
};

export default Rightbar;
