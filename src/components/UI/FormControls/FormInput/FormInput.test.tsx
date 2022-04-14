import {render} from '@testing-library/react'
import FormInput from './FormInput'

const register=jest.fn()

describe('FormInput testing',()=>{
    describe('base test',()=>{
        it('render test',()=>{
            const formInput=render(<FormInput register={register} placeholder='some'/>)
            expect(formInput.getByRole('textbox')).toBeInTheDocument()
            expect(formInput.getByPlaceholderText('some')).toBeInTheDocument()
        })
    })
})