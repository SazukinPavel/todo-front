import {render} from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../../../store'
import Login from './Login'

const register=jest.fn()

describe('Login testing',()=>{
    describe('base test',()=>{
        it('render test',()=>{
            const {getByRole,getAllByRole}=render(
            <BrowserRouter>
                <Provider store={store}>
                    <Login></Login>
                </Provider>
            </BrowserRouter>
            )
            expect(getByRole('heading')).toHaveTextContent(/Вход/i)
            expect(getAllByRole('textbox')).toHaveLength(2)
        })
    })
})