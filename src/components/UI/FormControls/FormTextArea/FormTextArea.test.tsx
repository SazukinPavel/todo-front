import {render} from '@testing-library/react'
import FormTextArea from './FormTextArea'

const register=jest.fn()

describe('FormInput testing',()=>{
    describe('base testq',()=>{
        it('render test',()=>{
            const formTextArea=render(<FormTextArea register={register} placeholder='some'/>)
            expect(formTextArea.getByRole('textbox')).toBeInTheDocument()
            expect(formTextArea.getByPlaceholderText('some')).toBeInTheDocument()
        })
    })
})