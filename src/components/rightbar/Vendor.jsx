import { billingDetails, vendorContactDetails } from '../../utils/constants';
import { RightbarDetails } from '../../';
import { Divider } from 'antd';

const Vendor = () => {
    return (
        <>
            <RightbarDetails
                title={'Vendor Contact Information'}
                dataObj={vendorContactDetails}
            />
            <Divider />
            <RightbarDetails
                title={'Billing Details'}
                dataObj={billingDetails}
            />
        </>
    );
};

export default Vendor;
