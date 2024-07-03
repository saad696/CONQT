import { Select } from 'antd';
import { tncMethodsSelectOptions } from '../../utils/constants';

const TncMethodsOptions = ({ onSelectChange, selectedValuesText, title }) => {
    return (
        <>
            <div className='flex items-center'>
                <label className='w-40'>{title}</label>
                <Select
                    onChange={(value) => onSelectChange(value, 'payment_terms')}
                    className='w-full'
                    defaultValue={tncMethodsSelectOptions[0].toLowerCase()}
                    options={tncMethodsSelectOptions.map((x) => ({
                        value: x.toLowerCase(),
                        lablel: x,
                    }))}
                />
            </div>
            <div className='mt-8'>
                <h3 className='text-lg capitalize font-medium'>
                    {selectedValuesText.payment_terms.value}
                </h3>
                <p>{selectedValuesText.payment_terms.text}</p>
            </div>
        </>
    );
};

export default TncMethodsOptions;
