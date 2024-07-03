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
            <Card title={<h2>Other Details</h2>} styles={{body: {padding: '0 18px 18px 18px'}}}>
                <Tabs defaultActiveKey='1' items={tabItems} />
            </Card>
        </>
    );
};

export default Rightbar;
