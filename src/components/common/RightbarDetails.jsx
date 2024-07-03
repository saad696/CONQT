const RightbarDetails = ({ title, dataObj }) => {
    return (
        <>
            {title && <p className='text-xl font-semibold'>{title}</p>}

            <ul className='mt-4 space-y-2'>
                {Object.keys(dataObj).map((key) => (
                    <li key={key} className='flex justify-between'>
                        <span className='capitalize'>{key}</span>
                        <span>{dataObj[key]}</span>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RightbarDetails;
