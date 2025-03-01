import { useRef } from 'react';
import JoditEditor from 'jodit-react';

const Editor = ({ getValue, value }) => {
    const editor = useRef(null);
    return (
        <JoditEditor
            // className='!h-[250px] lg:!h-[300px] !mb-16 pb-16 md:pb-0'
            ref={editor}
            value={value}
            onBlur={(newContent) => getValue(newContent)} // preferred to use only this option to update the content for performance reasons
        />
    );
};

export default Editor;
