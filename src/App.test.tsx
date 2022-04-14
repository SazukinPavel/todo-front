import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { createMemoryHistory } from "history"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { store } from "./store"



describe('App testing',()=>{
    describe('routing testing',()=>{
        it('Login route test',async()=>{
            const {getByText,getByRole,queryByText}=render(<BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>)
            expect(queryByText(/Вход/i)).toBeNull()
            const loginLink=getByText(/login/i)
            await userEvent.click(loginLink)
            expect(getByText(/Вход/i)).toBeInTheDocument()
            expect(getByRole('heading')).toBeInTheDocument()
        })

        it('Register route test',async()=>{
            const {getByText,getByRole,queryByText}=render(<BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>)
            expect(queryByText(/регистрация/i)).toBeNull()
            const loginLink=getByText(/register/i)
            await userEvent.click(loginLink)
            expect(getByText(/регистрация/i)).toBeInTheDocument()
            expect(getByRole('heading')).toBeInTheDocument()
        })
    })
})