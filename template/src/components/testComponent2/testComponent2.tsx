import { answerTitle, getDataTitle } from '../../constants/constants';
import './testComponent2.scss'

const testComponent2 = () => {
    const buttonOnClick = () => {
        console.log('click');
    }

    return (
        <>
            <div className='testComponent2'>
                <button className='testComponent2__btn' onClick={buttonOnClick}>
                    {getDataTitle}
                </button>
                <h1 className='testComponent2__h1'>{answerTitle}</h1>
                <div className='testComponent2__body'></div>
            </div>
        </>
    )

}

export default testComponent2;
