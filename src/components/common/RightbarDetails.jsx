import { Button, Tag } from 'antd';

const CustomOutput = ({ icon, color, title, type }) => {
    return type === 'tag' ? (
        <Tag icon={icon} color={color}>
            {title}
        </Tag>
    ) : (
        <Button className='underline' type='link' color={color}>
            {title}
        </Button>
    );
};

const RightbarDetails = ({ title, dataObj }) => {
    return (
        <>
            {title && <p className='text-xl font-semibold'>{title}</p>}

            <ul className='mt-4 space-y-2'>
                {Object.keys(dataObj).map((key) => (
                    <li key={key} className='flex justify-between font-medium'>
                        <span className='capitalize text-gray-400'>{key}</span>
                        <span>
                            {Object.prototype.hasOwnProperty.call(
                                dataObj[key],
                                'title'
                            ) ? (
                                <CustomOutput {...dataObj[key]} />
                            ) : (
                                dataObj[key]
                            )}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RightbarDetails;
