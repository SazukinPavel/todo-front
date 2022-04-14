import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ModalWindow from './ModalWindow'


describe('FormInput testing',()=>{
    describe('base testq',()=>{
        it('render test',()=>{
            const onClose=jest.fn()
            const {getByText}=render(<ModalWindow onClose={onClose}><h1>some</h1></ModalWindow>)
            expect(getByText('some')).toBeInTheDocument()
        })

        it('close event test',async ()=>{
            const onClose=jest.fn()
            const {getByText}=render(<ModalWindow onClose={onClose}><h1>some</h1></ModalWindow>)
            await userEvent.click(getByText(/x/i))
            expect(onClose).toHaveBeenCalledTimes(1)
        })
    })
})