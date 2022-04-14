import { render } from "@testing-library/react"
import FormErrorMessage, { FormErrorMessageProps } from "./FormErrorMessage"

const emptyProps:FormErrorMessageProps={}
const errorProps:FormErrorMessageProps={message:'error'}

describe('Form error testing',()=>{

    describe('base functional',()=>{

        it('is exist',()=>{
            const {getByText}=render(<FormErrorMessage {...errorProps}/>)
            expect(getByText('error')).toBeInTheDocument()
        })

        it('error message change',()=>{
            const {rerender,queryByText,getByText}=render(<FormErrorMessage {...emptyProps}/>)
            expect(queryByText('error')).toBeNull()
            rerender(<FormErrorMessage {...errorProps}/>)
            expect(getByText('error')).toBeInTheDocument()
       })
    })

})