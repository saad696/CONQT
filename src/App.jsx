import GeneralInfo from './components/main/GeneralInfo';
import PoDetails from './components/main/PoDetails';
import CustomLayout from './layout/CustomLayout';

function App() {
    return (
        <>
            <CustomLayout>
                <div className='space-y-6'>
                    <GeneralInfo />
                    <PoDetails />
                </div>
            </CustomLayout>
        </>
    );
}

export default App;
